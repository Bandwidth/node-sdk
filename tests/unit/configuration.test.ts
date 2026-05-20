import axios from 'axios';
import { Configuration } from '../../configuration';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Configuration OAuth', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('fetches an access token from the oauth endpoint using client credentials', async () => {
        mockedAxios.request.mockResolvedValueOnce({
            data: { access_token: 'fresh-token', expires_in: 3600 }
        });

        const config = new Configuration({
            clientId: 'my-id',
            clientSecret: 'my-secret'
        });
        const token = await (config.accessToken as () => Promise<string>)();

        expect(token).toBe('fresh-token');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
        expect(mockedAxios.request).toHaveBeenCalledWith({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            auth: { username: 'my-id', password: 'my-secret' },
            data: 'grant_type=client_credentials',
            url: 'https://api.bandwidth.com/api/v1/oauth2/token'
        });
    });

    test('caches the token across calls within the expiration window', async () => {
        mockedAxios.request.mockResolvedValueOnce({
            data: { access_token: 'cached-token', expires_in: 3600 }
        });

        const config = new Configuration({
            clientId: 'my-id',
            clientSecret: 'my-secret'
        });
        const token1 = await (config.accessToken as () => Promise<string>)();
        const token2 = await (config.accessToken as () => Promise<string>)();

        expect(token1).toBe('cached-token');
        expect(token2).toBe('cached-token');
        expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    });

    test('refreshes the token when within the 60-second pre-expiry buffer', async () => {
        mockedAxios.request
            .mockResolvedValueOnce({ data: { access_token: 'first-token', expires_in: 30 } })
            .mockResolvedValueOnce({ data: { access_token: 'second-token', expires_in: 3600 } });

        const config = new Configuration({
            clientId: 'my-id',
            clientSecret: 'my-secret'
        });
        const token1 = await (config.accessToken as () => Promise<string>)();
        const token2 = await (config.accessToken as () => Promise<string>)();

        expect(token1).toBe('first-token');
        expect(token2).toBe('second-token');
        expect(mockedAxios.request).toHaveBeenCalledTimes(2);
    });

    test('respects an explicitly provided accessToken string', async () => {
        const config = new Configuration({
            accessToken: 'preset-token'
        });

        expect(config.accessToken).toBe('preset-token');
        expect(mockedAxios.request).not.toHaveBeenCalled();
    });

    test('returns undefined when neither client credentials nor accessToken are set', async () => {
        const config = new Configuration({});
        const token = await (config.accessToken as () => Promise<string | undefined>)();

        expect(token).toBeUndefined();
        expect(mockedAxios.request).not.toHaveBeenCalled();
    });
});

import { TfvBasicAuthentication } from '../../../models/tfv-basic-authentication';

describe('TfvBasicAuthentication', () => {
    test('should accept the expected shape', () => {
        const fixture: TfvBasicAuthentication = {
            username: 'test-username',
            password: 'test-password',
        };

        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
    });
});

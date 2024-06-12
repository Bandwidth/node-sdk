//@ts-nocheck
import { MediaApi } from '../../../api';
import { Configuration } from '../../../configuration';

describe('MediaApi', () => {
    const config = new Configuration({
        username: globalThis.BW_USERNAME,
        password: globalThis.BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const mediaApi = new MediaApi(config);

    const binaryMediaData: string = '123456';
    const binaryMediaName = 'nodejs_binary_media';

    describe('uploadMedia', () => {
        test('should upload binary media', async () => {
            const { status } = await mediaApi.uploadMedia(
                globalThis.BW_ACCOUNT_ID,
                binaryMediaName,
                binaryMediaData,
                undefined,
                undefined,
                { headers: { 'Content-Type': 'text/plain', 'Accept': 'text/plain' } }
            );

            expect(status).toEqual(204);
        });
    });

    describe('listMedia', () => {
        test('should list media', async () => {
            const { status, data } = await mediaApi.listMedia(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].content).toBeString();
            expect(data[0].contentLength).toBeNumber();
            expect(data[0].mediaName).toBeString();
        });
    });

    describe('getMedia', () => {
        test('should get binary media', async () => {
            const { status, data } = await mediaApi.getMedia(globalThis.BW_ACCOUNT_ID, binaryMediaName);

            expect(status).toEqual(200);
            expect(data).toBeDefined();
        });
    });

    describe('deleteMedia', () => {
        test('should delete binary media', async () => {
            const { status } = await mediaApi.deleteMedia(globalThis.BW_ACCOUNT_ID, binaryMediaName);

            expect(status).toEqual(204);
        });
    });
});

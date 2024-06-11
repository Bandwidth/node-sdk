//@ts-nocheck
import { MediaApi } from '../../api';
import { Configuration } from '../../configuration';
import { BinaryLike, createHash, randomUUID } from 'crypto';
import * as fs from 'fs';

describe('MediaApi', () => {
    const config = new Configuration({ username: globalThis.BW_USERNAME, password: globalThis.BW_PASSWORD });
    const mediaApi = new MediaApi(config);

    const binaryMediaData = '123456';
    const mediaFileData = fs.readFileSync('./tests/fixtures/nodejs_cat.jpeg');
    const binaryMediaName = `nodejs_binary_media${randomUUID()}`;
    const mediaFileName = `nodejs_media_file${randomUUID()}`;

    const getHash = (data: BinaryLike) => {
        return createHash('md5').update(data).digest('hex');
    };
    const mediaFileMD5 = getHash(mediaFileData);

    describe('uploadMedia', () => {
        test('should upload binary media', async () => {
            const { status } = await mediaApi.uploadMedia(globalThis.BW_ACCOUNT_ID, binaryMediaName, binaryMediaData);

            expect(status).toEqual(204);
        });

        test('should upload media file', async () => {
            const { status } = await mediaApi.uploadMedia(globalThis.BW_ACCOUNT_ID, mediaFileName, mediaFileData);

            expect(status).toEqual(204);
        });
    });

    describe('listMedia', () => {
        test('should list media', async () => {
            const { status, data } = await mediaApi.listMedia(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].content).toBeDefined();
            expect(data[0].contentLength).toBeGreaterThan(0);
        });
    });

    describe('getMedia', () => {
        test('should get binary media', async () => {
            const { status, data } = await mediaApi.getMedia(globalThis.BW_ACCOUNT_ID, binaryMediaName);

            expect(status).toEqual(200);
            expect(data.toString()).toEqual(binaryMediaData);
        });

        test('should get media file', async () => {
            const { status, data } = await mediaApi.getMedia(globalThis.BW_ACCOUNT_ID, mediaFileName);
            // fs.writeFile('./tests/fixtures/test.jpeg', Buffer.from(data), (err) => {
            //     if (err) throw err;
            // });
            const dataHash = getHash(Buffer.from(data));

            expect(status).toEqual(200);
            expect(dataHash).toEqual(mediaFileMD5);
        });
    });

    describe('deleteMedia', () => {
        test('should delete binary media', async () => {
            const { status } = await mediaApi.deleteMedia(globalThis.BW_ACCOUNT_ID, binaryMediaName);

            expect(status).toEqual(204);
        });

        test('should delete media file', async () => {
            const { status } = await mediaApi.deleteMedia(globalThis.BW_ACCOUNT_ID, mediaFileName);

            expect(status).toEqual(204);
        });
    });

    describe('HTTP Errors', () => {
        test('404', async () => {
            try{
                await mediaApi.getMedia(globalThis.BW_ACCOUNT_ID, 'does-not-exist');
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
        });
    });
});

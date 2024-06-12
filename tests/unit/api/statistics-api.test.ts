//@ts-nocheck
import { StatisticsApi } from '../../../api';
import { Configuration } from '../../../configuration';

describe('StatisticsApi', () => {
    const config = new Configuration({
        username: globalThis.BW_USERNAME,
        password: globalThis.BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const statisticsApi = new StatisticsApi(config);

    describe('getStatistics', () => {
        test('should get statistics', async () => {
            const { status, data } = await statisticsApi.getStatistics(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.currentCallQueueSize).toBeInteger();
            expect(data.maxCallQueueSize).toBeInteger();
        });
    });

    describe('HTTP Errors', () => {
        test('401', async () => {
            const unauthorizedConfig = new Configuration({ basePath: 'http://127.0.0.1:4010' });
            const unauthorizedStatisticsApi = new StatisticsApi(unauthorizedConfig);

            try {
                await unauthorizedStatisticsApi.getStatistics(globalThis.BW_ACCOUNT_ID);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });
    });
});

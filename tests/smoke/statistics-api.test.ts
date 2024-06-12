//@ts-nocheck
import { StatisticsApi } from '../../api';
import { Configuration } from '../../configuration';

describe('StatisticsApi', () => {
    const config = new Configuration({username: globalThis.BW_USERNAME, password: globalThis.BW_PASSWORD});
    const statisticsApi = new StatisticsApi(config);

    describe('getStatistics', () => {
        test('should get statistics', async () => {
            const { status, data } = await statisticsApi.getStatistics(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.currentCallQueueSize).toBeNumber();
            expect(data.maxCallQueueSize).toEqual(7500);
        });
    });

    describe('HTTP Errors', () => {
        test('401', async () => {
            const configBad = new Configuration({username: globalThis.UNAUTHORIZED_USERNAME, password: globalThis.UNAUTHORIZED_PASSWORD});
            const statisticsApiBad = new StatisticsApi(configBad);

            try {
                await statisticsApiBad.getStatistics(globalThis.BW_ACCOUNT_ID);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });

        test('403', async () => {
            const configBad = new Configuration({username: globalThis.FORBIDDEN_USERNAME, password: globalThis.FORBIDDEN_PASSWORD});
            const statisticsApiBad = new StatisticsApi(configBad);

            try {
                await statisticsApiBad.getStatistics(globalThis.BW_ACCOUNT_ID);
            } catch (e) {
                expect(e.response.status).toEqual(403);
            }
        });
    });
});

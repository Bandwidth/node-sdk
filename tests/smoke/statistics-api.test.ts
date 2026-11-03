//@ts-nocheck
import { StatisticsApi } from '../../api';
import { Configuration } from '../../configuration';

describe('StatisticsApi', () => {
    const config = new Configuration({
        clientId: BW_CLIENT_ID,
        clientSecret: BW_CLIENT_SECRET
    });
    const statisticsApi = new StatisticsApi(config);

    describe('getStatistics', () => {
        test('should get statistics', async () => {
            const { status, data } = await statisticsApi.getStatistics(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.currentCallQueueSize).toBeNumber();
            expect(data.maxCallQueueSize).toEqual(7500);
        });
    });
});

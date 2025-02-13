//@ts-nocheck
import { TollFreeVerificationApi } from '../../api';
import { Configuration } from '../../configuration';

describe('TollFreeVerificationApi', () => {
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const tfvApi = new TollFreeVerificationApi(config);

    describe('listTollFreeUseCases', () => {
        test('list toll free use cases', async () => {
            const { status, data } = await tfvApi.listTollFreeUseCases(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
        });
    });

});

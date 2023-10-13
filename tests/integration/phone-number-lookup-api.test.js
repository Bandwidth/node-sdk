const { PhoneNumberLookupApi } = require('../../api/phone-number-lookup-api');
const { Configuration } = require('../../configuration');
const { sleep } = require('../callUtils');

describe('PhoneNumberLookupApi', () => {
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const phoneNumberLookupApi = new PhoneNumberLookupApi(config);

    let lookupRequestId;

    describe('createLookup', () => {
        test('should lookup phone number', async () => {
            const lookupRequest = {
                tns: [BW_NUMBER]
            };

            const { status, data } = await phoneNumberLookupApi.createLookup(BW_ACCOUNT_ID, lookupRequest);

            expect(status).toEqual(202);
            expect(data.requestId).toHaveLength(36);
            expect(data.status).toBeDefined();

            lookupRequestId = data.requestId;
            await sleep(1);
        });
    });

    describe('getLookupStatus', () => {
        test('should get lookup status', async () => {
            const { status, data } = await phoneNumberLookupApi.getLookupStatus(BW_ACCOUNT_ID, lookupRequestId);

            expect(status).toEqual(200);
            expect(data.requestId).toEqual(lookupRequestId);
            expect(data.status).toBeDefined();
            expect(data.result).toBeInstanceOf(Array);
            expect(data.result[0]['Response Code']).toBeDefined();
            expect(data.result[0]['E.164 Format']).toEqual(BW_NUMBER);
        });
    });
});

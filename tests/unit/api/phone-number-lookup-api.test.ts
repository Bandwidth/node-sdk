//@ts-nocheck
import { PhoneNumberLookupApi } from "../../../api";
import { Configuration } from "../../../configuration";
import { LookupRequest, LookupStatusEnum } from "../../../models";

describe('PhoneNumberLookupApi', () => {
    const config = new Configuration({
        username: globalThis.BW_USERNAME,
        password: globalThis.BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const phoneNumberLookupApi = new PhoneNumberLookupApi(config);

    const lookupRequestId = '1234';

    describe('createLookup', () => {
        test('should lookup phone number', async () => {
            const lookupRequest: LookupRequest = {
                tns: [globalThis.BW_NUMBER]
            };

            const { status, data } = await phoneNumberLookupApi.createLookup(globalThis.BW_ACCOUNT_ID, lookupRequest);

            expect(status).toEqual(202);
            expect(data.requestId).toHaveLength(36);
            expect(data.status).toBeOneOf([
                LookupStatusEnum.Complete,
                LookupStatusEnum.InProgress,
                LookupStatusEnum.Failed,
                LookupStatusEnum.PartialComplete
            ]);
        });
    });

    describe('getLookupStatus', () => {
        test('should get lookup status', async () => {
            const { status, data } = await phoneNumberLookupApi.getLookupStatus(
                globalThis.BW_ACCOUNT_ID,
                lookupRequestId,
                { headers: { Prefer: 'example=lookupMultipleNumbersPartialCompleteExample' } }
            );

            expect(status).toEqual(200);
            expect(data.requestId).toHaveLength(36);
            expect(data.status).toBeOneOf([
                LookupStatusEnum.Complete,
                LookupStatusEnum.InProgress,
                LookupStatusEnum.Failed,
                LookupStatusEnum.PartialComplete
            ]);
            expect(data.result).toBeInstanceOf(Array);
            expect(data.result![0]).toContainAllKeys([
                'Response Code',
                'Message',
                'E.164 Format',
                'Formatted',
                'Country',
                'Line Type',
                'Line Provider',
                'Mobile Country Code',
                'Mobile Network Code',
            ]);
            expect(data.result![0]['Response Code']).toBeInteger();
            expect(data.result![0].Message).toBeString();
            expect(data.result![0]['E.164 Format']).toHaveLength(12);
            expect(data.result![0].Formatted).toHaveLength(14);
            expect(data.result![0].Country).toBeString();
            expect(data.result![0]['Line Type']).toBeString();
            expect(data.result![0]['Line Provider']).toBeString();
            expect(data.result![0]['Mobile Country Code']).toBeString();
            expect(data.result![0]['Mobile Network Code']).toBeString();
            expect(data.failedTelephoneNumbers).toBeInstanceOf(Array);
            expect(data.failedTelephoneNumbers![0]).toBeString();
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            try {
                await phoneNumberLookupApi.createLookup(globalThis.BW_ACCOUNT_ID, {});
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            const unauthorizedConfig = new Configuration({ basePath: 'http://127.0.0.1:4010' });
            const unauthorizedPhoneNumberLookupApi = new PhoneNumberLookupApi(unauthorizedConfig);
            try {
                await unauthorizedPhoneNumberLookupApi.getLookupStatus(globalThis.BW_ACCOUNT_ID, lookupRequestId);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });
    });
});

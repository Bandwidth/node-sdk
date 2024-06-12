//@ts-nocheck
import { PhoneNumberLookupApi } from "../../api";
import { Configuration } from "../../configuration";
import { LookupRequest, LookupStatusEnum } from "../../models";
import { sleep } from "../callUtils";

describe('PhoneNumberLookupApi', () => {
    jest.setTimeout(10000);
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const phoneNumberLookupApi = new PhoneNumberLookupApi(config);

    let lookupRequestId: string;

    describe('createLookup', () => {
        test('should lookup phone number', async () => {
            const lookupRequest: LookupRequest = {
                tns: [BW_NUMBER]
            };

            const { status, data } = await phoneNumberLookupApi.createLookup(BW_ACCOUNT_ID, lookupRequest);

            expect(status).toEqual(202);
            expect(data.requestId).toHaveLength(36);
            expect(data.status).toBeOneOf([
                LookupStatusEnum.Complete,
                LookupStatusEnum.InProgress,
                LookupStatusEnum.Failed,
                LookupStatusEnum.PartialComplete
            ]);

            lookupRequestId = data.requestId!;
            await sleep(1);
        });
    });

    describe('getLookupStatus', () => {
        test('should get lookup status', async () => {
            const { status, data } = await phoneNumberLookupApi.getLookupStatus(BW_ACCOUNT_ID, lookupRequestId);

            expect(status).toEqual(200);
            expect(data.requestId).toEqual(lookupRequestId);
            expect(data.status).toBeOneOf([
                LookupStatusEnum.Complete,
                LookupStatusEnum.InProgress,
                LookupStatusEnum.Failed,
                LookupStatusEnum.PartialComplete
            ]);
            expect(data.result).toBeInstanceOf(Array);
            expect(data.result![0]['Response Code']).toBeInteger();
            expect(data.result![0]['E.164 Format']).toEqual(BW_NUMBER);
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            const lookupRequest: LookupRequest = {
                tns: ['+1invalid']
            };

            try {
                await phoneNumberLookupApi.createLookup(BW_ACCOUNT_ID, lookupRequest);
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            const configBad = new Configuration({username: UNAUTHORIZED_USERNAME, password: UNAUTHORIZED_PASSWORD});
            const phoneNumberLookupApiBad = new PhoneNumberLookupApi(configBad);

            const lookupRequest: LookupRequest = {
                tns: [BW_NUMBER]
            };

            try {
                await phoneNumberLookupApiBad.createLookup(BW_ACCOUNT_ID, lookupRequest);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });

        test('404', async () => {
            const requestIdBad = '00000000-0000-0000-0000-000000000000';

            try {
                await phoneNumberLookupApi.getLookupStatus(BW_ACCOUNT_ID, requestIdBad);
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
        });
    });
});

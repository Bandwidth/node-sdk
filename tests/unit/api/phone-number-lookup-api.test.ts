//@ts-nocheck
import { PhoneNumberLookupApi } from "../../../api";
import { Configuration } from "../../../configuration";
import {
    AsyncLookupRequest,
    CompletedLookupStatusEnum,
    InProgressLookupStatusEnum,
    LatestMessageDeliveryStatusEnum,
    LineTypeEnum,
    SyncLookupRequest
} from "../../../models";

describe('PhoneNumberLookupApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const phoneNumberLookupApi = new PhoneNumberLookupApi(config);

    const phoneNumbers = [BW_NUMBER, USER_NUMBER];
    const requestId = '123e4567-e89b-12d3-a456-426614174000';

    describe('createAsyncBulkLookup', () => {
        test('should create an async bulk lookup request', async () => {
            const request: AsyncLookupRequest = { phoneNumbers };

            const { status, data } = await phoneNumberLookupApi.createAsyncBulkLookup(BW_ACCOUNT_ID, request);

            expect(status).toEqual(202);
            expect(data.links[0]).toBeDefined();
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();
            expect(data.links[0].method).toBeString();
            expect(data.data.requestId).toBeString();
            expect(data.data.status).toBeOneOf(Object.values(InProgressLookupStatusEnum));
            expect(data.errors).toBeInstanceOf(Array);
        });
    });

    describe('createSyncLookup', () => {
        test('should create a sync lookup', async () => {
            const request: SyncLookupRequest = { phoneNumbers };

            const { status, data } = await phoneNumberLookupApi.createSyncLookup(BW_ACCOUNT_ID, request);

            expect(status).toEqual(200);
            expect(data.links[0]).toBeDefined();
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();
            expect(data.links[0].method).toBeString();
            expect(data.data.requestId).toBeString();
            expect(data.data.status).toBeOneOf(Object.values(CompletedLookupStatusEnum));
            expect(data.data.results).toBeInstanceOf(Array);
            expect(data.data.results[0]).toBeDefined();
            expect(data.data.results[0].phoneNumber).toBeString();
            expect(data.data.results[0].lineType).toBeOneOf(Object.values(LineTypeEnum));
            expect(data.data.results[0].messagingProvider).toBeString();
            expect(data.data.results[0].voiceProvider).toBeString();
            expect(data.data.results[0].countryCodeA3).toBeString();
            expect(data.data.results[0].latestMessageDeliveryStatus).toBeOneOf(Object.values(LatestMessageDeliveryStatusEnum));
            expect(data.data.results[0].initialMessageDeliveryStatusDate).toBeDateString();
            expect(data.data.results[0].latestMessageDeliveryStatusDate).toBeDateString();
            expect(data.errors).toBeInstanceOf(Array);
        });
    });

    describe('getAsyncBulkLookup', () => {
        test('should get an async bulk lookup', async () => {
            const { status, data } = await phoneNumberLookupApi.getAsyncBulkLookup(BW_ACCOUNT_ID, requestId);

            expect(status).toEqual(200);
            expect(data.links[0]).toBeDefined();
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();
            expect(data.links[0].method).toBeString();
            expect(data.data.requestId).toBeString();
            expect(data.data.status).toBeOneOf(Object.values(InProgressLookupStatusEnum));
            expect(data.data.results).toBeInstanceOf(Array);
            expect(data.data.results[0]).toBeDefined();
            expect(data.data.results[0].phoneNumber).toBeString();
            expect(data.data.results[0].lineType).toBeOneOf(Object.values(LineTypeEnum));
            expect(data.data.results[0].messagingProvider).toBeString();
            expect(data.data.results[0].voiceProvider).toBeString();
            expect(data.data.results[0].countryCodeA3).toBeString();
            expect(data.data.results[0].latestMessageDeliveryStatus).toBeOneOf(Object.values(LatestMessageDeliveryStatusEnum));
            expect(data.data.results[0].initialMessageDeliveryStatusDate).toBeDateString();
            expect(data.data.results[0].latestMessageDeliveryStatusDate).toBeDateString();
            expect(data.errors).toBeInstanceOf(Array);
        });
    });
});

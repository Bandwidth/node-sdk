//@ts-nocheck
import { PhoneNumberLookupApi } from "../../api";
import { Configuration } from "../../configuration";
import {
    AsyncLookupRequest,
    CompletedLookupStatusEnum,
    InProgressLookupStatusEnum,
    LatestMessageDeliveryStatusEnum,
    LineTypeEnum,
    SyncLookupRequest
} from "../../models";
import { sleep } from '../callUtils';

describe('PhoneNumberLookupApi', () => {
    jest.setTimeout(40000);
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD
    });
    const phoneNumberLookupApi = new PhoneNumberLookupApi(config);

    const phoneNumbers = [BW_NUMBER, USER_NUMBER];

    describe('createGetAsyncBulkLookup', () => {
        test('should create and get an async bulk lookup request', async () => {
            const request: AsyncLookupRequest = { phoneNumbers };

            const { status: createStatus, data: createData }
                = await phoneNumberLookupApi.createAsyncBulkLookup(BW_ACCOUNT_ID, request);

            expect(createStatus).toEqual(202);
            expect(createData.links[0]).toBeDefined();
            expect(createData.links[0].rel).toBeString();
            expect(createData.links[0].href).toBeString();
            expect(createData.links[0].method).toBeString();
            expect(createData.data.requestId).toBeString();
            expect(createData.data.status).toBeOneOf(Object.values(InProgressLookupStatusEnum));
            expect(createData.errors).toBeInstanceOf(Array);

            const requestId = createData.data.requestId;
            await sleep(30);

            const { status: getStatus, data: getData }
                = await phoneNumberLookupApi.getAsyncBulkLookup(BW_ACCOUNT_ID, requestId);

            expect(getStatus).toEqual(200);
            expect(getData.links[0]).toBeDefined();
            expect(getData.links[0].rel).toBeString();
            expect(getData.links[0].href).toBeString();
            expect(getData.links[0].method).toBeString();
            expect(getData.data.requestId).toEqual(requestId);
            expect(getData.data.status).toBeOneOf(Object.values(InProgressLookupStatusEnum));
            expect(getData.data.results).toBeInstanceOf(Array);
            expect(getData.data.results[0]).toBeDefined();
            expect(getData.data.results[0].phoneNumber).toBeString();
            expect(getData.data.results[0].lineType).toBeOneOf(Object.values(LineTypeEnum));
            expect(getData.data.results[0].messagingProvider).toBeString();
            expect(getData.data.results[0].voiceProvider).toBeString();
            expect(getData.data.results[0].countryCodeA3).toBeString();
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
        });
    });
});

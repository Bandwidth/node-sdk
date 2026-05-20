import { GetAsyncBulkLookupResponse } from '../../../models/get-async-bulk-lookup-response';
import { GetAsyncBulkLookupResponseData } from '../../../models/get-async-bulk-lookup-response-data';

describe('GetAsyncBulkLookupResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: GetAsyncBulkLookupResponse = {
            links: [],
            data: {} as unknown as GetAsyncBulkLookupResponseData,
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.data).toBeDefined();
        expect(fixture.errors).toEqual([]);
    });
});

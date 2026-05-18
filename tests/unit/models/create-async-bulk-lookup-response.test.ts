import { CreateAsyncBulkLookupResponse } from '../../../models/create-async-bulk-lookup-response';
import { CreateAsyncBulkLookupResponseData } from '../../../models/create-async-bulk-lookup-response-data';

describe('CreateAsyncBulkLookupResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateAsyncBulkLookupResponse = {
            links: [],
            data: {} as unknown as CreateAsyncBulkLookupResponseData,
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.data).toBeDefined();
        expect(fixture.errors).toEqual([]);
    });
});

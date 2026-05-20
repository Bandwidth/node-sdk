import { CreateSyncLookupResponse } from '../../../models/create-sync-lookup-response';
import { CreateSyncLookupResponseData } from '../../../models/create-sync-lookup-response-data';

describe('CreateSyncLookupResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateSyncLookupResponse = {
            links: [],
            data: {} as unknown as CreateSyncLookupResponseData,
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.data).toBeDefined();
        expect(fixture.errors).toEqual([]);
    });
});

import { GetAsyncBulkLookupResponseData } from '../../../models/get-async-bulk-lookup-response-data';
import { InProgressLookupStatusEnum } from '../../../models/in-progress-lookup-status-enum';

describe('GetAsyncBulkLookupResponseData', () => {
    test('should accept the expected shape', () => {
        const fixture: GetAsyncBulkLookupResponseData = {
            requestId: 'test-requestId',
            status: InProgressLookupStatusEnum.InProgress,
            results: [],
        };

        expect(fixture.requestId).toBe('test-requestId');
        expect(fixture.status).toBe(InProgressLookupStatusEnum.InProgress);
        expect(fixture.results).toEqual([]);
    });
});

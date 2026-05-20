import { CreateAsyncBulkLookupResponseData } from '../../../models/create-async-bulk-lookup-response-data';
import { InProgressLookupStatusEnum } from '../../../models/in-progress-lookup-status-enum';

describe('CreateAsyncBulkLookupResponseData', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateAsyncBulkLookupResponseData = {
            requestId: 'test-requestId',
            status: InProgressLookupStatusEnum.InProgress,
        };

        expect(fixture.requestId).toBe('test-requestId');
        expect(fixture.status).toBe(InProgressLookupStatusEnum.InProgress);
    });
});

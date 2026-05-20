import { CreateSyncLookupResponseData } from '../../../models/create-sync-lookup-response-data';
import { CompletedLookupStatusEnum } from '../../../models/completed-lookup-status-enum';

describe('CreateSyncLookupResponseData', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateSyncLookupResponseData = {
            requestId: 'test-requestId',
            status: CompletedLookupStatusEnum.Complete,
            results: [],
        };

        expect(fixture.requestId).toBe('test-requestId');
        expect(fixture.status).toBe(CompletedLookupStatusEnum.Complete);
        expect(fixture.results).toEqual([]);
    });
});

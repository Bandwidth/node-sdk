import { CompletedLookupStatusEnum } from '../../../models/completed-lookup-status-enum';

describe('CompletedLookupStatusEnum', () => {
    test('should define the expected values', () => {
        expect(CompletedLookupStatusEnum.Complete).toBe('COMPLETE');
        expect(CompletedLookupStatusEnum.PartialComplete).toBe('PARTIAL_COMPLETE');
        expect(CompletedLookupStatusEnum.Failed).toBe('FAILED');
    });
});

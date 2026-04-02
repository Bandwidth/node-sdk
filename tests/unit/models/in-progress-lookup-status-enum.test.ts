import { InProgressLookupStatusEnum } from '../../../models/in-progress-lookup-status-enum';

describe('InProgressLookupStatusEnum', () => {
    test('should define the expected values', () => {
        expect(InProgressLookupStatusEnum.InProgress).toBe('IN_PROGRESS');
        expect(InProgressLookupStatusEnum.Complete).toBe('COMPLETE');
        expect(InProgressLookupStatusEnum.PartialComplete).toBe('PARTIAL_COMPLETE');
        expect(InProgressLookupStatusEnum.Failed).toBe('FAILED');
    });
});


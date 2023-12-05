const { LookupStatusEnum } = require('../../models/lookup-status-enum');

describe('LookupStatusEnum', () => {
    test('should define the expected values', () => {
        expect(LookupStatusEnum.InProgress).toBe('IN_PROGRESS');
        expect(LookupStatusEnum.Complete).toBe('COMPLETE');
        expect(LookupStatusEnum.PartialComplete).toBe('PARTIAL_COMPLETE');
        expect(LookupStatusEnum.Failed).toBe('FAILED');
    });
});

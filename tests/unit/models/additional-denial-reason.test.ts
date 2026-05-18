import { AdditionalDenialReason } from '../../../models/additional-denial-reason';

describe('AdditionalDenialReason', () => {
    test('should accept the expected shape', () => {
        const fixture: AdditionalDenialReason = {
            statusCode: 1.5,
            reason: 'test-reason',
            resubmitAllowed: true,
        };

        expect(fixture.statusCode).toBe(1.5);
        expect(fixture.reason).toBe('test-reason');
        expect(fixture.resubmitAllowed).toBe(true);
    });
});

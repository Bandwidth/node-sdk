import { AccountStatistics } from '../../../models/account-statistics';

describe('AccountStatistics', () => {
    test('should accept the expected shape', () => {
        const fixture: AccountStatistics = {
            currentCallQueueSize: 1.5,
            maxCallQueueSize: 1.5,
        };

        expect(fixture.currentCallQueueSize).toBe(1.5);
        expect(fixture.maxCallQueueSize).toBe(1.5);
    });
});

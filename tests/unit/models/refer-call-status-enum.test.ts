import { ReferCallStatusEnum } from '../../../models/refer-call-status-enum';

describe('ReferCallStatusEnum', () => {
    test('should define the expected values', () => {
        expect(ReferCallStatusEnum.Success).toBe('success');
        expect(ReferCallStatusEnum.Failure).toBe('failure');
        expect(Object.values(ReferCallStatusEnum)).toEqual([
            'success',
            'failure'
        ]);
    });
});

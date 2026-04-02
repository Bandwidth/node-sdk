import { DeactivationEventEnum } from '../../../models/deactivation-event-enum';

describe('DeactivationEventEnum', () => {
    test('should define the expected values', () => {
        expect(DeactivationEventEnum.Deactivated).toBe('DEACTIVATED');
    });
});

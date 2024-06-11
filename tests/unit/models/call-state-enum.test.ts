import { CallStateEnum } from '../../../models/call-state-enum';

describe('CallStateEnum', () => {
    test('should define the expected values', () => {
        expect(CallStateEnum.Active).toBe('active');
        expect(CallStateEnum.Completed).toBe('completed');
    });
});

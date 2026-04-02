import { TfvCallbackStatusEnum } from '../../../models/tfv-callback-status-enum';

describe('TfvCallbackStatusEnum', () => {
    test('should define the expected values', () => {
        expect(TfvCallbackStatusEnum.Verified).toBe('VERIFIED');
        expect(TfvCallbackStatusEnum.Unverified).toBe('UNVERIFIED');
    });
});

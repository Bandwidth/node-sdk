import { TfvStatusEnum } from '../../../models/tfv-status-enum';

describe('TfvStatusEnum', () => {
    test('should define the expected values', () => {
        expect(TfvStatusEnum.Verified).toBe('VERIFIED');
        expect(TfvStatusEnum.Unverified).toBe('UNVERIFIED');
        expect(TfvStatusEnum.Pending).toBe('PENDING');
        expect(TfvStatusEnum.PartiallyVerified).toBe('PARTIALLY_VERIFIED');
        expect(TfvStatusEnum.InvalidStatus).toBe('INVALID_STATUS');
    });
});

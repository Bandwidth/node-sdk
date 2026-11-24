import { AttestationLevelEnum } from '../../../models/attestation-level-enum';

describe('AttestationLevelEnum', () => {
    test('should define the expected values', () => {
        expect(AttestationLevelEnum.A).toBe('A');
        expect(AttestationLevelEnum.B).toBe('B');
        expect(AttestationLevelEnum.C).toBe('C');
        expect(Object.values(AttestationLevelEnum)).toEqual([
            'A',
            'B',
            'C'
        ]);
    });
});

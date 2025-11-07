import { LineTypeEnum } from '../../../models/line-type-enum';

describe('LineTypeEnum', () => {
    test('should define the expected values', () => {
        expect(LineTypeEnum.Fixed).toBe('FIXED');
        expect(LineTypeEnum.VoipFixed).toBe('VOIP-FIXED');
        expect(LineTypeEnum.Mobile).toBe('MOBILE');
        expect(LineTypeEnum.Voip).toBe('VOIP');
    });
});


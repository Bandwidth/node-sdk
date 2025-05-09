import { CardWidthEnum } from '../../../models/card-width-enum';

describe('CardWidthEnum', () => {
    test('should define the expected values', () => {
        expect(CardWidthEnum.Small).toBe('SMALL');
        expect(CardWidthEnum.Medium).toBe('MEDIUM');
    });
});

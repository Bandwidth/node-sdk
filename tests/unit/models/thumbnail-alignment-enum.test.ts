import { ThumbnailAlignmentEnum } from '../../../models/thumbnail-alignment-enum';
describe('ThumbnailAlignmentEnum', () => {
    test('should define the expected values', () => {
        expect(ThumbnailAlignmentEnum.Left).toBe('LEFT');
        expect(ThumbnailAlignmentEnum.Right).toBe('RIGHT');
    });
});

import { RbmStandaloneCard } from '../../../models/rbm-standalone-card';
import { StandaloneCardOrientationEnum } from '../../../models/standalone-card-orientation-enum';
import { ThumbnailAlignmentEnum } from '../../../models/thumbnail-alignment-enum';
import { RbmCardContent } from '../../../models/rbm-card-content';

describe('RbmStandaloneCard', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmStandaloneCard = {
            orientation: StandaloneCardOrientationEnum.Horizontal,
            thumbnailImageAlignment: ThumbnailAlignmentEnum.Left,
            cardContent: {} as unknown as RbmCardContent,
            suggestions: [],
        };

        expect(fixture.orientation).toBe(StandaloneCardOrientationEnum.Horizontal);
        expect(fixture.thumbnailImageAlignment).toBe(ThumbnailAlignmentEnum.Left);
        expect(fixture.cardContent).toBeDefined();
        expect(fixture.suggestions).toEqual([]);
    });
});

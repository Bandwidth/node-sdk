import { RbmMessageCarouselCard } from '../../../models/rbm-message-carousel-card';
import { CardWidthEnum } from '../../../models/card-width-enum';

describe('RbmMessageCarouselCard', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmMessageCarouselCard = {
            cardWidth: CardWidthEnum.Small,
            cardContents: [],
            suggestions: [],
        };

        expect(fixture.cardWidth).toBe(CardWidthEnum.Small);
        expect(fixture.cardContents).toEqual([]);
        expect(fixture.suggestions).toEqual([]);
    });
});

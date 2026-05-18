import { RbmCardContent } from '../../../models/rbm-card-content';
import { RbmCardContentMedia } from '../../../models/rbm-card-content-media';

describe('RbmCardContent', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmCardContent = {
            title: 'test-title',
            description: 'test-description',
            media: {} as unknown as RbmCardContentMedia,
            suggestions: [],
        };

        expect(fixture.title).toBe('test-title');
        expect(fixture.description).toBe('test-description');
        expect(fixture.media).toBeDefined();
        expect(fixture.suggestions).toEqual([]);
    });
});

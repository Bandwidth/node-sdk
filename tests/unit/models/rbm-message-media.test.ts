import { RbmMessageMedia } from '../../../models/rbm-message-media';

describe('RbmMessageMedia', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmMessageMedia = {
            media: [],
            suggestions: [],
        };

        expect(fixture.media).toEqual([]);
        expect(fixture.suggestions).toEqual([]);
    });
});

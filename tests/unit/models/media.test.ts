import { Media } from '../../../models/media';

describe('Media', () => {
    test('should accept the expected shape', () => {
        const fixture: Media = {
            content: 'test-content',
            contentLength: 1.5,
            mediaName: 'test-mediaName',
        };

        expect(fixture.content).toBe('test-content');
        expect(fixture.contentLength).toBe(1.5);
        expect(fixture.mediaName).toBe('test-mediaName');
    });
});

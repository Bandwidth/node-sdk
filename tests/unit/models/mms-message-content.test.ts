import { MmsMessageContent } from '../../../models/mms-message-content';

describe('MmsMessageContent', () => {
    test('should accept the expected shape', () => {
        const fixture: MmsMessageContent = {
            text: 'test-text',
            media: [],
        };

        expect(fixture.text).toBe('test-text');
        expect(fixture.media).toEqual([]);
    });
});

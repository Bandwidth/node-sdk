import { MultiChannelMessageContent } from '../../../models/multi-channel-message-content';
import { RbmMessageContentFile } from '../../../models/rbm-message-content-file';

describe('MultiChannelMessageContent', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelMessageContent = {
            text: 'test-text',
            media: {} as unknown as RbmMessageContentFile,
        };

        expect(fixture.text).toBe('test-text');
        expect(fixture.media).toBeDefined();
    });
});

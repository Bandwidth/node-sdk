import { MessagingCodeResponse } from '../../../models/messaging-code-response';

describe('MessagingCodeResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: MessagingCodeResponse = {
            messageId: 'test-messageId',
        };

        expect(fixture.messageId).toBe('test-messageId');
    });
});

import { SmsMessageContent } from '../../../models/sms-message-content';

describe('SmsMessageContent', () => {
    test('should accept the expected shape', () => {
        const fixture: SmsMessageContent = {
            text: 'test-text',
        };

        expect(fixture.text).toBe('test-text');
    });
});

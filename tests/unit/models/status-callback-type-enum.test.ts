import { StatusCallbackTypeEnum } from '../../../models/status-callback-type-enum';

describe('StatusCallbackTypeEnum', () => {
    test('should define the expected values', () => {
        expect(StatusCallbackTypeEnum.MessageSending).toBe('message-sending');
        expect(StatusCallbackTypeEnum.MessageDelivered).toBe('message-delivered');
        expect(StatusCallbackTypeEnum.MessageFailed).toBe('message-failed');
        expect(StatusCallbackTypeEnum.MessageRead).toBe('message-read');
        expect(Object.values(StatusCallbackTypeEnum)).toEqual(['message-sending', 'message-delivered', 'message-failed', 'message-read']);
    });
});

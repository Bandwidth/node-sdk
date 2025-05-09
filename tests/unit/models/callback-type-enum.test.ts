import { CallbackTypeEnum } from '../../../models/callback-type-enum';

describe('CallbackTypeEnum', () => {
    test('should define the expected values', () => {
        expect(CallbackTypeEnum.MessageReceived).toBe('message-received');
        expect(CallbackTypeEnum.MessageDelivered).toBe('message-delivered');
        expect(CallbackTypeEnum.MessageFailed).toBe('message-failed');
        expect(CallbackTypeEnum.MessageSending).toBe('message-sending');
    });
});

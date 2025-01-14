import { CallbackTypeEnum } from '../../../models/callback-type-enum';

describe('CallbackTypeEnum', () => {
    test('should define the expected values', () => {
        expect(CallbackTypeEnum.Received).toBe('message-received');
        expect(CallbackTypeEnum.Delivered).toBe('message-delivered');
        expect(CallbackTypeEnum.Failed).toBe('message-failed');
        expect(CallbackTypeEnum.Sending).toBe('message-sending');
    });
});

import { MessageTypeEnum } from '../../../models/message-type-enum';

describe('MessageTypeEnum', () => {
    test('should define the expected values', () => {
        expect(MessageTypeEnum.Sms).toBe('sms');
        expect(MessageTypeEnum.Mms).toBe('mms');
        expect(MessageTypeEnum.Rcs).toBe('rcs');
    });
});

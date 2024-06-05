import { MessageStatusEnum } from '../../models/message-status-enum';

describe('MessageStatusEnum', () => {
    test('should define the expected values', () => {
        expect(MessageStatusEnum.Received).toBe('RECEIVED');
        expect(MessageStatusEnum.Queued).toBe('QUEUED');
        expect(MessageStatusEnum.Sending).toBe('SENDING');
        expect(MessageStatusEnum.Sent).toBe('SENT');
        expect(MessageStatusEnum.Failed).toBe('FAILED');
        expect(MessageStatusEnum.Delivered).toBe('DELIVERED');
        expect(MessageStatusEnum.Accepted).toBe('ACCEPTED');
        expect(MessageStatusEnum.Undelivered).toBe('UNDELIVERED');
    });
});

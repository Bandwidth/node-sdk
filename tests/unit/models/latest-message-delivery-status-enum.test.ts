import { LatestMessageDeliveryStatusEnum } from '../../../models/latest-message-delivery-status-enum';

describe('LatestMessageDeliveryStatusEnum', () => {
    test('should define the expected values', () => {
        expect(LatestMessageDeliveryStatusEnum.Active).toBe('ACTIVE');
        expect(LatestMessageDeliveryStatusEnum.Deactivated).toBe('DEACTIVATED');
        expect(LatestMessageDeliveryStatusEnum.Unknown).toBe('UNKNOWN');
    });
});


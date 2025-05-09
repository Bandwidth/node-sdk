import { MultiChannelStatusEnum } from '../../../models/multi-channel-status-enum';

describe('MultiChannelStatusEnum', () => {
    test('should define the expected values', () => {
        expect(MultiChannelStatusEnum.Queued).toBe('QUEUED');
        expect(MultiChannelStatusEnum.Sending).toBe('SENDING');
        expect(MultiChannelStatusEnum.Delivered).toBe('DELIVERED');
        expect(MultiChannelStatusEnum.Failed).toBe('FAILED');
    });
});

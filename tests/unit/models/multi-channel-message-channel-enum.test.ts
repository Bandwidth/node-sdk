import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';

describe('MultiChannelMessageChannelEnum', () => {
    test('should define the expected values', () => {
        expect(MultiChannelMessageChannelEnum.Rbm).toBe('RBM');
        expect(MultiChannelMessageChannelEnum.Sms).toBe('SMS');
        expect(MultiChannelMessageChannelEnum.Mms).toBe('MMS');
    });
});

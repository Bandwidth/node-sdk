import { MultiChannelMessageDirectionEnum } from '../../../models/multi-channel-message-direction-enum';

describe('MultiChannelMessageDirectionEnum', () => {
    test('should define the expected values', () => {
        expect(MultiChannelMessageDirectionEnum.Inbound).toBe('INBOUND');
        expect(MultiChannelMessageDirectionEnum.Outbound).toBe('OUTBOUND');
    });
});

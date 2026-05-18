import { MultiChannelChannelListSMSObject } from '../../../models/multi-channel-channel-list-smsobject';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { SmsMessageContent } from '../../../models/sms-message-content';

describe('MultiChannelChannelListSMSObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListSMSObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as SmsMessageContent,
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
    });
});

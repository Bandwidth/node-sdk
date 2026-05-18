import { MultiChannelChannelListSMSResponseObject } from '../../../models/multi-channel-channel-list-smsresponse-object';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { SmsMessageContent } from '../../../models/sms-message-content';

describe('MultiChannelChannelListSMSResponseObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListSMSResponseObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as SmsMessageContent,
            owner: 'test-owner',
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
        expect(fixture.owner).toBe('test-owner');
    });
});

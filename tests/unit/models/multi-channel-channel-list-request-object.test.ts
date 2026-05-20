import { MultiChannelChannelListRequestObject } from '../../../models/multi-channel-channel-list-request-object';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MmsMessageContent } from '../../../models/mms-message-content';

describe('MultiChannelChannelListRequestObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListRequestObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as MmsMessageContent,
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
    });
});

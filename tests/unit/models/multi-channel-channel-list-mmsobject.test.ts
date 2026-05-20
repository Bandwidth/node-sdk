import { MultiChannelChannelListMMSObject } from '../../../models/multi-channel-channel-list-mmsobject';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MmsMessageContent } from '../../../models/mms-message-content';

describe('MultiChannelChannelListMMSObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListMMSObject = {
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

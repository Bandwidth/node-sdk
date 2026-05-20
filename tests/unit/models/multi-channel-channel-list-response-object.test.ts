import { MultiChannelChannelListResponseObject } from '../../../models/multi-channel-channel-list-response-object';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MmsMessageContent } from '../../../models/mms-message-content';

describe('MultiChannelChannelListResponseObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListResponseObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as MmsMessageContent,
            owner: 'test-owner',
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
        expect(fixture.owner).toBe('test-owner');
    });
});

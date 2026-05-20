import { MultiChannelChannelListRBMObject } from '../../../models/multi-channel-channel-list-rbmobject';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MultiChannelChannelListRBMObjectAllOfContent } from '../../../models/multi-channel-channel-list-rbmobject-all-of-content';

describe('MultiChannelChannelListRBMObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListRBMObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as MultiChannelChannelListRBMObjectAllOfContent,
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
    });
});

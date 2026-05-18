import { MultiChannelChannelListRBMResponseObject } from '../../../models/multi-channel-channel-list-rbmresponse-object';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MultiChannelChannelListRBMObjectAllOfContent } from '../../../models/multi-channel-channel-list-rbmobject-all-of-content';

describe('MultiChannelChannelListRBMResponseObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListRBMResponseObject = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as MultiChannelChannelListRBMObjectAllOfContent,
            owner: 'test-owner',
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
        expect(fixture.owner).toBe('test-owner');
    });
});

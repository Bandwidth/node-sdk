import { MultiChannelChannelListObjectBase } from '../../../models/multi-channel-channel-list-object-base';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';

describe('MultiChannelChannelListObjectBase', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListObjectBase = {
            from: 'test-from',
            applicationId: 'test-applicationId',
            channel: MultiChannelMessageChannelEnum.Rbm,
        };

        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
    });
});

import { MultiChannelMessageRequest } from '../../../models/multi-channel-message-request';
import { PriorityEnum } from '../../../models/priority-enum';

describe('MultiChannelMessageRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelMessageRequest = {
            to: 'test-to',
            channelList: [],
            tag: 'test-tag',
            priority: PriorityEnum.Default,
            expiration: 'test-expiration',
        };

        expect(fixture.to).toBe('test-to');
        expect(fixture.channelList).toEqual([]);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.priority).toBe(PriorityEnum.Default);
        expect(fixture.expiration).toBe('test-expiration');
    });
});

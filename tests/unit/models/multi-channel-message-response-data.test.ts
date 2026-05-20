import { MultiChannelMessageResponseData } from '../../../models/multi-channel-message-response-data';
import { MessageDirectionEnum } from '../../../models/message-direction-enum';
import { PriorityEnum } from '../../../models/priority-enum';

describe('MultiChannelMessageResponseData', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelMessageResponseData = {
            id: 'test-id',
            time: 'test-time',
            direction: MessageDirectionEnum.In,
            // @ts-expect-error SWI-11047: typed as Set<T> but runtime is Array<T>
            to: [],
            channelList: [],
            tag: 'test-tag',
            priority: PriorityEnum.Default,
            expiration: 'test-expiration',
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.time).toBe('test-time');
        expect(fixture.direction).toBe(MessageDirectionEnum.In);
        expect(fixture.to).toEqual([]);
        expect(fixture.channelList).toEqual([]);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.priority).toBe(PriorityEnum.Default);
        expect(fixture.expiration).toBe('test-expiration');
    });
});

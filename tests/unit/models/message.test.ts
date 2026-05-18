import { Message } from '../../../models/message';
import { MessageDirectionEnum } from '../../../models/message-direction-enum';
import { PriorityEnum } from '../../../models/priority-enum';

describe('Message', () => {
    test('should accept the expected shape', () => {
        const fixture: Message = {
            id: 'test-id',
            owner: 'test-owner',
            applicationId: 'test-applicationId',
            time: 'test-time',
            segmentCount: 1.5,
            direction: MessageDirectionEnum.In,
            // @ts-expect-error SWI-11047: typed as Set<T> but runtime is Array<T>
            to: [],
            from: 'test-from',
            // @ts-expect-error SWI-11047: typed as Set<T> but runtime is Array<T>
            media: [],
            text: 'test-text',
            tag: 'test-tag',
            priority: PriorityEnum.Default,
            expiration: 'test-expiration',
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.owner).toBe('test-owner');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.time).toBe('test-time');
        expect(fixture.segmentCount).toBe(1.5);
        expect(fixture.direction).toBe(MessageDirectionEnum.In);
        expect(fixture.to).toEqual([]);
        expect(fixture.from).toBe('test-from');
        expect(fixture.media).toEqual([]);
        expect(fixture.text).toBe('test-text');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.priority).toBe(PriorityEnum.Default);
        expect(fixture.expiration).toBe('test-expiration');
    });
});

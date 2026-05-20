import { MessageRequest } from '../../../models/message-request';
import { PriorityEnum } from '../../../models/priority-enum';

describe('MessageRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: MessageRequest = {
            applicationId: 'test-applicationId',
            // @ts-expect-error SWI-11047: typed as Set<T> but runtime is Array<T>
            to: [],
            from: 'test-from',
            text: 'test-text',
            media: [],
            tag: 'test-tag',
            priority: PriorityEnum.Default,
            expiration: 'test-expiration',
        };

        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.to).toEqual([]);
        expect(fixture.from).toBe('test-from');
        expect(fixture.text).toBe('test-text');
        expect(fixture.media).toEqual([]);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.priority).toBe(PriorityEnum.Default);
        expect(fixture.expiration).toBe('test-expiration');
    });
});

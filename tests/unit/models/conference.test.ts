import { Conference } from '../../../models/conference';
import { CallbackMethodEnum } from '../../../models/callback-method-enum';

describe('Conference', () => {
    test('should accept the expected shape', () => {
        const fixture: Conference = {
            id: 'test-id',
            name: 'test-name',
            createdTime: 'test-createdTime',
            completedTime: 'test-completedTime',
            conferenceEventUrl: 'test-conferenceEventUrl',
            conferenceEventMethod: CallbackMethodEnum.Get,
            tag: 'test-tag',
            activeMembers: [],
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.name).toBe('test-name');
        expect(fixture.createdTime).toBe('test-createdTime');
        expect(fixture.completedTime).toBe('test-completedTime');
        expect(fixture.conferenceEventUrl).toBe('test-conferenceEventUrl');
        expect(fixture.conferenceEventMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.activeMembers).toEqual([]);
    });
});

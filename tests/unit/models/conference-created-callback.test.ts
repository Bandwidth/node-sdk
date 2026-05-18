import { ConferenceCreatedCallback } from '../../../models/conference-created-callback';

describe('ConferenceCreatedCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: ConferenceCreatedCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            conferenceId: 'test-conferenceId',
            name: 'test-name',
            tag: 'test-tag',
        };

        expect(fixture.eventType).toBe('test-eventType');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.conferenceId).toBe('test-conferenceId');
        expect(fixture.name).toBe('test-name');
        expect(fixture.tag).toBe('test-tag');
    });
});

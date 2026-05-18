import { ConferenceMemberExitCallback } from '../../../models/conference-member-exit-callback';

describe('ConferenceMemberExitCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: ConferenceMemberExitCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            conferenceId: 'test-conferenceId',
            name: 'test-name',
            from: 'test-from',
            to: 'test-to',
            callId: 'test-callId',
            tag: 'test-tag',
        };

        expect(fixture.eventType).toBe('test-eventType');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.conferenceId).toBe('test-conferenceId');
        expect(fixture.name).toBe('test-name');
        expect(fixture.from).toBe('test-from');
        expect(fixture.to).toBe('test-to');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.tag).toBe('test-tag');
    });
});

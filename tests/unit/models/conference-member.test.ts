import { ConferenceMember } from '../../../models/conference-member';

describe('ConferenceMember', () => {
    test('should accept the expected shape', () => {
        const fixture: ConferenceMember = {
            callId: 'test-callId',
            conferenceId: 'test-conferenceId',
            memberUrl: 'test-memberUrl',
            mute: true,
            hold: true,
            callIdsToCoach: [],
        };

        expect(fixture.callId).toBe('test-callId');
        expect(fixture.conferenceId).toBe('test-conferenceId');
        expect(fixture.memberUrl).toBe('test-memberUrl');
        expect(fixture.mute).toBe(true);
        expect(fixture.hold).toBe(true);
        expect(fixture.callIdsToCoach).toEqual([]);
    });
});

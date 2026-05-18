import { UpdateConferenceMember } from '../../../models/update-conference-member';

describe('UpdateConferenceMember', () => {
    test('should accept the expected shape', () => {
        const fixture: UpdateConferenceMember = {
            mute: true,
            hold: true,
            callIdsToCoach: [],
        };

        expect(fixture.mute).toBe(true);
        expect(fixture.hold).toBe(true);
        expect(fixture.callIdsToCoach).toEqual([]);
    });
});

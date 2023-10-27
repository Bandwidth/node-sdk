const { ConferenceStateEnum } = require('../../models/conference-state-enum');

describe('ConferenceStateEnum', () => {
    test('should define the expected values', () => {
        expect(ConferenceStateEnum.Active).toBe('active');
        expect(ConferenceStateEnum.Completed).toBe('completed');
    });
});

import { ConferenceStateEnum } from '../../../models/conference-state-enum';

describe('ConferenceStateEnum', () => {
    test('should define the expected values', () => {
        expect(ConferenceStateEnum.Active).toBe('active');
        expect(ConferenceStateEnum.Completed).toBe('completed');
        expect(Object.values(ConferenceStateEnum)).toEqual(['active', 'completed']);
    });
});

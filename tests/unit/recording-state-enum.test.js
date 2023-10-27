const { RecordingStateEnum } = require('../../models/recording-state-enum');

describe('RecordingStateEnum', () => {
    test('should define the expected values', () => {
        expect(RecordingStateEnum.Paused).toBe('paused');
        expect(RecordingStateEnum.Recording).toBe('recording');
    });
});

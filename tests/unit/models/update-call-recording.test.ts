import { UpdateCallRecording } from '../../../models/update-call-recording';
import { RecordingStateEnum } from '../../../models/recording-state-enum';

describe('UpdateCallRecording', () => {
    test('should accept the expected shape', () => {
        const fixture: UpdateCallRecording = {
            state: RecordingStateEnum.Paused,
        };

        expect(fixture.state).toBe(RecordingStateEnum.Paused);
    });
});

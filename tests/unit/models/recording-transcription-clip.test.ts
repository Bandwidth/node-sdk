import { RecordingTranscriptionClip } from '../../../models/recording-transcription-clip';

describe('RecordingTranscriptionClip', () => {
    test('should accept the expected shape', () => {
        const fixture: RecordingTranscriptionClip = {
            speaker: 1,
            text: 'test-text',
            confidence: 1.5,
            startTimeSeconds: 0.0,
            endTimeSeconds: 1.0,
        };

        expect(fixture.speaker).toBe(1);
        expect(fixture.text).toBe('test-text');
        expect(fixture.confidence).toBe(1.5);
        expect(fixture.startTimeSeconds).toBe(0.0);
        expect(fixture.endTimeSeconds).toBe(1.0);
    });
});

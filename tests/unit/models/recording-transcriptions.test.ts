import { RecordingTranscriptions } from '../../../models/recording-transcriptions';

describe('RecordingTranscriptions', () => {
    test('should accept the expected shape', () => {
        const fixture: RecordingTranscriptions = {
            transcripts: [],
            clips: [],
        };

        expect(fixture.transcripts).toEqual([]);
        expect(fixture.clips).toEqual([]);
    });
});

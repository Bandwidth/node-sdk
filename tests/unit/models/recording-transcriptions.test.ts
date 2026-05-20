import { RecordingTranscriptions } from '../../../models/recording-transcriptions';

describe('RecordingTranscriptions', () => {
    test('should accept the expected shape', () => {
        const fixture: RecordingTranscriptions = {
            transcripts: [],
        };

        expect(fixture.transcripts).toEqual([]);
    });
});

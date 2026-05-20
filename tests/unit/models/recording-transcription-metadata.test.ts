import { RecordingTranscriptionMetadata } from '../../../models/recording-transcription-metadata';

describe('RecordingTranscriptionMetadata', () => {
    test('should accept the expected shape', () => {
        const fixture: RecordingTranscriptionMetadata = {
            id: 'test-id',
            status: 'test-status',
            completedTime: 'test-completedTime',
            url: 'test-url',
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.status).toBe('test-status');
        expect(fixture.completedTime).toBe('test-completedTime');
        expect(fixture.url).toBe('test-url');
    });
});

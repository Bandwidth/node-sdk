import { CallTranscriptionMetadata } from '../../../models/call-transcription-metadata';

describe('CallTranscriptionMetadata', () => {
    test('should accept the expected shape', () => {
        const fixture: CallTranscriptionMetadata = {
            transcriptionId: 'test-transcriptionId',
            transcriptionName: 'test-transcriptionName',
            transcriptionUrl: 'test-transcriptionUrl',
        };

        expect(fixture.transcriptionId).toBe('test-transcriptionId');
        expect(fixture.transcriptionName).toBe('test-transcriptionName');
        expect(fixture.transcriptionUrl).toBe('test-transcriptionUrl');
    });
});

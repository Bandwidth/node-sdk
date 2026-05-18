import { CallTranscriptionResponse } from '../../../models/call-transcription-response';

describe('CallTranscriptionResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: CallTranscriptionResponse = {
            accountId: 'test-accountId',
            callId: 'test-callId',
            transcriptionId: 'test-transcriptionId',
            tracks: [],
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.transcriptionId).toBe('test-transcriptionId');
        expect(fixture.tracks).toEqual([]);
    });
});

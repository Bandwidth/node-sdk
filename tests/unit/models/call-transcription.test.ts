import { CallTranscription } from '../../../models/call-transcription';
import { CallTranscriptionDetectedLanguageEnum } from '../../../models/call-transcription-detected-language-enum';
import { CallTranscriptionTrackEnum } from '../../../models/call-transcription-track-enum';

describe('CallTranscription', () => {
    test('should accept the expected shape', () => {
        const fixture: CallTranscription = {
            detectedLanguage: CallTranscriptionDetectedLanguageEnum.EnUs,
            track: CallTranscriptionTrackEnum.Inbound,
            transcript: 'test-transcript',
            confidence: 1.5,
        };

        expect(fixture.detectedLanguage).toBe(CallTranscriptionDetectedLanguageEnum.EnUs);
        expect(fixture.track).toBe(CallTranscriptionTrackEnum.Inbound);
        expect(fixture.transcript).toBe('test-transcript');
        expect(fixture.confidence).toBe(1.5);
    });
});

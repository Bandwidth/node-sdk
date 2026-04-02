import { CallTranscriptionDetectedLanguageEnum } from '../../../models/call-transcription-detected-language-enum';

describe('CallTranscriptionTrackEnum', () => {
    test('should define the expected values', () => {
        expect(CallTranscriptionDetectedLanguageEnum.EnUs).toBe('en-US');
        expect(CallTranscriptionDetectedLanguageEnum.EsUs).toBe('es-US');
        expect(CallTranscriptionDetectedLanguageEnum.FrFr).toBe('fr-FR');
        expect(Object.values(CallTranscriptionDetectedLanguageEnum)).toEqual(['en-US', 'es-US', 'fr-FR']);
    });
});

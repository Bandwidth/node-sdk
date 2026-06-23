import { Transcription } from '../../../models/transcription';

describe('Transcription', () => {
    test('should accept the expected shape', () => {
        const fixture: Transcription = {
            speaker: 1,
            text: 'test-text',
            confidence: 1.5,
        };

        expect(fixture.speaker).toBe(1);
        expect(fixture.text).toBe('test-text');
        expect(fixture.confidence).toBe(1.5);
    });
});

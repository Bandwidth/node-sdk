import { Transcription } from '../../../models/transcription';

describe('Transcription', () => {
    test('should accept the expected shape', () => {
        const fixture: Transcription = {
            text: 'test-text',
            confidence: 1.5,
        };

        expect(fixture.text).toBe('test-text');
        expect(fixture.confidence).toBe(1.5);
    });
});

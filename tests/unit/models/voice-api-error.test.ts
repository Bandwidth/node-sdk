import { VoiceApiError } from '../../../models/voice-api-error';

describe('VoiceApiError', () => {
    test('should accept the expected shape', () => {
        const fixture: VoiceApiError = {
            type: 'test-type',
            description: 'test-description',
            id: 'test-id',
        };

        expect(fixture.type).toBe('test-type');
        expect(fixture.description).toBe('test-description');
        expect(fixture.id).toBe('test-id');
    });
});

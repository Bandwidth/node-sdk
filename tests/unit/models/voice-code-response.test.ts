import { VoiceCodeResponse } from '../../../models/voice-code-response';

describe('VoiceCodeResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: VoiceCodeResponse = {
            callId: 'test-callId',
        };

        expect(fixture.callId).toBe('test-callId');
    });
});

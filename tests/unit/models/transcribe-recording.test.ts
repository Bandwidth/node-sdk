import { TranscribeRecording } from '../../../models/transcribe-recording';
import { CallbackMethodEnum } from '../../../models/callback-method-enum';

describe('TranscribeRecording', () => {
    test('should accept the expected shape', () => {
        const fixture: TranscribeRecording = {
            callbackUrl: 'test-callbackUrl',
            callbackMethod: CallbackMethodEnum.Get,
            username: 'test-username',
            password: 'test-password',
            tag: 'test-tag',
            callbackTimeout: 1.5,
            detectLanguage: true,
        };

        expect(fixture.callbackUrl).toBe('test-callbackUrl');
        expect(fixture.callbackMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.callbackTimeout).toBe(1.5);
        expect(fixture.detectLanguage).toBe(true);
    });
});

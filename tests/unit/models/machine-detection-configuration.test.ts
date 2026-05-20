import { MachineDetectionConfiguration } from '../../../models/machine-detection-configuration';
import { MachineDetectionModeEnum } from '../../../models/machine-detection-mode-enum';
import { CallbackMethodEnum } from '../../../models/callback-method-enum';

describe('MachineDetectionConfiguration', () => {
    test('should accept the expected shape', () => {
        const fixture: MachineDetectionConfiguration = {
            mode: MachineDetectionModeEnum.Sync,
            detectionTimeout: 1.5,
            silenceTimeout: 1.5,
            speechThreshold: 1.5,
            speechEndThreshold: 1.5,
            machineSpeechEndThreshold: 1.5,
            delayResult: true,
            callbackUrl: 'test-callbackUrl',
            callbackMethod: CallbackMethodEnum.Get,
            username: 'test-username',
            password: 'test-password',
            fallbackUrl: 'test-fallbackUrl',
            fallbackMethod: CallbackMethodEnum.Get,
            fallbackUsername: 'test-fallbackUsername',
            fallbackPassword: 'test-fallbackPassword',
        };

        expect(fixture.mode).toBe(MachineDetectionModeEnum.Sync);
        expect(fixture.detectionTimeout).toBe(1.5);
        expect(fixture.silenceTimeout).toBe(1.5);
        expect(fixture.speechThreshold).toBe(1.5);
        expect(fixture.speechEndThreshold).toBe(1.5);
        expect(fixture.machineSpeechEndThreshold).toBe(1.5);
        expect(fixture.delayResult).toBe(true);
        expect(fixture.callbackUrl).toBe('test-callbackUrl');
        expect(fixture.callbackMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.fallbackUrl).toBe('test-fallbackUrl');
        expect(fixture.fallbackMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.fallbackUsername).toBe('test-fallbackUsername');
        expect(fixture.fallbackPassword).toBe('test-fallbackPassword');
    });
});

import { CreateCall } from '../../../models/create-call';
import { CallbackMethodEnum } from '../../../models/callback-method-enum';
import { MachineDetectionConfiguration } from '../../../models/machine-detection-configuration';

describe('CreateCall', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateCall = {
            to: 'test-to',
            from: 'test-from',
            privacy: true,
            displayName: 'test-displayName',
            uui: 'test-uui',
            applicationId: 'test-applicationId',
            answerUrl: 'test-answerUrl',
            answerMethod: CallbackMethodEnum.Get,
            username: 'test-username',
            password: 'test-password',
            answerFallbackUrl: 'test-answerFallbackUrl',
            answerFallbackMethod: CallbackMethodEnum.Get,
            fallbackUsername: 'test-fallbackUsername',
            fallbackPassword: 'test-fallbackPassword',
            disconnectUrl: 'test-disconnectUrl',
            disconnectMethod: CallbackMethodEnum.Get,
            callTimeout: 1.5,
            callbackTimeout: 1.5,
            machineDetection: {} as unknown as MachineDetectionConfiguration,
            priority: 1.5,
            tag: 'test-tag',
        };

        expect(fixture.to).toBe('test-to');
        expect(fixture.from).toBe('test-from');
        expect(fixture.privacy).toBe(true);
        expect(fixture.displayName).toBe('test-displayName');
        expect(fixture.uui).toBe('test-uui');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.answerUrl).toBe('test-answerUrl');
        expect(fixture.answerMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.answerFallbackUrl).toBe('test-answerFallbackUrl');
        expect(fixture.answerFallbackMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.fallbackUsername).toBe('test-fallbackUsername');
        expect(fixture.fallbackPassword).toBe('test-fallbackPassword');
        expect(fixture.disconnectUrl).toBe('test-disconnectUrl');
        expect(fixture.disconnectMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.callTimeout).toBe(1.5);
        expect(fixture.callbackTimeout).toBe(1.5);
        expect(fixture.machineDetection).toBeDefined();
        expect(fixture.priority).toBe(1.5);
        expect(fixture.tag).toBe('test-tag');
    });
});

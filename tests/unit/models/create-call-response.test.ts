import { CreateCallResponse } from '../../../models/create-call-response';
import { CallbackMethodEnum } from '../../../models/callback-method-enum';

describe('CreateCallResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateCallResponse = {
            applicationId: 'test-applicationId',
            accountId: 'test-accountId',
            callId: 'test-callId',
            to: 'test-to',
            from: 'test-from',
            enqueuedTime: 'test-enqueuedTime',
            callUrl: 'test-callUrl',
            callTimeout: 1.5,
            callbackTimeout: 1.5,
            tag: 'test-tag',
            answerMethod: CallbackMethodEnum.Get,
            answerUrl: 'test-answerUrl',
            answerFallbackMethod: CallbackMethodEnum.Get,
            answerFallbackUrl: 'test-answerFallbackUrl',
            disconnectMethod: CallbackMethodEnum.Get,
            disconnectUrl: 'test-disconnectUrl',
            username: 'test-username',
            password: 'test-password',
            fallbackUsername: 'test-fallbackUsername',
            fallbackPassword: 'test-fallbackPassword',
            priority: 1.5,
        };

        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.to).toBe('test-to');
        expect(fixture.from).toBe('test-from');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.callUrl).toBe('test-callUrl');
        expect(fixture.callTimeout).toBe(1.5);
        expect(fixture.callbackTimeout).toBe(1.5);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.answerMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.answerUrl).toBe('test-answerUrl');
        expect(fixture.answerFallbackMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.answerFallbackUrl).toBe('test-answerFallbackUrl');
        expect(fixture.disconnectMethod).toBe(CallbackMethodEnum.Get);
        expect(fixture.disconnectUrl).toBe('test-disconnectUrl');
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.fallbackUsername).toBe('test-fallbackUsername');
        expect(fixture.fallbackPassword).toBe('test-fallbackPassword');
        expect(fixture.priority).toBe(1.5);
    });
});

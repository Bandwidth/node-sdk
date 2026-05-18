import { UpdateCall } from '../../../models/update-call';
import { CallStateEnum } from '../../../models/call-state-enum';
import { RedirectMethodEnum } from '../../../models/redirect-method-enum';

describe('UpdateCall', () => {
    test('should accept the expected shape', () => {
        const fixture: UpdateCall = {
            state: CallStateEnum.Active,
            redirectUrl: 'test-redirectUrl',
            redirectMethod: RedirectMethodEnum.Get,
            username: 'test-username',
            password: 'test-password',
            redirectFallbackUrl: 'test-redirectFallbackUrl',
            redirectFallbackMethod: RedirectMethodEnum.Get,
            fallbackUsername: 'test-fallbackUsername',
            fallbackPassword: 'test-fallbackPassword',
            tag: 'test-tag',
        };

        expect(fixture.state).toBe(CallStateEnum.Active);
        expect(fixture.redirectUrl).toBe('test-redirectUrl');
        expect(fixture.redirectMethod).toBe(RedirectMethodEnum.Get);
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.redirectFallbackUrl).toBe('test-redirectFallbackUrl');
        expect(fixture.redirectFallbackMethod).toBe(RedirectMethodEnum.Get);
        expect(fixture.fallbackUsername).toBe('test-fallbackUsername');
        expect(fixture.fallbackPassword).toBe('test-fallbackPassword');
        expect(fixture.tag).toBe('test-tag');
    });
});

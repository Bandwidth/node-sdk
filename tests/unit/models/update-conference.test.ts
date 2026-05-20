import { UpdateConference } from '../../../models/update-conference';
import { ConferenceStateEnum } from '../../../models/conference-state-enum';
import { RedirectMethodEnum } from '../../../models/redirect-method-enum';

describe('UpdateConference', () => {
    test('should accept the expected shape', () => {
        const fixture: UpdateConference = {
            status: ConferenceStateEnum.Active,
            redirectUrl: 'test-redirectUrl',
            redirectMethod: RedirectMethodEnum.Get,
            username: 'test-username',
            password: 'test-password',
            redirectFallbackUrl: 'test-redirectFallbackUrl',
            redirectFallbackMethod: RedirectMethodEnum.Get,
            fallbackUsername: 'test-fallbackUsername',
            fallbackPassword: 'test-fallbackPassword',
        };

        expect(fixture.status).toBe(ConferenceStateEnum.Active);
        expect(fixture.redirectUrl).toBe('test-redirectUrl');
        expect(fixture.redirectMethod).toBe(RedirectMethodEnum.Get);
        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
        expect(fixture.redirectFallbackUrl).toBe('test-redirectFallbackUrl');
        expect(fixture.redirectFallbackMethod).toBe(RedirectMethodEnum.Get);
        expect(fixture.fallbackUsername).toBe('test-fallbackUsername');
        expect(fixture.fallbackPassword).toBe('test-fallbackPassword');
    });
});

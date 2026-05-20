import { VerifyCodeRequest } from '../../../models/verify-code-request';

describe('VerifyCodeRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: VerifyCodeRequest = {
            to: 'test-to',
            scope: 'test-scope',
            expirationTimeInMinutes: 1.5,
            code: 'test-code',
        };

        expect(fixture.to).toBe('test-to');
        expect(fixture.scope).toBe('test-scope');
        expect(fixture.expirationTimeInMinutes).toBe(1.5);
        expect(fixture.code).toBe('test-code');
    });
});

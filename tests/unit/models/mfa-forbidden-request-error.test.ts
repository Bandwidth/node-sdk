import { MfaForbiddenRequestError } from '../../../models/mfa-forbidden-request-error';

describe('MfaForbiddenRequestError', () => {
    test('should accept the expected shape', () => {
        const fixture: MfaForbiddenRequestError = {
            message: 'test-message',
        };

        expect(fixture.message).toBe('test-message');
    });
});

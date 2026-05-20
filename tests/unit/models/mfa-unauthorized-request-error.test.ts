import { MfaUnauthorizedRequestError } from '../../../models/mfa-unauthorized-request-error';

describe('MfaUnauthorizedRequestError', () => {
    test('should accept the expected shape', () => {
        const fixture: MfaUnauthorizedRequestError = {
            message: 'test-message',
        };

        expect(fixture.message).toBe('test-message');
    });
});

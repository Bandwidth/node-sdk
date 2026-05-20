import { MfaRequestError } from '../../../models/mfa-request-error';

describe('MfaRequestError', () => {
    test('should accept the expected shape', () => {
        const fixture: MfaRequestError = {
            error: 'test-error',
            requestId: 'test-requestId',
        };

        expect(fixture.error).toBe('test-error');
        expect(fixture.requestId).toBe('test-requestId');
    });
});

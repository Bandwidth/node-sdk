import { VerifyCodeResponse } from '../../../models/verify-code-response';

describe('VerifyCodeResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: VerifyCodeResponse = {
            valid: true,
        };

        expect(fixture.valid).toBe(true);
    });
});

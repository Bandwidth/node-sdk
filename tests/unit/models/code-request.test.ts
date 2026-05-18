import { CodeRequest } from '../../../models/code-request';

describe('CodeRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: CodeRequest = {
            to: 'test-to',
            from: 'test-from',
            applicationId: 'test-applicationId',
            scope: 'test-scope',
            message: 'test-message',
            digits: 1.5,
        };

        expect(fixture.to).toBe('test-to');
        expect(fixture.from).toBe('test-from');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.scope).toBe('test-scope');
        expect(fixture.message).toBe('test-message');
        expect(fixture.digits).toBe(1.5);
    });
});

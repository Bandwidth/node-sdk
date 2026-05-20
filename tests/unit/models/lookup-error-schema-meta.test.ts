import { LookupErrorSchemaMeta } from '../../../models/lookup-error-schema-meta';

describe('LookupErrorSchemaMeta', () => {
    test('should accept the expected shape', () => {
        const fixture: LookupErrorSchemaMeta = {
            phoneNumbers: [],
            message: 'test-message',
            code: 1.5,
        };

        expect(fixture.phoneNumbers).toEqual([]);
        expect(fixture.message).toBe('test-message');
        expect(fixture.code).toBe(1.5);
    });
});

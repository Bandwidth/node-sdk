import { LookupErrorSchema } from '../../../models/lookup-error-schema';
import { LookupErrorSchemaMeta } from '../../../models/lookup-error-schema-meta';

describe('LookupErrorSchema', () => {
    test('should accept the expected shape', () => {
        const fixture: LookupErrorSchema = {
            code: 'test-code',
            description: 'test-description',
            type: 'test-type',
            meta: {} as unknown as LookupErrorSchemaMeta,
        };

        expect(fixture.code).toBe('test-code');
        expect(fixture.description).toBe('test-description');
        expect(fixture.type).toBe('test-type');
        expect(fixture.meta).toBeDefined();
    });
});

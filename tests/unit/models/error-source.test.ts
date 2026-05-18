import { ErrorSource } from '../../../models/error-source';

describe('ErrorSource', () => {
    test('should accept the expected shape', () => {
        const fixture: ErrorSource = {
            parameter: 'test-parameter',
            field: 'test-field',
            header: 'test-header',
            reference: 'test-reference',
        };

        expect(fixture.parameter).toBe('test-parameter');
        expect(fixture.field).toBe('test-field');
        expect(fixture.header).toBe('test-header');
        expect(fixture.reference).toBe('test-reference');
    });
});

import { FieldError } from '../../../models/field-error';

describe('FieldError', () => {
    test('should accept the expected shape', () => {
        const fixture: FieldError = {
            fieldName: 'test-fieldName',
            description: 'test-description',
        };

        expect(fixture.fieldName).toBe('test-fieldName');
        expect(fixture.description).toBe('test-description');
    });
});

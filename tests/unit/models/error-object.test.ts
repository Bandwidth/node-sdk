import { ErrorObject } from '../../../models/error-object';
import { ErrorSource } from '../../../models/error-source';

describe('ErrorObject', () => {
    test('should accept the expected shape', () => {
        const fixture: ErrorObject = {
            type: 'test-type',
            description: 'test-description',
            source: {} as unknown as ErrorSource,
        };

        expect(fixture.type).toBe('test-type');
        expect(fixture.description).toBe('test-description');
        expect(fixture.source).toBeDefined();
    });
});

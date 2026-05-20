import { TfvError } from '../../../models/tfv-error';

describe('TfvError', () => {
    test('should accept the expected shape', () => {
        const fixture: TfvError = {
            type: 'test-type',
            description: 'test-description',
        };

        expect(fixture.type).toBe('test-type');
        expect(fixture.description).toBe('test-description');
    });
});

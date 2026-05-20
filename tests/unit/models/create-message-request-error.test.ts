import { CreateMessageRequestError } from '../../../models/create-message-request-error';

describe('CreateMessageRequestError', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateMessageRequestError = {
            type: 'test-type',
            description: 'test-description',
            fieldErrors: [],
        };

        expect(fixture.type).toBe('test-type');
        expect(fixture.description).toBe('test-description');
        expect(fixture.fieldErrors).toEqual([]);
    });
});

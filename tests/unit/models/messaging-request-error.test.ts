import { MessagingRequestError } from '../../../models/messaging-request-error';

describe('MessagingRequestError', () => {
    test('should accept the expected shape', () => {
        const fixture: MessagingRequestError = {
            type: 'test-type',
            description: 'test-description',
        };

        expect(fixture.type).toBe('test-type');
        expect(fixture.description).toBe('test-description');
    });
});

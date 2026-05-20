import { Contact } from '../../../models/contact';

describe('Contact', () => {
    test('should accept the expected shape', () => {
        const fixture: Contact = {
            firstName: 'test-firstName',
            lastName: 'test-lastName',
            email: 'test-email',
            phoneNumber: 'test-phoneNumber',
        };

        expect(fixture.firstName).toBe('test-firstName');
        expect(fixture.lastName).toBe('test-lastName');
        expect(fixture.email).toBe('test-email');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
    });
});

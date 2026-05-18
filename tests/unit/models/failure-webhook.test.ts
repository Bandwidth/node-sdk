import { FailureWebhook } from '../../../models/failure-webhook';

describe('FailureWebhook', () => {
    test('should accept the expected shape', () => {
        const fixture: FailureWebhook = {
            accountId: 'test-accountId',
            phoneNumber: 'test-phoneNumber',
            errorCode: 'test-errorCode',
            errorMessage: 'test-errorMessage',
            errors: [],
            internalTicketNumber: 'test-internalTicketNumber',
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.errorCode).toBe('test-errorCode');
        expect(fixture.errorMessage).toBe('test-errorMessage');
        expect(fixture.errors).toEqual([]);
        expect(fixture.internalTicketNumber).toBe('test-internalTicketNumber');
    });
});

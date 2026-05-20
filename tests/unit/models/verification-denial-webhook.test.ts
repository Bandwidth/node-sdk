import { VerificationDenialWebhook } from '../../../models/verification-denial-webhook';

describe('VerificationDenialWebhook', () => {
    test('should accept the expected shape', () => {
        const fixture: VerificationDenialWebhook = {
            accountId: 'test-accountId',
            additionalDenialReasons: [],
            declineReasonDescription: 'test-declineReasonDescription',
            denialStatusCode: 1.5,
            internalTicketNumber: 'test-internalTicketNumber',
            phoneNumber: 'test-phoneNumber',
            resubmitAllowed: true,
            status: 'test-status',
            blocked: true,
            blockedReason: 'test-blockedReason',
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.additionalDenialReasons).toEqual([]);
        expect(fixture.declineReasonDescription).toBe('test-declineReasonDescription');
        expect(fixture.denialStatusCode).toBe(1.5);
        expect(fixture.internalTicketNumber).toBe('test-internalTicketNumber');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.resubmitAllowed).toBe(true);
        expect(fixture.status).toBe('test-status');
        expect(fixture.blocked).toBe(true);
        expect(fixture.blockedReason).toBe('test-blockedReason');
    });
});

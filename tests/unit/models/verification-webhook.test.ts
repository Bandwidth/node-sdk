import { VerificationWebhook } from '../../../models/verification-webhook';
import { TfvCallbackStatusEnum } from '../../../models/tfv-callback-status-enum';

describe('VerificationWebhook', () => {
    test('should accept the expected shape', () => {
        const fixture: VerificationWebhook = {
            accountId: 'test-accountId',
            phoneNumber: 'test-phoneNumber',
            status: TfvCallbackStatusEnum.Verified,
            internalTicketNumber: 'test-internalTicketNumber',
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.status).toBe(TfvCallbackStatusEnum.Verified);
        expect(fixture.internalTicketNumber).toBe('test-internalTicketNumber');
    });
});

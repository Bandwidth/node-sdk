import { BlockedWebhook } from '../../../models/blocked-webhook';
import { TfvCallbackStatusEnum } from '../../../models/tfv-callback-status-enum';

describe('BlockedWebhook', () => {
    test('should accept the expected shape', () => {
        const fixture: BlockedWebhook = {
            accountId: 'test-accountId',
            phoneNumber: 'test-phoneNumber',
            status: TfvCallbackStatusEnum.Verified,
            internalTicketNumber: 'test-internalTicketNumber',
            blocked: true,
            blockedReason: 'test-blockedReason',
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.status).toBe(TfvCallbackStatusEnum.Verified);
        expect(fixture.internalTicketNumber).toBe('test-internalTicketNumber');
        expect(fixture.blocked).toBe(true);
        expect(fixture.blockedReason).toBe('test-blockedReason');
    });
});

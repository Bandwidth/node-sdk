import { WebhookSubscriptionTypeEnum } from '../../../models/webhook-subscription-type-enum';

describe('WebhookSubscriptionTypeEnum', () => {
    test('should define the expected values', () => {
        expect(WebhookSubscriptionTypeEnum.TollfreeVerificationStatus).toBe('TOLLFREE_VERIFICATION_STATUS');
        expect(WebhookSubscriptionTypeEnum.MessagingPortoutApprovalStatus).toBe('MESSAGING_PORTOUT_APPROVAL_STATUS');
    });
});

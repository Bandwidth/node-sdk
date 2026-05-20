import { WebhookSubscription } from '../../../models/webhook-subscription';
import { WebhookSubscriptionTypeEnum } from '../../../models/webhook-subscription-type-enum';
import { WebhookSubscriptionBasicAuthentication } from '../../../models/webhook-subscription-basic-authentication';

describe('WebhookSubscription', () => {
    test('should accept the expected shape', () => {
        const fixture: WebhookSubscription = {
            id: 'test-id',
            accountId: 'test-accountId',
            callbackUrl: 'test-callbackUrl',
            type: WebhookSubscriptionTypeEnum.TollfreeVerificationStatus,
            basicAuthentication: {} as unknown as WebhookSubscriptionBasicAuthentication,
            createdDate: 'test-createdDate',
            modifiedDate: 'test-modifiedDate',
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.callbackUrl).toBe('test-callbackUrl');
        expect(fixture.type).toBe(WebhookSubscriptionTypeEnum.TollfreeVerificationStatus);
        expect(fixture.basicAuthentication).toBeDefined();
        expect(fixture.createdDate).toBe('test-createdDate');
        expect(fixture.modifiedDate).toBe('test-modifiedDate');
    });
});

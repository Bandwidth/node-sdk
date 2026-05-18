import { WebhookSubscriptionRequestSchema } from '../../../models/webhook-subscription-request-schema';
import { TfvBasicAuthentication } from '../../../models/tfv-basic-authentication';

describe('WebhookSubscriptionRequestSchema', () => {
    test('should accept the expected shape', () => {
        const fixture: WebhookSubscriptionRequestSchema = {
            basicAuthentication: {} as unknown as TfvBasicAuthentication,
            callbackUrl: 'test-callbackUrl',
            sharedSecretKey: 'test-sharedSecretKey',
        };

        expect(fixture.basicAuthentication).toBeDefined();
        expect(fixture.callbackUrl).toBe('test-callbackUrl');
        expect(fixture.sharedSecretKey).toBe('test-sharedSecretKey');
    });
});

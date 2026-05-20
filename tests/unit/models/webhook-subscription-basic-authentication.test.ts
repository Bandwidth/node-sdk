import { WebhookSubscriptionBasicAuthentication } from '../../../models/webhook-subscription-basic-authentication';

describe('WebhookSubscriptionBasicAuthentication', () => {
    test('should accept the expected shape', () => {
        const fixture: WebhookSubscriptionBasicAuthentication = {
            username: 'test-username',
            password: 'test-password',
        };

        expect(fixture.username).toBe('test-username');
        expect(fixture.password).toBe('test-password');
    });
});

import { WebhookSubscriptionError } from '../../../models/webhook-subscription-error';

describe('WebhookSubscriptionError', () => {
    test('should accept the expected shape', () => {
        const fixture: WebhookSubscriptionError = {
            code: 1.5,
            description: 'test-description',
            telephoneNumbers: [],
        };

        expect(fixture.code).toBe(1.5);
        expect(fixture.description).toBe('test-description');
        expect(fixture.telephoneNumbers).toEqual([]);
    });
});

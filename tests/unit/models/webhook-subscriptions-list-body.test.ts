import { WebhookSubscriptionsListBody } from '../../../models/webhook-subscriptions-list-body';
import { LinksObject } from '../../../models/links-object';

describe('WebhookSubscriptionsListBody', () => {
    test('should accept the expected shape', () => {
        const fixture: WebhookSubscriptionsListBody = {
            links: {} as unknown as LinksObject,
            errors: [],
            data: [],
        };

        expect(fixture.links).toBeDefined();
        expect(fixture.errors).toEqual([]);
        expect(fixture.data).toEqual([]);
    });
});

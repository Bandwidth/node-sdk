# WebhookSubscriptionsListBody

A list of all webhook subscriptions registered for this account ID for this particular feature (unpaginated).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**LinksObject**](LinksObject.md) |  | [optional] [default to undefined]
**errors** | [**Array&lt;ModelError&gt;**](ModelError.md) |  | [optional] [default to undefined]
**data** | [**Array&lt;WebhookSubscription&gt;**](WebhookSubscription.md) |  | [default to undefined]

## Example

```typescript
import { WebhookSubscriptionsListBody } from 'bandwidth-sdk';

const instance: WebhookSubscriptionsListBody = {
    links,
    errors,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

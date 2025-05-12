# WebhookSubscription

Information about a webhook that Bandwidth should send upon the completion of event customer has subscribed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**accountId** | **string** |  | [optional] [default to undefined]
**callbackUrl** | **string** | Callback URL to receive status updates from Bandwidth. When a webhook subscription is registered with Bandwidth under a given account ID, it will be used to send status updates for all requests submitted under that account ID. | [default to undefined]
**type** | [**WebhookSubscriptionTypeEnum**](WebhookSubscriptionTypeEnum.md) |  | [optional] [default to undefined]
**basicAuthentication** | [**WebhookSubscriptionBasicAuthentication**](WebhookSubscriptionBasicAuthentication.md) |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**modifiedDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WebhookSubscription } from 'bandwidth-sdk';

const instance: WebhookSubscription = {
    id,
    accountId,
    callbackUrl,
    type,
    basicAuthentication,
    createdDate,
    modifiedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

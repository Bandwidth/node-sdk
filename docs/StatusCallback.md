# StatusCallback

Represents a status callback for an outbound MT SMS or MMS or RBM message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** |  | [default to undefined]
**eventTime** | **string** | Represents the time at which the message was read, for &#x60;message-read&#x60; callbacks. | [optional] [default to undefined]
**type** | [**StatusCallbackTypeEnum**](StatusCallbackTypeEnum.md) |  | [default to undefined]
**to** | **string** | The destination phone number the message was sent to. For status callbacks, this the the Bandwidth user\&#39;s client phone number. | [default to undefined]
**description** | **string** | A detailed description of the event described by the callback. | [default to undefined]
**message** | [**StatusCallbackMessage**](StatusCallbackMessage.md) |  | [default to undefined]
**errorCode** | **number** | Optional error code, applicable only when type is &#x60;message-failed&#x60;. | [optional] [default to undefined]
**carrierName** | **string** | The name of the Authorized Message Provider (AMP) that handled this message.  In the US, this is the carrier that the message was sent to. This field is present only when this account feature has been enabled. | [optional] [default to undefined]

## Example

```typescript
import { StatusCallback } from 'bandwidth-sdk';

const instance: StatusCallback = {
    time,
    eventTime,
    type,
    to,
    description,
    message,
    errorCode,
    carrierName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

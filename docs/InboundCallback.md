# InboundCallback

Represents an inbound callback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** |  | [default to undefined]
**type** | [**InboundCallbackTypeEnum**](InboundCallbackTypeEnum.md) |  | [default to undefined]
**to** | **string** | The destination phone number the message was sent to. For inbound callbacks, this is the Bandwidth number or alphanumeric identifier that received the message.  | [default to undefined]
**description** | **string** | A detailed description of the event described by the callback. | [default to undefined]
**message** | [**InboundCallbackMessage**](InboundCallbackMessage.md) |  | [default to undefined]
**carrierName** | **string** | The name of the Authorized Message Provider (AMP) that handled this message. In the US, this is the carrier that the message was sent to. This field is present only when this account feature has been enabled. | [optional] [default to undefined]

## Example

```typescript
import { InboundCallback } from 'bandwidth-sdk';

const instance: InboundCallback = {
    time,
    type,
    to,
    description,
    message,
    carrierName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# Callback

Callbacks are divided into two types based on direction of the related message: - `statusCallback` indicates status of an outbound MT SMS, MMS, or RBM message. - `inboundCallback` indicates an inbound MO message or a multichannel message client\'s response to a suggestion or location request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** |  | [default to undefined]
**eventTime** | **string** | Represents the time at which the message was read, for &#x60;message-read&#x60; callbacks. | [optional] [default to undefined]
**type** | [**InboundCallbackTypeEnum**](InboundCallbackTypeEnum.md) |  | [default to undefined]
**to** | **string** | The destination phone number the message was sent to. For inbound callbacks, this is the Bandwidth number or alphanumeric identifier that received the message.  | [default to undefined]
**description** | **string** | A detailed description of the event described by the callback. | [default to undefined]
**message** | [**InboundCallbackMessage**](InboundCallbackMessage.md) |  | [default to undefined]
**errorCode** | **number** | Optional error code, applicable only when type is &#x60;message-failed&#x60;. | [optional] [default to undefined]
**carrierName** | **string** | The name of the Authorized Message Provider (AMP) that handled this message. In the US, this is the carrier that the message was sent to. This field is present only when this account feature has been enabled. | [optional] [default to undefined]

## Example

```typescript
import { Callback } from 'bandwidth-sdk';

const instance: Callback = {
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

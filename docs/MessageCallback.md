# MessageCallback

Message Callback Schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** |  | [default to undefined]
**type** | [**CallbackTypeEnum**](CallbackTypeEnum.md) |  | [default to undefined]
**to** | **string** |  | [default to undefined]
**description** | **string** | A detailed description of the event described by the callback. | [default to undefined]
**message** | [**MessageCallbackMessage**](MessageCallbackMessage.md) |  | [default to undefined]
**errorCode** | **number** | Optional error code, applicable only when type is &#x60;message-failed&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { MessageCallback } from 'bandwidth-sdk';

const instance: MessageCallback = {
    time,
    type,
    to,
    description,
    message,
    errorCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

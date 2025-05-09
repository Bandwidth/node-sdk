# CreateCallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **string** | The id of the application associated with the &#x60;from&#x60; number. | [default to undefined]
**accountId** | **string** | The bandwidth account ID associated with the call. | [default to undefined]
**callId** | **string** | Programmable Voice API Call ID. | [default to undefined]
**to** | **string** | Recipient of the outgoing call. | [default to undefined]
**from** | **string** | Phone number that created the outbound call. | [default to undefined]
**enqueuedTime** | **string** | The time at which the call was accepted into the queue. | [optional] [default to undefined]
**callUrl** | **string** | The URL to update this call\&#39;s state. | [default to undefined]
**callTimeout** | **number** | The timeout (in seconds) for the callee to answer the call after it starts ringing. | [optional] [default to undefined]
**callbackTimeout** | **number** | This is the timeout (in seconds) to use when delivering webhooks for the call. | [optional] [default to undefined]
**tag** | **string** | Custom tag value. | [optional] [default to undefined]
**answerMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [default to undefined]
**answerUrl** | **string** | URL to deliver the &#x60;answer&#x60; event webhook. | [default to undefined]
**answerFallbackMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [optional] [default to undefined]
**answerFallbackUrl** | **string** | Fallback URL to deliver the &#x60;answer&#x60; event webhook. | [optional] [default to undefined]
**disconnectMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [default to undefined]
**disconnectUrl** | **string** | URL to deliver the &#x60;disconnect&#x60; event webhook. | [optional] [default to undefined]
**username** | **string** | Basic auth username. | [optional] [default to undefined]
**password** | **string** | Basic auth password. | [optional] [default to undefined]
**fallbackUsername** | **string** | Basic auth username. | [optional] [default to undefined]
**fallbackPassword** | **string** | Basic auth password. | [optional] [default to undefined]
**priority** | **number** | The priority of this call over other calls from your account. | [optional] [default to undefined]

## Example

```typescript
import { CreateCallResponse } from 'bandwidth-sdk';

const instance: CreateCallResponse = {
    applicationId,
    accountId,
    callId,
    to,
    from,
    enqueuedTime,
    callUrl,
    callTimeout,
    callbackTimeout,
    tag,
    answerMethod,
    answerUrl,
    answerFallbackMethod,
    answerFallbackUrl,
    disconnectMethod,
    disconnectUrl,
    username,
    password,
    fallbackUsername,
    fallbackPassword,
    priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

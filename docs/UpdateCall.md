# UpdateCall


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**CallStateEnum**](CallStateEnum.md) |  | [optional] [default to undefined]
**redirectUrl** | **string** | The URL to send the [Redirect](/docs/voice/bxml/redirect) event to which will provide new BXML.  Required if &#x60;state&#x60; is &#x60;active&#x60;.  Not allowed if &#x60;state&#x60; is &#x60;completed&#x60;. | [optional] [default to undefined]
**redirectMethod** | [**RedirectMethodEnum**](RedirectMethodEnum.md) |  | [optional] [default to undefined]
**username** | **string** | Basic auth username. | [optional] [default to undefined]
**password** | **string** | Basic auth password. | [optional] [default to undefined]
**redirectFallbackUrl** | **string** | A fallback url which, if provided, will be used to retry the redirect callback delivery in case &#x60;redirectUrl&#x60; fails to respond. | [optional] [default to undefined]
**redirectFallbackMethod** | [**RedirectMethodEnum**](RedirectMethodEnum.md) |  | [optional] [default to undefined]
**fallbackUsername** | **string** | Basic auth username. | [optional] [default to undefined]
**fallbackPassword** | **string** | Basic auth password. | [optional] [default to undefined]
**tag** | **string** | A custom string that will be sent with this and all future callbacks unless overwritten by a future &#x60;tag&#x60; attribute or [&#x60;&lt;Tag&gt;&#x60;](/docs/voice/bxml/tag) verb, or cleared.  May be cleared by setting &#x60;tag&#x3D;\&quot;\&quot;&#x60;.  Max length 256 characters.  Not allowed if &#x60;state&#x60; is &#x60;completed&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { UpdateCall } from 'bandwidth-sdk';

const instance: UpdateCall = {
    state,
    redirectUrl,
    redirectMethod,
    username,
    password,
    redirectFallbackUrl,
    redirectFallbackMethod,
    fallbackUsername,
    fallbackPassword,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

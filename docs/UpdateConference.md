# UpdateConference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ConferenceStateEnum**](ConferenceStateEnum.md) |  | [optional] [default to undefined]
**redirectUrl** | **string** | The URL to send the [conferenceRedirect](/docs/voice/webhooks/conferenceRedirect) event which will provide new BXML. Not allowed if &#x60;state&#x60; is &#x60;completed&#x60;, but required if &#x60;state&#x60; is &#x60;active&#x60;. | [optional] [default to undefined]
**redirectMethod** | [**RedirectMethodEnum**](RedirectMethodEnum.md) |  | [optional] [default to undefined]
**username** | **string** | Basic auth username. | [optional] [default to undefined]
**password** | **string** | Basic auth password. | [optional] [default to undefined]
**redirectFallbackUrl** | **string** | A fallback url which, if provided, will be used to retry the &#x60;conferenceRedirect&#x60; webhook delivery in case &#x60;redirectUrl&#x60; fails to respond.  Not allowed if &#x60;state&#x60; is &#x60;completed&#x60;. | [optional] [default to undefined]
**redirectFallbackMethod** | [**RedirectMethodEnum**](RedirectMethodEnum.md) |  | [optional] [default to undefined]
**fallbackUsername** | **string** | Basic auth username. | [optional] [default to undefined]
**fallbackPassword** | **string** | Basic auth password. | [optional] [default to undefined]

## Example

```typescript
import { UpdateConference } from 'bandwidth-sdk';

const instance: UpdateConference = {
    status,
    redirectUrl,
    redirectMethod,
    username,
    password,
    redirectFallbackUrl,
    redirectFallbackMethod,
    fallbackUsername,
    fallbackPassword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

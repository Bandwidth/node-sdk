# CreateCall


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | The destination to call (must be an E.164 formatted number (e.g. &#x60;+15555551212&#x60;) or a SIP URI (e.g. &#x60;sip:user@server.example&#x60;)). | [default to undefined]
**from** | **string** | A Bandwidth phone number on your account the call should come from (must be in E.164 format, like &#x60;+15555551212&#x60;) even if &#x60;privacy&#x60; is set to true. | [default to undefined]
**privacy** | **boolean** | Hide the calling number. The &#x60;displayName&#x60; field can be used to customize the displayed name. | [optional] [default to undefined]
**displayName** | **string** | The caller display name to use when the call is created.  May not exceed 256 characters nor contain control characters such as new lines. If &#x60;privacy&#x60; is true, only the following values are valid: &#x60;Restricted&#x60;, &#x60;Anonymous&#x60;, &#x60;Private&#x60;, or &#x60;Unavailable&#x60;. | [optional] [default to undefined]
**uui** | **string** | A comma-separated list of \&#39;User-To-User\&#39; headers to be sent in the INVITE when calling a SIP URI. Each value must end with an \&#39;encoding\&#39; parameter as described in &lt;a href&#x3D;\&#39;https://tools.ietf.org/html/rfc7433\&#39;&gt;RFC 7433&lt;/a&gt;. Only \&#39;jwt\&#39;, \&#39;base64\&#39; and \&#39;hex\&#39; encodings are allowed. The entire value cannot exceed 350 characters, including parameters and separators. | [optional] [default to undefined]
**applicationId** | **string** | The id of the application associated with the &#x60;from&#x60; number. | [default to undefined]
**answerUrl** | **string** | The full URL to send the &lt;a href&#x3D;\&#39;/docs/voice/webhooks/answer\&#39;&gt;Answer&lt;/a&gt; event to when the called party answers. This endpoint should return the first &lt;a href&#x3D;\&#39;/docs/voice/bxml\&#39;&gt;BXML document&lt;/a&gt; to be executed in the call.  Must use &#x60;https&#x60; if specifying &#x60;username&#x60; and &#x60;password&#x60;. | [default to undefined]
**answerMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [optional] [default to undefined]
**username** | **string** | Basic auth username. | [optional] [default to undefined]
**password** | **string** | Basic auth password. | [optional] [default to undefined]
**answerFallbackUrl** | **string** | A fallback url which, if provided, will be used to retry the &#x60;answer&#x60; webhook delivery in case &#x60;answerUrl&#x60; fails to respond  Must use &#x60;https&#x60; if specifying &#x60;fallbackUsername&#x60; and &#x60;fallbackPassword&#x60;. | [optional] [default to undefined]
**answerFallbackMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [optional] [default to undefined]
**fallbackUsername** | **string** | Basic auth username. | [optional] [default to undefined]
**fallbackPassword** | **string** | Basic auth password. | [optional] [default to undefined]
**disconnectUrl** | **string** | The URL to send the &lt;a href&#x3D;\&#39;/docs/voice/webhooks/disconnect\&#39;&gt;Disconnect&lt;/a&gt; event to when the call ends. This event does not expect a BXML response. | [optional] [default to undefined]
**disconnectMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [optional] [default to undefined]
**callTimeout** | **number** | The timeout (in seconds) for the callee to answer the call after it starts ringing. If the call does not start ringing within 30s, the call will be cancelled regardless of this value.  Can be any numeric value (including decimals) between 1 and 300. | [optional] [default to 30]
**callbackTimeout** | **number** | This is the timeout (in seconds) to use when delivering webhooks for the call. Can be any numeric value (including decimals) between 1 and 25. | [optional] [default to 15]
**machineDetection** | [**MachineDetectionConfiguration**](MachineDetectionConfiguration.md) |  | [optional] [default to undefined]
**priority** | **number** | The priority of this call over other calls from your account. For example, if during a call your application needs to place a new call and bridge it with the current call, you might want to create the call with priority 1 so that it will be the next call picked off your queue, ahead of other less time sensitive calls. A lower value means higher priority, so a priority 1 call takes precedence over a priority 2 call. | [optional] [default to 5]
**tag** | **string** | A custom string that will be sent with all webhooks for this call unless overwritten by a future &lt;a href&#x3D;\&#39;/docs/voice/bxml/tag\&#39;&gt;&#x60;&lt;Tag&gt;&#x60;&lt;/a&gt; verb or &#x60;tag&#x60; attribute on another verb, or cleared.  May be cleared by setting &#x60;tag&#x3D;\&quot;\&quot;&#x60;  Max length 256 characters. | [optional] [default to undefined]

## Example

```typescript
import { CreateCall } from 'bandwidth-sdk';

const instance: CreateCall = {
    to,
    from,
    privacy,
    displayName,
    uui,
    applicationId,
    answerUrl,
    answerMethod,
    username,
    password,
    answerFallbackUrl,
    answerFallbackMethod,
    fallbackUsername,
    fallbackPassword,
    disconnectUrl,
    disconnectMethod,
    callTimeout,
    callbackTimeout,
    machineDetection,
    priority,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

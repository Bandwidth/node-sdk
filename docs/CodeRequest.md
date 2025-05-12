# CodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | The phone number to send the mfa code to. | [default to undefined]
**from** | **string** | The application phone number, the sender of the mfa code. | [default to undefined]
**applicationId** | **string** | The application unique ID, obtained from Bandwidth. | [default to undefined]
**scope** | **string** | An optional field to denote what scope or action the mfa code is addressing.  If not supplied, defaults to \&quot;2FA\&quot;. | [optional] [default to undefined]
**message** | **string** | The message format of the mfa code.  There are three values that the system will replace \&quot;{CODE}\&quot;, \&quot;{NAME}\&quot;, \&quot;{SCOPE}\&quot;.  The \&quot;{SCOPE}\&quot; and \&quot;{NAME} value template are optional, while \&quot;{CODE}\&quot; must be supplied.  As the name would suggest, code will be replace with the actual mfa code.  Name is replaced with the application name, configured during provisioning of mfa.  The scope value is the same value sent during the call and partitioned by the server. | [default to undefined]
**digits** | **number** | The number of digits for your mfa code.  The valid number ranges from 2 to 8, inclusively. | [default to undefined]

## Example

```typescript
import { CodeRequest } from 'bandwidth-sdk';

const instance: CodeRequest = {
    to,
    from,
    applicationId,
    scope,
    message,
    digits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

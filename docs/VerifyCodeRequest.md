# VerifyCodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | The phone number to send the mfa code to. | [default to undefined]
**scope** | **string** | An optional field to denote what scope or action the mfa code is addressing.  If not supplied, defaults to \&quot;2FA\&quot;. | [optional] [default to undefined]
**expirationTimeInMinutes** | **number** | The time period, in minutes, to validate the mfa code.  By setting this to 3 minutes, it will mean any code generated within the last 3 minutes are still valid.  The valid range for expiration time is between 0 and 15 minutes, exclusively and inclusively, respectively. | [default to undefined]
**code** | **string** | The generated mfa code to check if valid. | [default to undefined]

## Example

```typescript
import { VerifyCodeRequest } from 'bandwidth-sdk';

const instance: VerifyCodeRequest = {
    to,
    scope,
    expirationTimeInMinutes,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

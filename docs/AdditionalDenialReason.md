# AdditionalDenialReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statusCode** | **number** | Reason code for denial. | [default to undefined]
**reason** | **string** | Explanation for why a verification request was declined. | [default to undefined]
**resubmitAllowed** | **boolean** | Whether a Toll-Free Verification request qualifies for resubmission via PUT. | [default to undefined]

## Example

```typescript
import { AdditionalDenialReason } from 'bandwidth-sdk';

const instance: AdditionalDenialReason = {
    statusCode,
    reason,
    resubmitAllowed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

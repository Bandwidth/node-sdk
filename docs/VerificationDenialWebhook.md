# VerificationDenialWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** | User\&#39;s account ID. | [optional] [default to undefined]
**additionalDenialReasons** | [**Array&lt;AdditionalDenialReason&gt;**](AdditionalDenialReason.md) | An optional list of denial reasons in addition to declineReasonDescription when multiple reasons apply. | [optional] [default to undefined]
**declineReasonDescription** | **string** | Explanation for why a verification request was declined. | [optional] [default to undefined]
**denialStatusCode** | **number** | Reason code for denial. | [optional] [default to undefined]
**internalTicketNumber** | **string** | Unique identifier (UUID) generated by Bandwidth to assist in tracking the verification status of a toll-free number. | [optional] [default to undefined]
**phoneNumber** | **string** | Toll-free telephone number in E.164 format. | [optional] [default to undefined]
**resubmitAllowed** | **boolean** | Whether a Toll-Free Verification request qualifies for resubmission via PUT. | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to 'UNVERIFIED']
**blocked** | **boolean** | Whether a Toll-Free Verification is blocked. This attribute will only be defined when the number is blocked. | [optional] [default to undefined]
**blockedReason** | **string** | The reason why the Toll-Free Verification is blocked. This attribute will only be defined when the number is blocked. | [optional] [default to undefined]

## Example

```typescript
import { VerificationDenialWebhook } from 'bandwidth-sdk';

const instance: VerificationDenialWebhook = {
    accountId,
    additionalDenialReasons,
    declineReasonDescription,
    denialStatusCode,
    internalTicketNumber,
    phoneNumber,
    resubmitAllowed,
    status,
    blocked,
    blockedReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

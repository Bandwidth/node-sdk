# VerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessAddress** | [**Address**](Address.md) |  | [default to undefined]
**businessContact** | [**Contact**](Contact.md) |  | [default to undefined]
**messageVolume** | **number** | Estimated monthly volume of messages from the toll-free number. | [default to undefined]
**phoneNumbers** | **Array&lt;string&gt;** |  | [default to undefined]
**useCase** | **string** | The category of the use case. | [default to undefined]
**useCaseSummary** | **string** | A general idea of the use case and customer. | [default to undefined]
**productionMessageContent** | **string** | Example of message content. | [default to undefined]
**optInWorkflow** | [**OptInWorkflow**](OptInWorkflow.md) |  | [default to undefined]
**additionalInformation** | **string** | Any additional information. | [optional] [default to undefined]
**isvReseller** | **string** | ISV name. | [optional] [default to undefined]
**privacyPolicyUrl** | **string** | The Toll-Free Verification request privacy policy URL. | [optional] [default to undefined]
**termsAndConditionsUrl** | **string** | The Toll-Free Verification request terms and conditions policy URL. | [optional] [default to undefined]
**businessDba** | **string** | The company \&#39;Doing Business As\&#39;. | [optional] [default to undefined]

## Example

```typescript
import { VerificationRequest } from 'bandwidth-sdk';

const instance: VerificationRequest = {
    businessAddress,
    businessContact,
    messageVolume,
    phoneNumbers,
    useCase,
    useCaseSummary,
    productionMessageContent,
    optInWorkflow,
    additionalInformation,
    isvReseller,
    privacyPolicyUrl,
    termsAndConditionsUrl,
    businessDba,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

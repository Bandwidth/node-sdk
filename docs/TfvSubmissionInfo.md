# TfvSubmissionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessAddress** | [**Address**](Address.md) |  | [optional] [default to undefined]
**businessContact** | [**Contact**](Contact.md) |  | [optional] [default to undefined]
**messageVolume** | **number** | Estimated monthly volume of messages from the toll-free number. | [optional] [default to undefined]
**useCase** | **string** | The category of the use case. | [optional] [default to undefined]
**useCaseSummary** | **string** | A general idea of the use case and customer. | [optional] [default to undefined]
**productionMessageContent** | **string** | Example of message content. | [optional] [default to undefined]
**optInWorkflow** | [**OptInWorkflow**](OptInWorkflow.md) |  | [optional] [default to undefined]
**additionalInformation** | **string** | Any additional information. | [optional] [default to undefined]
**isvReseller** | **string** | ISV name. | [optional] [default to undefined]
**privacyPolicyUrl** | **string** | The Toll-Free Verification request privacy policy URL. (Not Available Until 5/28/2025) | [optional] [default to undefined]
**termsAndConditionsUrl** | **string** | The Toll-Free Verification request terms and conditions policy URL. (Not Available Until 5/28/2025) | [optional] [default to undefined]
**businessDBA** | **string** | The company \&#39;Doing Business As\&#39;. (Not Available Until 5/28/2025) | [optional] [default to undefined]

## Example

```typescript
import { TfvSubmissionInfo } from 'bandwidth-sdk';

const instance: TfvSubmissionInfo = {
    businessAddress,
    businessContact,
    messageVolume,
    useCase,
    useCaseSummary,
    productionMessageContent,
    optInWorkflow,
    additionalInformation,
    isvReseller,
    privacyPolicyUrl,
    termsAndConditionsUrl,
    businessDBA,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

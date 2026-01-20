# VerificationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessAddress** | [**Address**](Address.md) |  | [default to undefined]
**businessContact** | [**Contact**](Contact.md) |  | [default to undefined]
**messageVolume** | **number** | Estimated monthly volume of messages from the toll-free number. | [default to undefined]
**useCase** | **string** | The category of the use case. | [default to undefined]
**useCaseSummary** | **string** | A general idea of the use case and customer. | [default to undefined]
**productionMessageContent** | **string** | Example of message content. | [default to undefined]
**optInWorkflow** | [**OptInWorkflow**](OptInWorkflow.md) |  | [default to undefined]
**additionalInformation** | **string** | Any additional information. | [optional] [default to undefined]
**isvReseller** | **string** | ISV name. | [optional] [default to undefined]
**privacyPolicyUrl** | **string** | The Toll-Free Verification request privacy policy URL. | [optional] [default to undefined]
**termsAndConditionsUrl** | **string** | The Toll-Free Verification request terms and conditions policy URL. | [optional] [default to undefined]
**businessDba** | **string** | The company \&#39;Doing Business As\&#39;. | [optional] [default to undefined]
**businessRegistrationNumber** | **string** | US Federal Tax ID Number (EIN) or Canada Business Number (CBN). Optional until early 2026. If a value is provided for this field, a value must be provided for &#x60;businessRegistrationType&#x60; and &#x60;businessEntityType&#x60;. Available starting October 1st, 2025. | [optional] [default to undefined]
**businessRegistrationType** | [**BusinessRegistrationTypeEnum**](BusinessRegistrationTypeEnum.md) |  | [optional] [default to undefined]
**businessEntityType** | [**BusinessEntityTypeEnum**](BusinessEntityTypeEnum.md) |  | [optional] [default to undefined]
**helpMessageResponse** | **string** | A message that gets sent to users requesting help. | [optional] [default to undefined]
**ageGatedContent** | **boolean** | Indicates whether the content is age-gated. | [optional] [default to undefined]
**cvToken** | **string** | The token provided by Campaign Verify to validate your political use case. Only required for 527 political organizations. If you are not a 527 political organization, this field should be omitted. If you pass an empty string, it will be passed along and potentially rejected. | [optional] [default to undefined]

## Example

```typescript
import { VerificationUpdateRequest } from 'bandwidth-sdk';

const instance: VerificationUpdateRequest = {
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
    businessDba,
    businessRegistrationNumber,
    businessRegistrationType,
    businessEntityType,
    helpMessageResponse,
    ageGatedContent,
    cvToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

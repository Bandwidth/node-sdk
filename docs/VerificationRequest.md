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
**businessRegistrationNumber** | **string** | Government-issued business identifying number.  **Note:** If this field is provided, it is strongly recommended to also provide &#x60;businessRegistrationType&#x60; and &#x60;businessRegistrationIssuingCountry&#x60;. Submissions missing these fields have a high likelihood of rejection.  | [optional] [default to undefined]
**businessRegistrationType** | [**BusinessRegistrationTypeEnum**](BusinessRegistrationTypeEnum.md) |  | [optional] [default to undefined]
**businessRegistrationIssuingCountry** | **string** | The country issuing the business registration in ISO-3166-1 alpha-3 format. Alpha-2 country codes are acceptable, but the application will convert them to alpha-3 when received, so alpha-3 is encouraged.  **Note:** If this field is omitted but &#x60;businessRegistrationType&#x60; is provided, the application will attempt to infer the country based on the registration type. However, if the application cannot confidently infer the country, the submission may be rejected. To ensure the highest likelihood of acceptance, it is recommended to provide both &#x60;businessRegistrationType&#x60; and &#x60;businessRegistrationIssuingCountry&#x60;.  | Registration Type     | Supported Countries                | |----------------------|------------------------------------| | EIN                  | USA                                | | CBN                  | CAN                                | | NEQ                  | CAN                                | | PROVINCIAL_NUMBER    | CAN                                | | CRN                  | GBR, HKG                           | | VAT                  | GBR, IRL, BRA, NLD                 | | ACN                  | AUS                                | | ABN                  | AUS                                | | BRN                  | HKG                                | | SIREN                | FRA                                | | SIRET                | FRA                                | | NZBN                 | NZL                                | | UST_IDNR             | DEU                                | | CIF                  | ESP                                | | NIF                  | ESP                                | | CNPJ                 | BRA                                | | UID                  | CHE                                | | OTHER                | Must Provide Country Code          | | [optional] [default to undefined]
**businessEntityType** | [**BusinessEntityTypeEnum**](BusinessEntityTypeEnum.md) |  | [default to undefined]
**helpMessageResponse** | **string** | A message that gets sent to users requesting help. | [optional] [default to undefined]
**ageGatedContent** | **boolean** | Indicates whether the content is age-gated. | [optional] [default to undefined]
**cvToken** | **string** | The token provided by Campaign Verify to validate your political use case. Only required for 527 political organizations. If you are not a 527 political organization, this field should be omitted. Supplying an empty string will likely result in rejection. | [optional] [default to undefined]

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
    businessRegistrationNumber,
    businessRegistrationType,
    businessRegistrationIssuingCountry,
    businessEntityType,
    helpMessageResponse,
    ageGatedContent,
    cvToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

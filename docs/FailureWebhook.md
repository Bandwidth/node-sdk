# FailureWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** | User\&#39;s account ID. | [optional] [default to undefined]
**phoneNumber** | **string** | Toll-free telephone number in E.164 format. | [optional] [default to undefined]
**errorCode** | **string** | An error code indicating what error was encountered. This code can be interpreted as an HTTP status code in regards to the error that was encountered. | [optional] [default to undefined]
**errorMessage** | **string** | A description of the error that was encountered. | [optional] [default to undefined]
**errors** | **Array&lt;string&gt;** | Details of the errors that were encountered when processing the request. | [optional] [default to undefined]
**internalTicketNumber** | **string** | Unique identifier (UUID) generated by Bandwidth to assist in tracking the verification status of a toll-free number. | [optional] [default to undefined]

## Example

```typescript
import { FailureWebhook } from 'bandwidth-sdk';

const instance: FailureWebhook = {
    accountId,
    phoneNumber,
    errorCode,
    errorMessage,
    errors,
    internalTicketNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

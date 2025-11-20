# GetAsyncBulkLookupResponseData

The phone number lookup response data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** | The phone number lookup request ID from Bandwidth. | [optional] [default to undefined]
**status** | [**InProgressLookupStatusEnum**](InProgressLookupStatusEnum.md) |  | [optional] [default to undefined]
**results** | [**Array&lt;LookupResult&gt;**](LookupResult.md) | The carrier information results for the specified telephone number. | [optional] [default to undefined]

## Example

```typescript
import { GetAsyncBulkLookupResponseData } from 'bandwidth-sdk';

const instance: GetAsyncBulkLookupResponseData = {
    requestId,
    status,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

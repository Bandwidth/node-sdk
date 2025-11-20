# CreateAsyncBulkLookupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Array&lt;LinkSchema&gt;**](LinkSchema.md) | Links for pagination (if applicable) | [optional] [default to undefined]
**data** | [**CreateAsyncBulkLookupResponseData**](CreateAsyncBulkLookupResponseData.md) |  | [optional] [default to undefined]
**errors** | [**Array&lt;LookupErrorSchema&gt;**](LookupErrorSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateAsyncBulkLookupResponse } from 'bandwidth-sdk';

const instance: CreateAsyncBulkLookupResponse = {
    links,
    data,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

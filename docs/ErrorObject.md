# ErrorObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | A concise summary of the error used for categorization. | [default to undefined]
**description** | **string** | A detailed explanation of the error. | [default to undefined]
**source** | [**ErrorSource**](ErrorSource.md) |  | [default to undefined]

## Example

```typescript
import { ErrorObject } from 'bandwidth-sdk';

const instance: ErrorObject = {
    type,
    description,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# LookupErrorSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Validation error code | [default to undefined]
**description** | **string** | Description of validation error | [default to undefined]
**type** | **string** | Type of validation error | [default to undefined]
**meta** | [**LookupErrorSchemaMeta**](LookupErrorSchemaMeta.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LookupErrorSchema } from 'bandwidth-sdk';

const instance: LookupErrorSchema = {
    code,
    description,
    type,
    meta,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# LookupErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Array&lt;LinkSchema&gt;**](LinkSchema.md) |  | [optional] [default to undefined]
**data** | **object** | The phone number lookup response data | [optional] [default to undefined]
**errors** | [**Array&lt;LookupErrorSchema&gt;**](LookupErrorSchema.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LookupErrorResponse } from 'bandwidth-sdk';

const instance: LookupErrorResponse = {
    links,
    data,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

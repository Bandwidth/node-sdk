# BrtcError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A unique identifier for the error. | [optional] [default to undefined]
**type** | **string** | The type of error. | [default to undefined]
**description** | **string** | A description of the error. | [default to undefined]
**code** | **string** | A code that uniquely identifies the error. | [optional] [default to undefined]
**source** | [**BrtcErrorSource**](BrtcErrorSource.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BrtcError } from 'bandwidth-sdk';

const instance: BrtcError = {
    id,
    type,
    description,
    code,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

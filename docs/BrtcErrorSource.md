# BrtcErrorSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **string** | The URI parameter that caused the error. | [optional] [default to undefined]
**field** | **string** | The request body field that caused the error. | [optional] [default to undefined]
**header** | **string** | The header that caused the error. | [optional] [default to undefined]
**reference** | **string** | The resource ID or path to the resource (or non-existent resource) causing the error. | [optional] [default to undefined]

## Example

```typescript
import { BrtcErrorSource } from 'bandwidth-sdk';

const instance: BrtcErrorSource = {
    parameter,
    field,
    header,
    reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

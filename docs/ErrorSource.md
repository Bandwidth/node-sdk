# ErrorSource

Specifies relevant sources of the error, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **string** | The relevant URI query parameter causing the error | [optional] [default to undefined]
**field** | **string** | The request body field that led to the error | [optional] [default to undefined]
**header** | **string** | The header field that contributed to the error | [optional] [default to undefined]
**reference** | **string** | A resource ID or path linked to the error | [optional] [default to undefined]

## Example

```typescript
import { ErrorSource } from 'bandwidth-sdk';

const instance: ErrorSource = {
    parameter,
    field,
    header,
    reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

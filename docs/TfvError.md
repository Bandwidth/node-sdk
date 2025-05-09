# TfvError

A generic error object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**errors** | **object** | Each key of this errors object refers to a field of the submitted object (using dot notation for nested objects), with the field being a key to an array of one or more errors for that field. | [optional] [default to undefined]

## Example

```typescript
import { TfvError } from 'bandwidth-sdk';

const instance: TfvError = {
    type,
    description,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

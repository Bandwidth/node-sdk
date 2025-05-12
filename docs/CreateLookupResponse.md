# CreateLookupResponse

The request has been accepted for processing but not yet finished and in a terminal state (COMPLETE, PARTIAL_COMPLETE, or FAILED).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** | The phone number lookup request ID from Bandwidth. | [optional] [default to undefined]
**status** | [**LookupStatusEnum**](LookupStatusEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateLookupResponse } from 'bandwidth-sdk';

const instance: CreateLookupResponse = {
    requestId,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

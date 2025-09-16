# StirShaken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verstat** | **string** | (optional) The verification status indicating whether the verification was successful or not. Possible values are TN-Validation-Passed and TN-Validation-Failed. | [optional] [default to undefined]
**attestationIndicator** | **string** | (optional) The attestation level verified by Bandwidth. Possible values are A (full), B (partial) or C (gateway). | [optional] [default to undefined]
**originatingId** | **string** | (optional) A unique origination identifier. | [optional] [default to undefined]

## Example

```typescript
import { StirShaken } from 'bandwidth-sdk';

const instance: StirShaken = {
    verstat,
    attestationIndicator,
    originatingId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

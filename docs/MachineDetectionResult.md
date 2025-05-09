# MachineDetectionResult

(optional) if machine detection was requested in sync mode, the result will be specified here. Possible values are the same as the async counterpart: Machine Detection Complete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **string** | Possible values are answering-machine, human, silence, timeout, or error. | [optional] [default to undefined]
**duration** | **string** | The amount of time it took to determine the result. | [optional] [default to undefined]

## Example

```typescript
import { MachineDetectionResult } from 'bandwidth-sdk';

const instance: MachineDetectionResult = {
    value,
    duration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

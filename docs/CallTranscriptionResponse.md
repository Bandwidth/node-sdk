# CallTranscriptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** | The user account associated with the call. | [optional] [default to undefined]
**callId** | **string** | The call id associated with the event. | [optional] [default to undefined]
**transcriptionId** | **string** | The programmable voice API transcription ID. | [optional] [default to undefined]
**tracks** | [**Array&lt;CallTranscription&gt;**](CallTranscription.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CallTranscriptionResponse } from 'bandwidth-sdk';

const instance: CallTranscriptionResponse = {
    accountId,
    callId,
    transcriptionId,
    tracks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

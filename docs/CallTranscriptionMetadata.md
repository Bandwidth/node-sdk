# CallTranscriptionMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transcriptionId** | **string** | The programmable voice API transcription ID. | [optional] [default to undefined]
**transcriptionName** | **string** | The programmable voice API transcription name. This name could be provided by the user when creating the transcription. | [optional] [default to undefined]
**transcriptionUrl** | **string** | A URL that may be used to retrieve the transcription itself. This points to the [Get Call Transcription](/apis/voice/#operation/getCallTranscription) endpoint. | [optional] [default to undefined]

## Example

```typescript
import { CallTranscriptionMetadata } from 'bandwidth-sdk';

const instance: CallTranscriptionMetadata = {
    transcriptionId,
    transcriptionName,
    transcriptionUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

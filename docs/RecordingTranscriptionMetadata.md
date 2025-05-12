# RecordingTranscriptionMetadata

If the recording was transcribed, metadata about the transcription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique transcription ID | [optional] [default to undefined]
**status** | **string** | The current status of the process. For recording, current possible values are \&#39;processing\&#39;, \&#39;partial\&#39;, \&#39;complete\&#39;, \&#39;deleted\&#39;, and \&#39;error\&#39;. For transcriptions, current possible values are \&#39;none\&#39;, \&#39;processing\&#39;, \&#39;available\&#39;, \&#39;error\&#39;, \&#39;timeout\&#39;, \&#39;file-size-too-big\&#39;, and \&#39;file-size-too-small\&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] [default to undefined]
**completedTime** | **string** | The time that the transcription was completed | [optional] [default to undefined]
**url** | **string** | The URL of the [transcription](#operation/getCallTranscription) | [optional] [default to undefined]

## Example

```typescript
import { RecordingTranscriptionMetadata } from 'bandwidth-sdk';

const instance: RecordingTranscriptionMetadata = {
    id,
    status,
    completedTime,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

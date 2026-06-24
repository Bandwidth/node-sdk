# RecordingTranscriptionClip


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speaker** | **number** | Zero-based index identifying the speaker. | [optional] [default to undefined]
**text** | **string** | The transcribed text of this clip. | [optional] [default to undefined]
**confidence** | **number** | How confident the transcription engine was in transcribing this clip (from &#x60;0.0&#x60; to &#x60;1.0&#x60;). | [optional] [default to undefined]
**startTimeSeconds** | **number** | The start time of this clip within the recording, in seconds. | [optional] [default to undefined]
**endTimeSeconds** | **number** | The end time of this clip within the recording, in seconds. | [optional] [default to undefined]

## Example

```typescript
import { RecordingTranscriptionClip } from 'bandwidth-sdk';

const instance: RecordingTranscriptionClip = {
    speaker,
    text,
    confidence,
    startTimeSeconds,
    endTimeSeconds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

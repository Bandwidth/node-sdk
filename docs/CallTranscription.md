# CallTranscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detectedLanguage** | [**CallTranscriptionDetectedLanguageEnum**](CallTranscriptionDetectedLanguageEnum.md) |  | [optional] [default to undefined]
**track** | [**CallTranscriptionTrackEnum**](CallTranscriptionTrackEnum.md) |  | [optional] [default to undefined]
**transcript** | **string** | The transcription itself. | [optional] [default to undefined]
**confidence** | **number** | How confident the transcription engine was in transcribing the associated audio (from &#x60;0&#x60; to &#x60;1&#x60;). | [optional] [default to undefined]

## Example

```typescript
import { CallTranscription } from 'bandwidth-sdk';

const instance: CallTranscription = {
    detectedLanguage,
    track,
    transcript,
    confidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

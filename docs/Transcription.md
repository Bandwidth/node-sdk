# Transcription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**speaker** | **number** | Zero-based index identifying the speaker. | [optional] [default to undefined]
**text** | **string** | The transcribed text | [optional] [default to undefined]
**confidence** | **number** | The confidence on the recognized content, ranging from &#x60;0.0&#x60; to &#x60;1.0&#x60; with &#x60;1.0&#x60; being the highest confidence. | [optional] [default to undefined]

## Example

```typescript
import { Transcription } from 'bandwidth-sdk';

const instance: Transcription = {
    speaker,
    text,
    confidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

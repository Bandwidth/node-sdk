# CallRecordingMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **string** | The id of the application associated with the call. | [optional] [default to undefined]
**accountId** | **string** | The user account associated with the call. | [optional] [default to undefined]
**callId** | **string** | The call id associated with the event. | [optional] [default to undefined]
**parentCallId** | **string** | (optional) If the event is related to the B leg of a &lt;Transfer&gt;, the call id of the original call leg that executed the &lt;Transfer&gt;. Otherwise, this field will not be present. | [optional] [default to undefined]
**recordingId** | **string** | The unique ID of this recording | [optional] [default to undefined]
**to** | **string** | The phone number that received the call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**from** | **string** | The provided identifier of the caller. Must be a phone number in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**transferCallerId** | **string** | The phone number used as the from field of the B-leg call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**transferTo** | **string** | The phone number used as the to field of the B-leg call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**duration** | **string** | The duration of the recording in ISO-8601 format | [optional] [default to undefined]
**direction** | [**CallDirectionEnum**](CallDirectionEnum.md) |  | [optional] [default to undefined]
**channels** | **number** | Always &#x60;1&#x60; for conference recordings; multi-channel recordings are not supported on conferences. | [optional] [default to undefined]
**startTime** | **string** | Time the call was started, in ISO 8601 format. | [optional] [default to undefined]
**endTime** | **string** | The time that the recording ended in ISO-8601 format | [optional] [default to undefined]
**fileFormat** | [**FileFormatEnum**](FileFormatEnum.md) |  | [optional] [default to undefined]
**status** | **string** | The current status of the process. For recording, current possible values are \&#39;processing\&#39;, \&#39;partial\&#39;, \&#39;complete\&#39;, \&#39;deleted\&#39;, and \&#39;error\&#39;. For transcriptions, current possible values are \&#39;none\&#39;, \&#39;processing\&#39;, \&#39;available\&#39;, \&#39;error\&#39;, \&#39;timeout\&#39;, \&#39;file-size-too-big\&#39;, and \&#39;file-size-too-small\&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] [default to undefined]
**mediaUrl** | **string** | The URL that can be used to download the recording. Only present if the recording is finished and may be downloaded. | [optional] [default to undefined]
**transcription** | [**RecordingTranscriptionMetadata**](RecordingTranscriptionMetadata.md) |  | [optional] [default to undefined]
**recordingName** | **string** | A name to identify this recording. | [optional] [default to undefined]

## Example

```typescript
import { CallRecordingMetadata } from 'bandwidth-sdk';

const instance: CallRecordingMetadata = {
    applicationId,
    accountId,
    callId,
    parentCallId,
    recordingId,
    to,
    from,
    transferCallerId,
    transferTo,
    duration,
    direction,
    channels,
    startTime,
    endTime,
    fileFormat,
    status,
    mediaUrl,
    transcription,
    recordingName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

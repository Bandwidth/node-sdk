# ConferenceRecordingMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** | The user account associated with the call. | [optional] [default to undefined]
**conferenceId** | **string** | The unique, Bandwidth-generated ID of the conference that was recorded | [optional] [default to undefined]
**name** | **string** | The user-specified name of the conference that was recorded | [optional] [default to undefined]
**recordingId** | **string** | The unique ID of this recording | [optional] [default to undefined]
**duration** | **string** | The duration of the recording in ISO-8601 format | [optional] [default to undefined]
**channels** | **number** | Always &#x60;1&#x60; for conference recordings; multi-channel recordings are not supported on conferences. | [optional] [default to undefined]
**startTime** | **string** | Time the call was started, in ISO 8601 format. | [optional] [default to undefined]
**endTime** | **string** | The time that the recording ended in ISO-8601 format | [optional] [default to undefined]
**fileFormat** | [**FileFormatEnum**](FileFormatEnum.md) |  | [optional] [default to undefined]
**status** | **string** | The current status of the process. For recording, current possible values are \&#39;processing\&#39;, \&#39;partial\&#39;, \&#39;complete\&#39;, \&#39;deleted\&#39;, and \&#39;error\&#39;. For transcriptions, current possible values are \&#39;none\&#39;, \&#39;processing\&#39;, \&#39;available\&#39;, \&#39;error\&#39;, \&#39;timeout\&#39;, \&#39;file-size-too-big\&#39;, and \&#39;file-size-too-small\&#39;. Additional states may be added in the future, so your application must be tolerant of unknown values. | [optional] [default to undefined]
**mediaUrl** | **string** | The URL that can be used to download the recording. Only present if the recording is finished and may be downloaded. | [optional] [default to undefined]
**recordingName** | **string** | A name to identify this recording. | [optional] [default to undefined]

## Example

```typescript
import { ConferenceRecordingMetadata } from 'bandwidth-sdk';

const instance: ConferenceRecordingMetadata = {
    accountId,
    conferenceId,
    name,
    recordingId,
    duration,
    channels,
    startTime,
    endTime,
    fileFormat,
    status,
    mediaUrl,
    recordingName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

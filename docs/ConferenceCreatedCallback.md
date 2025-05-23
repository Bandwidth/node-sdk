# ConferenceCreatedCallback

The Conference Created event is fired whenever a new conference that specified a callbackUrl is created. The response may be either empty or a BXML document. Only the following verbs are valid for conferences: PlayAudio, SpeakSentence, StartRecording, StopRecording, PauseRecording, ResumeRecording. Audio verbs will be heard by all members of the conference. Recordings capture audio from all members who are not muted or on hold, as well as any audio verbs that are played into the conference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | **string** | The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect. | [optional] [default to undefined]
**eventTime** | **string** | The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution. | [optional] [default to undefined]
**conferenceId** | **string** | The unique, Bandwidth-generated ID of the conference that was recorded | [optional] [default to undefined]
**name** | **string** | The user-specified name of the conference that was recorded | [optional] [default to undefined]
**tag** | **string** | (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present. | [optional] [default to undefined]

## Example

```typescript
import { ConferenceCreatedCallback } from 'bandwidth-sdk';

const instance: ConferenceCreatedCallback = {
    eventType,
    eventTime,
    conferenceId,
    name,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

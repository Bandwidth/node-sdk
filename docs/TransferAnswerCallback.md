# TransferAnswerCallback

When processing a <Transfer> verb, this event is sent when a called party (B-leg) answers. The event is sent to the endpoint specified in the transferAnswerUrl attribute of the <PhoneNumber> tag that answered. BXML returned by this callback will be executed for the called party only. After all BXML has been executed, the called party will be bridged to the original call. Most BXML verbs are allowed in response to a transferAnswer event, but some are not allowed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | **string** | The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect. | [optional] [default to undefined]
**eventTime** | **string** | The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution. | [optional] [default to undefined]
**accountId** | **string** | The user account associated with the call. | [optional] [default to undefined]
**applicationId** | **string** | The id of the application associated with the call. | [optional] [default to undefined]
**from** | **string** | The provided identifier of the caller. Must be a phone number in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**to** | **string** | The phone number that received the call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**direction** | [**CallDirectionEnum**](CallDirectionEnum.md) |  | [optional] [default to undefined]
**callId** | **string** | The call id associated with the event. | [optional] [default to undefined]
**callUrl** | **string** | The URL of the call associated with the event. | [optional] [default to undefined]
**enqueuedTime** | **string** | (optional) If call queueing is enabled and this is an outbound call, time the call was queued, in ISO 8601 format. | [optional] [default to undefined]
**startTime** | **string** | Time the call was started, in ISO 8601 format. | [optional] [default to undefined]
**answerTime** | **string** | Time the call was answered, in ISO 8601 format. | [optional] [default to undefined]
**tag** | **string** | (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present. | [optional] [default to undefined]
**transferCallerId** | **string** | The phone number used as the from field of the B-leg call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]
**transferTo** | **string** | The phone number used as the to field of the B-leg call, in E.164 format (e.g. +15555555555). | [optional] [default to undefined]

## Example

```typescript
import { TransferAnswerCallback } from 'bandwidth-sdk';

const instance: TransferAnswerCallback = {
    eventType,
    eventTime,
    accountId,
    applicationId,
    from,
    to,
    direction,
    callId,
    callUrl,
    enqueuedTime,
    startTime,
    answerTime,
    tag,
    transferCallerId,
    transferTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

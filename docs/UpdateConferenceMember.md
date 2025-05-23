# UpdateConferenceMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mute** | **boolean** | Whether or not this member is currently muted. Members who are muted are still able to hear other participants.  Updates this member\&#39;s mute status. Has no effect if omitted. | [optional] [default to undefined]
**hold** | **boolean** | Whether or not this member is currently on hold. Members who are on hold are not able to hear or speak in the conference.  Updates this member\&#39;s hold status. Has no effect if omitted. | [optional] [default to undefined]
**callIdsToCoach** | **Array&lt;string&gt;** | If this member had a value set for &#x60;callIdsToCoach&#x60; in its [Conference](/docs/voice/bxml/conference) verb or this list was added with a previous PUT request to modify the member, this is that list of calls.  Modifies the calls that this member is coaching. Has no effect if omitted. See the documentation for the [Conference](/docs/voice/bxml/conference) verb for more details about coaching.  Note that this will not add the matching calls to the conference; each call must individually execute a Conference verb to join. | [optional] [default to undefined]

## Example

```typescript
import { UpdateConferenceMember } from 'bandwidth-sdk';

const instance: UpdateConferenceMember = {
    mute,
    hold,
    callIdsToCoach,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

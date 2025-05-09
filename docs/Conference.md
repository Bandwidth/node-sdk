# Conference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The Bandwidth-generated conference ID. | [optional] [default to undefined]
**name** | **string** | The name of the conference, as specified by your application. | [optional] [default to undefined]
**createdTime** | **string** | The time the conference was initiated, in ISO 8601 format. | [optional] [default to undefined]
**completedTime** | **string** | The time the conference was terminated, in ISO 8601 format. | [optional] [default to undefined]
**conferenceEventUrl** | **string** | The URL to send the conference-related events. | [optional] [default to undefined]
**conferenceEventMethod** | [**CallbackMethodEnum**](CallbackMethodEnum.md) |  | [optional] [default to undefined]
**tag** | **string** | The custom string attached to the conference that will be sent with callbacks. | [optional] [default to undefined]
**activeMembers** | [**Array&lt;ConferenceMember&gt;**](ConferenceMember.md) | A list of active members of the conference. Omitted if this is a response to the [Get Conferences endpoint](/apis/voice#tag/Conferences/operation/listConferences). | [optional] [default to undefined]

## Example

```typescript
import { Conference } from 'bandwidth-sdk';

const instance: Conference = {
    id,
    name,
    createdTime,
    completedTime,
    conferenceEventUrl,
    conferenceEventMethod,
    tag,
    activeMembers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

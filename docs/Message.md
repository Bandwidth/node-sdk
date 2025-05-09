# Message


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The id of the message. | [optional] [default to undefined]
**owner** | **string** | The Bandwidth phone number associated with the message. | [optional] [default to undefined]
**applicationId** | **string** | The application ID associated with the message. | [optional] [default to undefined]
**time** | **string** | The datetime stamp of the message in ISO 8601 | [optional] [default to undefined]
**segmentCount** | **number** | The number of segments the original message from the user is broken into before sending over to carrier networks. | [optional] [default to undefined]
**direction** | [**MessageDirectionEnum**](MessageDirectionEnum.md) |  | [optional] [default to undefined]
**to** | **Set&lt;string&gt;** | The phone number recipients of the message. | [optional] [default to undefined]
**from** | **string** | The phone number the message was sent from. | [optional] [default to undefined]
**media** | **Set&lt;string&gt;** | The list of media URLs sent in the message. Including a &#x60;filename&#x60; field in the &#x60;Content-Disposition&#x60; header of the media linked with a URL will set the displayed file name. This is a best practice to ensure that your media has a readable file name. | [optional] [default to undefined]
**text** | **string** | The contents of the message. | [optional] [default to undefined]
**tag** | **string** | The custom string set by the user. | [optional] [default to undefined]
**priority** | [**PriorityEnum**](PriorityEnum.md) |  | [optional] [default to undefined]
**expiration** | **string** | A string with the date/time value that the message will automatically expire by. This must be a valid RFC-3339 value, e.g., 2021-03-14T01:59:26Z or 2021-03-13T20:59:26-05:00. Must be a date-time in the future. | [optional] [default to undefined]

## Example

```typescript
import { Message } from 'bandwidth-sdk';

const instance: Message = {
    id,
    owner,
    applicationId,
    time,
    segmentCount,
    direction,
    to,
    from,
    media,
    text,
    tag,
    priority,
    expiration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

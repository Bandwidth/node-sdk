# MessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationId** | **string** | The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard. | [default to undefined]
**to** | **Set&lt;string&gt;** | The phone number(s) the message should be sent to in E164 format. | [default to undefined]
**from** | **string** | Either an alphanumeric sender ID or the sender\&#39;s Bandwidth phone number in E.164 format, which must be hosted within Bandwidth and linked to the account that is generating the message.  Alphanumeric Sender IDs can contain up to 11 characters, upper-case letters A-Z, lower-case letters a-z, numbers 0-9, space, hyphen -, plus +, underscore _ and ampersand &amp;. Alphanumeric Sender IDs must contain at least one letter. | [default to undefined]
**text** | **string** | The contents of the text message. Must be 2048 characters or less. | [optional] [default to undefined]
**media** | **Array&lt;string&gt;** | A list of URLs to include as media attachments as part of the message. Each URL can be at most 4096 characters. | [optional] [default to undefined]
**tag** | **string** | A custom string that will be included in callback events of the message. Max 1024 characters. | [optional] [default to undefined]
**priority** | [**PriorityEnum**](PriorityEnum.md) |  | [optional] [default to undefined]
**expiration** | **string** | A string with the date/time value that the message will automatically expire by. This must be a valid RFC-3339 value, e.g., 2021-03-14T01:59:26Z or 2021-03-13T20:59:26-05:00. Must be a date-time in the future. | [optional] [default to undefined]

## Example

```typescript
import { MessageRequest } from 'bandwidth-sdk';

const instance: MessageRequest = {
    applicationId,
    to,
    from,
    text,
    media,
    tag,
    priority,
    expiration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

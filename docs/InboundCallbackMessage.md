# InboundCallbackMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | A unique identifier of the message. | [default to undefined]
**owner** | **string** | The Bandwidth phone number or alphanumeric identifier associated with the message. | [default to undefined]
**applicationId** | **string** | The ID of the Application your from number or senderId is associated with in the Bandwidth Phone Number Dashboard. | [default to undefined]
**time** | **string** |  | [default to undefined]
**segmentCount** | **number** | The number of segments the user\&#39;s message is broken into before sending over carrier networks. | [default to undefined]
**direction** | [**MessageDirectionEnum**](MessageDirectionEnum.md) |  | [default to undefined]
**to** | **Set&lt;string&gt;** | The phone number recipients of the message. | [default to undefined]
**from** | **string** | The Bandwidth phone number or alphanumeric identifier the message was sent from. | [default to undefined]
**text** | **string** |  | [optional] [default to undefined]
**tag** | **string** | A custom string that will be included in callback events of the message. Max 1024 characters. | [optional] [default to undefined]
**media** | **Array&lt;string&gt;** | Optional media, not applicable for sms | [optional] [default to undefined]
**priority** | [**PriorityEnum**](PriorityEnum.md) |  | [optional] [default to undefined]
**channel** | [**MultiChannelMessageChannelEnum**](MultiChannelMessageChannelEnum.md) |  | [optional] [default to undefined]
**content** | [**MultiChannelMessageContent**](MultiChannelMessageContent.md) |  | [optional] [default to undefined]
**suggestionResponse** | [**RbmSuggestionResponse**](RbmSuggestionResponse.md) |  | [optional] [default to undefined]
**locationResponse** | [**RbmLocationResponse**](RbmLocationResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InboundCallbackMessage } from 'bandwidth-sdk';

const instance: InboundCallbackMessage = {
    id,
    owner,
    applicationId,
    time,
    segmentCount,
    direction,
    to,
    from,
    text,
    tag,
    media,
    priority,
    channel,
    content,
    suggestionResponse,
    locationResponse,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

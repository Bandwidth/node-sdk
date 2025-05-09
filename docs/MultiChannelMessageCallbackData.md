# MultiChannelMessageCallbackData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **string** | The ID of the message. | [optional] [default to undefined]
**status** | [**MultiChannelStatusEnum**](MultiChannelStatusEnum.md) |  | [optional] [default to undefined]
**direction** | [**MultiChannelMessageDirectionEnum**](MultiChannelMessageDirectionEnum.md) |  | [optional] [default to undefined]
**from** | **string** | The sender ID of the message. This could be an alphanumeric sender ID. | [optional] [default to undefined]
**to** | **string** | The phone number the message should be sent to in E164 format. | [optional] [default to undefined]
**applicationId** | **string** | The ID of the Application your from number or senderId is associated with in the Bandwidth Phone Number Dashboard. | [optional] [default to undefined]
**channel** | [**MultiChannelMessageChannelEnum**](MultiChannelMessageChannelEnum.md) |  | [optional] [default to undefined]
**tag** | **string** | A custom string that will be included in callback events of the message. Max 1024 characters. | [optional] [default to undefined]

## Example

```typescript
import { MultiChannelMessageCallbackData } from 'bandwidth-sdk';

const instance: MultiChannelMessageCallbackData = {
    messageId,
    status,
    direction,
    from,
    to,
    applicationId,
    channel,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

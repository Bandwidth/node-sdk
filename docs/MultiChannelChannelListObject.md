# MultiChannelChannelListObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | The sender ID of the message. This could be an alphanumeric sender ID. | [default to undefined]
**applicationId** | **string** | The ID of the Application your from number or senderId is associated with in the Bandwidth Phone Number Dashboard. | [default to undefined]
**channel** | [**MultiChannelMessageChannelEnum**](MultiChannelMessageChannelEnum.md) |  | [default to undefined]
**content** | [**MultiChannelChannelListObjectContent**](MultiChannelChannelListObjectContent.md) |  | [default to undefined]

## Example

```typescript
import { MultiChannelChannelListObject } from 'bandwidth-sdk';

const instance: MultiChannelChannelListObject = {
    from,
    applicationId,
    channel,
    content,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

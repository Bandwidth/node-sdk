# MultiChannelMessageResponseDataChannelListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **string** | The sender ID of the message. This could be an alphanumeric sender ID. | [default to undefined]
**applicationId** | **string** | The ID of the Application your from number or senderId is associated with in the Bandwidth Phone Number Dashboard. | [default to undefined]
**channel** | [**MultiChannelMessageChannelEnum**](MultiChannelMessageChannelEnum.md) |  | [default to undefined]
**content** | [**MultiChannelChannelListObjectContent**](MultiChannelChannelListObjectContent.md) |  | [default to undefined]
**owner** | **string** | The Bandwidth senderId associated with the message. Identical to \&#39;from\&#39;. | [default to undefined]

## Example

```typescript
import { MultiChannelMessageResponseDataChannelListInner } from 'bandwidth-sdk';

const instance: MultiChannelMessageResponseDataChannelListInner = {
    from,
    applicationId,
    channel,
    content,
    owner,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

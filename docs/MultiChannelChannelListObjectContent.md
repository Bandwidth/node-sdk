# MultiChannelChannelListObjectContent

The content of the message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The contents of the text message. Must be 2048 characters or less. | [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient. | [optional] [default to undefined]
**media** | **Array&lt;string&gt;** | A list of URLs to include as media attachments as part of the message. Each URL can be at most 4096 characters. | [default to undefined]
**orientation** | [**StandaloneCardOrientationEnum**](StandaloneCardOrientationEnum.md) |  | [default to undefined]
**thumbnailImageAlignment** | [**ThumbnailAlignmentEnum**](ThumbnailAlignmentEnum.md) |  | [default to undefined]
**cardContent** | [**RbmCardContent**](RbmCardContent.md) |  | [default to undefined]
**cardWidth** | [**CardWidthEnum**](CardWidthEnum.md) |  | [default to undefined]
**cardContents** | [**Array&lt;RbmCardContent&gt;**](RbmCardContent.md) |  | [default to undefined]

## Example

```typescript
import { MultiChannelChannelListObjectContent } from 'bandwidth-sdk';

const instance: MultiChannelChannelListObjectContent = {
    text,
    suggestions,
    media,
    orientation,
    thumbnailImageAlignment,
    cardContent,
    cardWidth,
    cardContents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

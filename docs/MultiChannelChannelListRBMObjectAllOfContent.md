# MultiChannelChannelListRBMObjectAllOfContent

The content of the message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The text associated with the message. Must be 3270 characters or less | [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient. | [optional] [default to undefined]
**media** | [**RbmMessageContentFile**](RbmMessageContentFile.md) |  | [default to undefined]
**orientation** | [**StandaloneCardOrientationEnum**](StandaloneCardOrientationEnum.md) |  | [default to undefined]
**thumbnailImageAlignment** | [**ThumbnailAlignmentEnum**](ThumbnailAlignmentEnum.md) |  | [default to undefined]
**cardContent** | [**RbmCardContent**](RbmCardContent.md) |  | [default to undefined]
**cardWidth** | [**CardWidthEnum**](CardWidthEnum.md) |  | [default to undefined]
**cardContents** | [**Array&lt;RbmCardContent&gt;**](RbmCardContent.md) |  | [default to undefined]

## Example

```typescript
import { MultiChannelChannelListRBMObjectAllOfContent } from 'bandwidth-sdk';

const instance: MultiChannelChannelListRBMObjectAllOfContent = {
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

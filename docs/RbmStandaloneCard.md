# RbmStandaloneCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orientation** | [**StandaloneCardOrientationEnum**](StandaloneCardOrientationEnum.md) |  | [default to undefined]
**thumbnailImageAlignment** | [**ThumbnailAlignmentEnum**](ThumbnailAlignmentEnum.md) |  | [default to undefined]
**cardContent** | [**RbmCardContent**](RbmCardContent.md) |  | [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient. | [optional] [default to undefined]

## Example

```typescript
import { RbmStandaloneCard } from 'bandwidth-sdk';

const instance: RbmStandaloneCard = {
    orientation,
    thumbnailImageAlignment,
    cardContent,
    suggestions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

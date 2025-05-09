# RbmMessageCarouselCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardWidth** | [**CardWidthEnum**](CardWidthEnum.md) |  | [default to undefined]
**cardContents** | [**Array&lt;RbmCardContent&gt;**](RbmCardContent.md) |  | [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient. | [optional] [default to undefined]

## Example

```typescript
import { RbmMessageCarouselCard } from 'bandwidth-sdk';

const instance: RbmMessageCarouselCard = {
    cardWidth,
    cardContents,
    suggestions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

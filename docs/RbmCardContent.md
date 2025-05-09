# RbmCardContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of the card. Must be 200 characters or less. | [optional] [default to undefined]
**description** | **string** | The description of the card. Must be 2000 characters or less. | [optional] [default to undefined]
**media** | [**RbmCardContentMedia**](RbmCardContentMedia.md) |  | [optional] [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient that will be displayed on the rich card. | [optional] [default to undefined]

## Example

```typescript
import { RbmCardContent } from 'bandwidth-sdk';

const instance: RbmCardContent = {
    title,
    description,
    media,
    suggestions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

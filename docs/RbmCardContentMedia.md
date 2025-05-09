# RbmCardContentMedia


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileUrl** | **string** | The URL of the media file. 100MB is the maximum file size. | [default to undefined]
**thumbnailUrl** | **string** | The URL of the thumbnail image. Applies only to video file media. | [optional] [default to undefined]
**height** | [**RbmMediaHeightEnum**](RbmMediaHeightEnum.md) |  | [default to undefined]

## Example

```typescript
import { RbmCardContentMedia } from 'bandwidth-sdk';

const instance: RbmCardContentMedia = {
    fileUrl,
    thumbnailUrl,
    height,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

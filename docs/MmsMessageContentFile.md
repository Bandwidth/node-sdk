# MmsMessageContentFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fileUrl** | **string** | The URL of a media attachment.  For MMS, the API limits file size to 3.5MB. Specific carriers and channels may have a smaller limit that could cause a large file to fail, see [here](https://support.bandwidth.com/hc/en-us/articles/360014235473-What-are-the-MMS-file-size-limits) for more details. | [default to undefined]

## Example

```typescript
import { MmsMessageContentFile } from 'bandwidth-sdk';

const instance: MmsMessageContentFile = {
    fileUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

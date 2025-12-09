# RbmActionOpenUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postbackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]
**url** | **string** | The URL to open in browser. | [default to undefined]
**application** | [**RbmOpenUrlEnum**](RbmOpenUrlEnum.md) |  | [optional] [default to undefined]
**webviewViewMode** | [**RbmVebViewEnum**](RbmVebViewEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RbmActionOpenUrl } from 'bandwidth-sdk';

const instance: RbmActionOpenUrl = {
    type,
    text,
    postbackData,
    url,
    application,
    webviewViewMode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

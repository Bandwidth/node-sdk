# RbmActionBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postBackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]

## Example

```typescript
import { RbmActionBase } from 'bandwidth-sdk';

const instance: RbmActionBase = {
    type,
    text,
    postBackData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

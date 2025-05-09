# RbmActionDial


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postBackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]
**phoneNumber** | **string** | The phone number to dial. Must be E164 format. | [default to undefined]

## Example

```typescript
import { RbmActionDial } from 'bandwidth-sdk';

const instance: RbmActionDial = {
    type,
    text,
    postBackData,
    phoneNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

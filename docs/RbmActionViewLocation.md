# RbmActionViewLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postbackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]
**latitude** | **number** | The latitude of the location. | [default to undefined]
**longitude** | **number** | The longitude of the location. | [default to undefined]
**label** | **string** | The label of the location. | [optional] [default to undefined]

## Example

```typescript
import { RbmActionViewLocation } from 'bandwidth-sdk';

const instance: RbmActionViewLocation = {
    type,
    text,
    postbackData,
    latitude,
    longitude,
    label,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

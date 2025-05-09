# MultiChannelAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postBackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]
**phoneNumber** | **string** | The phone number to dial. Must be E164 format. | [default to undefined]
**latitude** | **number** | The latitude of the location. | [default to undefined]
**longitude** | **number** | The longitude of the location. | [default to undefined]
**label** | **string** | The label of the location. | [optional] [default to undefined]
**title** | **string** | The title of the event. | [default to undefined]
**startTime** | **string** | The start time of the event. | [default to undefined]
**endTime** | **string** | The end time of the event. | [default to undefined]
**description** | **string** | The description of the event. | [optional] [default to undefined]
**url** | **string** | The URL to open in browser. | [default to undefined]

## Example

```typescript
import { MultiChannelAction } from 'bandwidth-sdk';

const instance: MultiChannelAction = {
    type,
    text,
    postBackData,
    phoneNumber,
    latitude,
    longitude,
    label,
    title,
    startTime,
    endTime,
    description,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

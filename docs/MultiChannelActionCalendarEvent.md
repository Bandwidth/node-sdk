# MultiChannelActionCalendarEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**RbmActionTypeEnum**](RbmActionTypeEnum.md) |  | [default to undefined]
**text** | **string** | Displayed text for user to click | [default to undefined]
**postBackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [default to undefined]
**title** | **string** | The title of the event. | [default to undefined]
**startTime** | **string** | The start time of the event. | [default to undefined]
**endTime** | **string** | The end time of the event. | [default to undefined]
**description** | **string** | The description of the event. | [optional] [default to undefined]

## Example

```typescript
import { MultiChannelActionCalendarEvent } from 'bandwidth-sdk';

const instance: MultiChannelActionCalendarEvent = {
    type,
    text,
    postBackData,
    title,
    startTime,
    endTime,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

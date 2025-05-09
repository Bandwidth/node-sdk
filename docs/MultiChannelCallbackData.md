# MultiChannelCallbackData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **string** | The time of the callback event. | [optional] [default to undefined]
**type** | [**MultiChannelStatusEnum**](MultiChannelStatusEnum.md) |  | [optional] [default to undefined]
**to** | **string** | The phone number the message should be sent to in E164 format. | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**message** | [**MultiChannelMessageCallbackData**](MultiChannelMessageCallbackData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MultiChannelCallbackData } from 'bandwidth-sdk';

const instance: MultiChannelCallbackData = {
    time,
    type,
    to,
    description,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

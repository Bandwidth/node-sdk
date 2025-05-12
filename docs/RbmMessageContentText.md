# RbmMessageContentText


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The text associated with the message. Must be 3270 characters or less | [default to undefined]
**suggestions** | [**Array&lt;MultiChannelAction&gt;**](MultiChannelAction.md) | An array of suggested actions for the recipient. | [optional] [default to undefined]

## Example

```typescript
import { RbmMessageContentText } from 'bandwidth-sdk';

const instance: RbmMessageContentText = {
    text,
    suggestions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

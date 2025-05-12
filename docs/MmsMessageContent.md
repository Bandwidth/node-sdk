# MmsMessageContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The contents of the text message. Must be 2048 characters or less. | [optional] [default to undefined]
**media** | **Array&lt;string&gt;** | A list of URLs to include as media attachments as part of the message. Each URL can be at most 4096 characters. | [optional] [default to undefined]

## Example

```typescript
import { MmsMessageContent } from 'bandwidth-sdk';

const instance: MmsMessageContent = {
    text,
    media,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

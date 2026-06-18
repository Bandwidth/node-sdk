# SuggestionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | The text associated with the suggestion response. | [optional] [default to undefined]
**postbackData** | **string** | Base64 payload the customer receives when the reply is clicked. | [optional] [default to undefined]
**pairedMessageId** | **string** | Corresponding parent message ID (MT). | [optional] [default to undefined]

## Example

```typescript
import { SuggestionResponse } from 'bandwidth-sdk';

const instance: SuggestionResponse = {
    text,
    postbackData,
    pairedMessageId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

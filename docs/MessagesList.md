# MessagesList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | The total number of messages matched by the search. When the request has limitTotalCount set to true this value is limited to 10,000. | [optional] [default to undefined]
**pageInfo** | [**PageInfo**](PageInfo.md) |  | [optional] [default to undefined]
**messages** | [**Array&lt;ListMessageItem&gt;**](ListMessageItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MessagesList } from 'bandwidth-sdk';

const instance: MessagesList = {
    totalCount,
    pageInfo,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

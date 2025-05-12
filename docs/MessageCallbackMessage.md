# MessageCallbackMessage

Message payload schema within a MessageCallback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**owner** | **string** |  | [default to undefined]
**applicationId** | **string** |  | [default to undefined]
**time** | **string** |  | [default to undefined]
**segmentCount** | **number** |  | [default to undefined]
**direction** | [**MessageDirectionEnum**](MessageDirectionEnum.md) |  | [default to undefined]
**to** | **Set&lt;string&gt;** |  | [default to undefined]
**from** | **string** |  | [default to undefined]
**text** | **string** |  | [default to undefined]
**tag** | **string** |  | [optional] [default to undefined]
**media** | **Array&lt;string&gt;** | Optional media, applicable only for mms | [optional] [default to undefined]
**priority** | [**PriorityEnum**](PriorityEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MessageCallbackMessage } from 'bandwidth-sdk';

const instance: MessageCallbackMessage = {
    id,
    owner,
    applicationId,
    time,
    segmentCount,
    direction,
    to,
    from,
    text,
    tag,
    media,
    priority,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

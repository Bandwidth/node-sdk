# AccountStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCallQueueSize** | **number** | The number of calls currently enqueued. | [optional] [default to undefined]
**maxCallQueueSize** | **number** | The maximum size of the queue before outgoing calls start being rejected. | [optional] [default to undefined]

## Example

```typescript
import { AccountStatistics } from 'bandwidth-sdk';

const instance: AccountStatistics = {
    currentCallQueueSize,
    maxCallQueueSize,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

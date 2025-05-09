# Diversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | The reason for the diversion. Common values: unknown, user-busy, no-answer, unavailable, unconditional, time-of-day, do-not-disturb, deflection, follow-me, out-of-service, away. | [optional] [default to undefined]
**privacy** | **string** | off or full | [optional] [default to undefined]
**screen** | **string** | No if the number was provided by the user, yes if the number was provided by the network | [optional] [default to undefined]
**counter** | **string** | The number of diversions that have occurred | [optional] [default to undefined]
**limit** | **string** | The maximum number of diversions allowed for this session | [optional] [default to undefined]
**unknown** | **string** | The normal list of values is not exhaustive. Your application must be tolerant of unlisted keys and unlisted values of those keys. | [optional] [default to undefined]
**origTo** | **string** | Always present. Indicates the last telephone number that the call was diverted from. | [optional] [default to undefined]

## Example

```typescript
import { Diversion } from 'bandwidth-sdk';

const instance: Diversion = {
    reason,
    privacy,
    screen,
    counter,
    limit,
    unknown,
    origTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

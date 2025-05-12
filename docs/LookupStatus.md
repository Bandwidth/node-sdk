# LookupStatus

If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive. Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it.  Any other Response Code will indicate no information was available for the TN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | **string** | The requestId. | [optional] [default to undefined]
**status** | [**LookupStatusEnum**](LookupStatusEnum.md) |  | [optional] [default to undefined]
**result** | [**Array&lt;LookupResult&gt;**](LookupResult.md) | The carrier information results for the specified telephone number. | [optional] [default to undefined]
**failedTelephoneNumbers** | **Array&lt;string&gt;** | The telephone numbers whose lookup failed. | [optional] [default to undefined]

## Example

```typescript
import { LookupStatus } from 'bandwidth-sdk';

const instance: LookupStatus = {
    requestId,
    status,
    result,
    failedTelephoneNumbers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

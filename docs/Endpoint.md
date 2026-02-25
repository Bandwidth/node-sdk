# Endpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpointId** | **string** | The unique ID of the endpoint. | [default to undefined]
**type** | [**EndpointTypeEnum**](EndpointTypeEnum.md) |  | [default to undefined]
**status** | [**EndpointStatusEnum**](EndpointStatusEnum.md) |  | [default to undefined]
**creationTimestamp** | **string** | The time the endpoint was created. In ISO-8601 format. | [default to undefined]
**expirationTimestamp** | **string** | The time the endpoint token will expire. In ISO-8601 format. Tokens last 24 hours. | [default to undefined]
**tag** | **string** | A tag for the endpoint. | [optional] [default to undefined]
**devices** | [**Array&lt;Device&gt;**](Device.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Endpoint } from 'bandwidth-sdk';

const instance: Endpoint = {
    endpointId,
    type,
    status,
    creationTimestamp,
    expirationTimestamp,
    tag,
    devices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

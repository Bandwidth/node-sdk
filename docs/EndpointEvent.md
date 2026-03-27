# EndpointEvent

An event that occurred on an endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpointId** | **string** | The unique ID of the endpoint. | [default to undefined]
**type** | [**EndpointTypeEnum**](EndpointTypeEnum.md) |  | [default to undefined]
**status** | [**EndpointStatusEnum**](EndpointStatusEnum.md) |  | [default to undefined]
**creationTimestamp** | **string** | The time the endpoint was created. In ISO-8601 format. | [default to undefined]
**expirationTimestamp** | **string** | The time the endpoint token will expire. In ISO-8601 format. Tokens last 24 hours. | [default to undefined]
**tag** | **string** | A tag for the endpoint. | [optional] [default to undefined]
**eventTime** | **string** | The time the event occurred. In ISO-8601 format. | [default to undefined]
**eventType** | [**EndpointEventTypeEnum**](EndpointEventTypeEnum.md) |  | [default to undefined]
**device** | [**Device**](Device.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EndpointEvent } from 'bandwidth-sdk';

const instance: EndpointEvent = {
    endpointId,
    type,
    status,
    creationTimestamp,
    expirationTimestamp,
    tag,
    eventTime,
    eventType,
    device,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

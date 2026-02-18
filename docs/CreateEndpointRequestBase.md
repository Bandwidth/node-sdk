# CreateEndpointRequestBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**EndpointTypeEnum**](EndpointTypeEnum.md) |  | [default to undefined]
**direction** | [**EndpointDirectionEnum**](EndpointDirectionEnum.md) |  | [default to undefined]
**eventCallbackUrl** | **string** | The URL to send event callbacks to. | [optional] [default to undefined]
**eventFallbackUrl** | **string** | The URL to send event fallbacks to. | [optional] [default to undefined]
**tag** | **string** | A tag for the endpoint. | [optional] [default to undefined]

## Example

```typescript
import { CreateEndpointRequestBase } from 'bandwidth-sdk';

const instance: CreateEndpointRequestBase = {
    type,
    direction,
    eventCallbackUrl,
    eventFallbackUrl,
    tag,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

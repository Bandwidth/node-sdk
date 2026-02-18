# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceId** | **string** | The unique ID of the device. | [default to undefined]
**deviceName** | **string** | The name of the device. | [optional] [default to undefined]
**status** | [**DeviceStatusEnum**](DeviceStatusEnum.md) |  | [default to undefined]
**creationTimestamp** | **string** | The time the device was created. In ISO-8601 format. | [default to undefined]

## Example

```typescript
import { Device } from 'bandwidth-sdk';

const instance: Device = {
    deviceId,
    deviceName,
    status,
    creationTimestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

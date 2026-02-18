# SipConnectionMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipAddress** | **string** | The IP address of the SIP connection. | [optional] [default to undefined]
**port** | **number** | The port of the SIP connection. | [optional] [default to undefined]
**credentials** | [**SipCredentials**](SipCredentials.md) |  | [optional] [default to undefined]
**uuiHeader** | **string** | The User-to-User Information header for the SIP connection. | [optional] [default to undefined]

## Example

```typescript
import { SipConnectionMetadata } from 'bandwidth-sdk';

const instance: SipConnectionMetadata = {
    ipAddress,
    port,
    credentials,
    uuiHeader,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

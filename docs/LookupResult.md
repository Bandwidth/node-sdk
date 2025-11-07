# LookupResult

Carrier information results for the specified telephone number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phoneNumber** | **string** | The telephone number in E.164 format. | [optional] [default to undefined]
**lineType** | [**LineTypeEnum**](LineTypeEnum.md) |  | [optional] [default to undefined]
**messagingProvider** | **string** | The messaging service provider of the telephone number. | [optional] [default to undefined]
**voiceProvider** | **string** | The voice service provider of the telephone number. | [optional] [default to undefined]
**countryCodeA3** | **string** | The country code of the telephone number in ISO 3166-1 alpha-3 format. | [optional] [default to undefined]
**deactivationReporter** | **string** | [DNI-Only](#section/DNI-Only). The carrier that reported a deactivation event for this phone number.  | [optional] [default to undefined]
**deactivationDate** | **string** | [DNI-Only](#section/DNI-Only). The datetime the carrier reported a deactivation event. | [optional] [default to undefined]
**deactivationEvent** | [**DeactivationEventEnum**](DeactivationEventEnum.md) |  | [optional] [default to undefined]
**latestMessageDeliveryStatus** | [**LatestMessageDeliveryStatusEnum**](LatestMessageDeliveryStatusEnum.md) |  | [optional] [default to undefined]
**initialMessageDeliveryStatusDate** | **string** | [DNI-Only](#section/DNI-Only). The date the phone number entered the status described in &#x60;latestMessageDeliveryStatus&#x60;.  Think of this as the \&quot;start time\&quot; for that status. Value resets every time the &#x60;latestMessageDeliveryStatus&#x60; changes. | [optional] [default to undefined]
**latestMessageDeliveryStatusDate** | **string** | [DNI-Only](#section/DNI-Only). The date bandwidth last received delivery status information for this phone number.  Use this field to understand how up-to-date the &#x60;latestMessageDeliveryStatus&#x60; is. Value resets every time the &#x60;latestMessageDeliveryStatus&#x60; changes. | [optional] [default to undefined]

## Example

```typescript
import { LookupResult } from 'bandwidth-sdk';

const instance: LookupResult = {
    phoneNumber,
    lineType,
    messagingProvider,
    voiceProvider,
    countryCodeA3,
    deactivationReporter,
    deactivationDate,
    deactivationEvent,
    latestMessageDeliveryStatus,
    initialMessageDeliveryStatusDate,
    latestMessageDeliveryStatusDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

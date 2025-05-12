# ListMessageItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **string** | The message id | [optional] [default to undefined]
**accountId** | **string** | The account id associated with this message. | [optional] [default to undefined]
**sourceTn** | **string** | The source phone number of the message. | [optional] [default to undefined]
**destinationTn** | **string** | The recipient phone number of the message. | [optional] [default to undefined]
**messageStatus** | [**MessageStatusEnum**](MessageStatusEnum.md) |  | [optional] [default to undefined]
**messageDirection** | [**ListMessageDirectionEnum**](ListMessageDirectionEnum.md) |  | [optional] [default to undefined]
**messageType** | [**MessageTypeEnum**](MessageTypeEnum.md) |  | [optional] [default to undefined]
**segmentCount** | **number** | The number of segments the message was sent as. | [optional] [default to undefined]
**errorCode** | **number** | The numeric error code of the message. | [optional] [default to undefined]
**receiveTime** | **string** | The ISO 8601 datetime of the message. | [optional] [default to undefined]
**carrierName** | **string** | The name of the carrier. Not currently supported for MMS coming soon. | [optional] [default to undefined]
**messageSize** | **number** | The size of the message including message content and headers. | [optional] [default to undefined]
**messageLength** | **number** | The length of the message content. | [optional] [default to undefined]
**attachmentCount** | **number** | The number of attachments the message has. | [optional] [default to undefined]
**recipientCount** | **number** | The number of recipients the message has. | [optional] [default to undefined]
**campaignClass** | **string** | The campaign class of the message if it has one. | [optional] [default to undefined]
**campaignId** | **string** | The campaign ID of the message if it has one. | [optional] [default to undefined]

## Example

```typescript
import { ListMessageItem } from 'bandwidth-sdk';

const instance: ListMessageItem = {
    messageId,
    accountId,
    sourceTn,
    destinationTn,
    messageStatus,
    messageDirection,
    messageType,
    segmentCount,
    errorCode,
    receiveTime,
    carrierName,
    messageSize,
    messageLength,
    attachmentCount,
    recipientCount,
    campaignClass,
    campaignId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

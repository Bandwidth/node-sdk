# StatusCallbackTypeEnum

The possible status callbacks when sending an MT SMS or MMS or RBM message: - `message-sending` indicates that Bandwidth is sending the message to the upstream provider. - `message-sent` indicates that the message has left the Bandwidth network and is in transit to the provider. - `message-delivered` indicates that the message was successfully delivered to handset. - `message-failed` indicates that the message could not be sent to the intended recipient. - `message-read` indicates that the RBM message was read by the recipient.

## Enum

* `MessageSending` (value: `'message-sending'`)

* `MessageSent` (value: `'message-sent'`)

* `MessageDelivered` (value: `'message-delivered'`)

* `MessageFailed` (value: `'message-failed'`)

* `MessageRead` (value: `'message-read'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# MessagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMessage**](#createmessage) | **POST** /users/{accountId}/messages | Create Message|
|[**listMessages**](#listmessages) | **GET** /users/{accountId}/messages | List Messages|

# **createMessage**
> Message createMessage(messageRequest)

Endpoint for sending text messages and picture messages using V2 messaging.

### Example

```typescript
import {
    MessagesApi,
    Configuration,
    MessageRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let messageRequest: MessageRequest; //

const { status, data } = await apiInstance.createMessage(
    accountId,
    messageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageRequest** | **MessageRequest**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**Message**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**406** | Not Acceptable |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMessages**
> MessagesList listMessages()

Returns a list of messages based on query parameters.

### Example

```typescript
import {
    MessagesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MessagesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let messageId: string; //The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. (optional) (default to undefined)
let sourceTn: string; //The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \'%2B1919\'). (optional) (default to undefined)
let destinationTn: string; //The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \'%2B1919\'). (optional) (default to undefined)
let messageStatus: MessageStatusEnum; //The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. (optional) (default to undefined)
let messageDirection: ListMessageDirectionEnum; //The direction of the message. One of INBOUND OUTBOUND. (optional) (default to undefined)
let carrierName: string; //The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&T should be passed as AT%26T). (optional) (default to undefined)
let messageType: MessageTypeEnum; //The type of message. Either sms or mms. (optional) (default to undefined)
let errorCode: number; //The error code of the message. (optional) (default to undefined)
let fromDateTime: string; //The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. (optional) (default to undefined)
let toDateTime: string; //The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. (optional) (default to undefined)
let campaignId: string; //The campaign ID of the message. (optional) (default to undefined)
let fromBwLatency: number; //The minimum Bandwidth latency of the message in seconds. Only available for accounts with the Advanced Quality Metrics feature enabled. (optional) (default to undefined)
let bwQueued: boolean; //A boolean value indicating whether the message is queued in the Bandwidth network. (optional) (default to undefined)
let product: ProductTypeEnum; //Messaging product associated with the message. (optional) (default to undefined)
let location: string; //Location Id associated with the message. (optional) (default to undefined)
let carrierQueued: boolean; //A boolean value indicating whether the message is queued in the carrier network. Only available for OUTBOUND messages from accounts with the Advanced Quality Metrics feature enabled. (optional) (default to undefined)
let fromCarrierLatency: number; //The minimum carrier latency of the message in seconds. Only available for OUTBOUND messages from accounts with the Advanced Quality Metrics feature enabled. (optional) (default to undefined)
let callingNumberCountryA3: string; //Calling number country in A3 format. (optional) (default to undefined)
let calledNumberCountryA3: string; //Called number country in A3 format. (optional) (default to undefined)
let fromSegmentCount: number; //Segment count (start range). (optional) (default to undefined)
let toSegmentCount: number; //Segment count (end range). (optional) (default to undefined)
let fromMessageSize: number; //Message size (start range). (optional) (default to undefined)
let toMessageSize: number; //Message size (end range). (optional) (default to undefined)
let sort: string; //The field and direction to sort by combined with a colon. Direction is either asc or desc. (optional) (default to undefined)
let pageToken: string; //A base64 encoded value used for pagination of results. (optional) (default to undefined)
let limit: number; //The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. (optional) (default to undefined)
let limitTotalCount: boolean; //When set to true, the response\'s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results. (optional) (default to undefined)

const { status, data } = await apiInstance.listMessages(
    accountId,
    messageId,
    sourceTn,
    destinationTn,
    messageStatus,
    messageDirection,
    carrierName,
    messageType,
    errorCode,
    fromDateTime,
    toDateTime,
    campaignId,
    fromBwLatency,
    bwQueued,
    product,
    location,
    carrierQueued,
    fromCarrierLatency,
    callingNumberCountryA3,
    calledNumberCountryA3,
    fromSegmentCount,
    toSegmentCount,
    fromMessageSize,
    toMessageSize,
    sort,
    pageToken,
    limit,
    limitTotalCount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **messageId** | [**string**] | The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. | (optional) defaults to undefined|
| **sourceTn** | [**string**] | The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). | (optional) defaults to undefined|
| **destinationTn** | [**string**] | The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). | (optional) defaults to undefined|
| **messageStatus** | **MessageStatusEnum** | The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. | (optional) defaults to undefined|
| **messageDirection** | **ListMessageDirectionEnum** | The direction of the message. One of INBOUND OUTBOUND. | (optional) defaults to undefined|
| **carrierName** | [**string**] | The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T). | (optional) defaults to undefined|
| **messageType** | **MessageTypeEnum** | The type of message. Either sms or mms. | (optional) defaults to undefined|
| **errorCode** | [**number**] | The error code of the message. | (optional) defaults to undefined|
| **fromDateTime** | [**string**] | The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | (optional) defaults to undefined|
| **toDateTime** | [**string**] | The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. | (optional) defaults to undefined|
| **campaignId** | [**string**] | The campaign ID of the message. | (optional) defaults to undefined|
| **fromBwLatency** | [**number**] | The minimum Bandwidth latency of the message in seconds. Only available for accounts with the Advanced Quality Metrics feature enabled. | (optional) defaults to undefined|
| **bwQueued** | [**boolean**] | A boolean value indicating whether the message is queued in the Bandwidth network. | (optional) defaults to undefined|
| **product** | **ProductTypeEnum** | Messaging product associated with the message. | (optional) defaults to undefined|
| **location** | [**string**] | Location Id associated with the message. | (optional) defaults to undefined|
| **carrierQueued** | [**boolean**] | A boolean value indicating whether the message is queued in the carrier network. Only available for OUTBOUND messages from accounts with the Advanced Quality Metrics feature enabled. | (optional) defaults to undefined|
| **fromCarrierLatency** | [**number**] | The minimum carrier latency of the message in seconds. Only available for OUTBOUND messages from accounts with the Advanced Quality Metrics feature enabled. | (optional) defaults to undefined|
| **callingNumberCountryA3** | [**string**] | Calling number country in A3 format. | (optional) defaults to undefined|
| **calledNumberCountryA3** | [**string**] | Called number country in A3 format. | (optional) defaults to undefined|
| **fromSegmentCount** | [**number**] | Segment count (start range). | (optional) defaults to undefined|
| **toSegmentCount** | [**number**] | Segment count (end range). | (optional) defaults to undefined|
| **fromMessageSize** | [**number**] | Message size (start range). | (optional) defaults to undefined|
| **toMessageSize** | [**number**] | Message size (end range). | (optional) defaults to undefined|
| **sort** | [**string**] | The field and direction to sort by combined with a colon. Direction is either asc or desc. | (optional) defaults to undefined|
| **pageToken** | [**string**] | A base64 encoded value used for pagination of results. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. | (optional) defaults to undefined|
| **limitTotalCount** | [**boolean**] | When set to true, the response\&#39;s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results. | (optional) defaults to undefined|


### Return type

**MessagesList**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


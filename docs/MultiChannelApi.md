# MultiChannelApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMultiChannelMessage**](#createmultichannelmessage) | **POST** /users/{accountId}/messages/multiChannel | Create Multi-Channel Message|

# **createMultiChannelMessage**
> CreateMultiChannelMessageResponse createMultiChannelMessage(multiChannelMessageRequest)

Endpoint for sending Multi-Channel messages.

### Example

```typescript
import {
    MultiChannelApi,
    Configuration,
    MultiChannelMessageRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MultiChannelApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let multiChannelMessageRequest: MultiChannelMessageRequest; //

const { status, data } = await apiInstance.createMultiChannelMessage(
    accountId,
    multiChannelMessageRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **multiChannelMessageRequest** | **MultiChannelMessageRequest**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**CreateMultiChannelMessageResponse**

### Authorization

[Basic](../README.md#Basic)

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


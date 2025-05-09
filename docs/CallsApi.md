# CallsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCall**](#createcall) | **POST** /accounts/{accountId}/calls | Create Call|
|[**getCallState**](#getcallstate) | **GET** /accounts/{accountId}/calls/{callId} | Get Call State Information|
|[**listCalls**](#listcalls) | **GET** /accounts/{accountId}/calls | Get Calls|
|[**updateCall**](#updatecall) | **POST** /accounts/{accountId}/calls/{callId} | Update Call|
|[**updateCallBxml**](#updatecallbxml) | **PUT** /accounts/{accountId}/calls/{callId}/bxml | Update Call BXML|

# **createCall**
> CreateCallResponse createCall(createCall)

Creates an outbound phone call.  All calls are initially queued. Your outbound calls will initiated at a specific dequeueing rate, enabling your application to \"fire and forget\" when creating calls. Queued calls may not be modified until they are dequeued and placed, but may be removed from your queue on demand.  <b>Please note:</b> Calls submitted to your queue will be placed approximately in order, but exact ordering is not guaranteed.

### Example

```typescript
import {
    CallsApi,
    Configuration,
    CreateCall
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new CallsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let createCall: CreateCall; //JSON object containing information to create an outbound call

const { status, data } = await apiInstance.createCall(
    accountId,
    createCall
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCall** | **CreateCall**| JSON object containing information to create an outbound call | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**CreateCallResponse**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  * Location - The URL for further interactions with this call <br>  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCallState**
> CallState getCallState()

Retrieve the current state of a specific call. This information is near-realtime, so it may take a few minutes for your call to be accessible using this endpoint.  **Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.

### Example

```typescript
import {
    CallsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new CallsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)

const { status, data } = await apiInstance.getCallState(
    accountId,
    callId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|


### Return type

**CallState**

### Authorization

[Basic](../README.md#Basic)

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
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCalls**
> Array<CallState> listCalls()

Returns a max of 10000 calls, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of calls in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of call records. Also, call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an empty array [] in response.

### Example

```typescript
import {
    CallsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new CallsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let to: string; //Filter results by the `to` field. (optional) (default to undefined)
let from: string; //Filter results by the `from` field. (optional) (default to undefined)
let minStartTime: string; //Filter results to calls which have a `startTime` after or including `minStartTime` (in ISO8601 format). (optional) (default to undefined)
let maxStartTime: string; //Filter results to calls which have a `startTime` before or including `maxStartTime` (in ISO8601 format). (optional) (default to undefined)
let disconnectCause: string; //Filter results to calls with specified call Disconnect Cause. (optional) (default to undefined)
let pageSize: number; //Specifies the max number of calls that will be returned. (optional) (default to 1000)
let pageToken: string; //Not intended for explicit use. To use pagination, follow the links in the `Link` header of the response, as indicated in the endpoint description. (optional) (default to undefined)

const { status, data } = await apiInstance.listCalls(
    accountId,
    to,
    from,
    minStartTime,
    maxStartTime,
    disconnectCause,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **to** | [**string**] | Filter results by the &#x60;to&#x60; field. | (optional) defaults to undefined|
| **from** | [**string**] | Filter results by the &#x60;from&#x60; field. | (optional) defaults to undefined|
| **minStartTime** | [**string**] | Filter results to calls which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|
| **maxStartTime** | [**string**] | Filter results to calls which have a &#x60;startTime&#x60; before or including &#x60;maxStartTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|
| **disconnectCause** | [**string**] | Filter results to calls with specified call Disconnect Cause. | (optional) defaults to undefined|
| **pageSize** | [**number**] | Specifies the max number of calls that will be returned. | (optional) defaults to 1000|
| **pageToken** | [**string**] | Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description. | (optional) defaults to undefined|


### Return type

**Array<CallState>**

### Authorization

[Basic](../README.md#Basic)

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
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCall**
> updateCall(updateCall)

Interrupts and redirects a call to a different URL that should return a BXML document.

### Example

```typescript
import {
    CallsApi,
    Configuration,
    UpdateCall
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new CallsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let updateCall: UpdateCall; //JSON object containing information to redirect an existing call to a new BXML document

const { status, data } = await apiInstance.updateCall(
    accountId,
    callId,
    updateCall
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCall** | **UpdateCall**| JSON object containing information to redirect an existing call to a new BXML document | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**409** | Conflict |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCallBxml**
> updateCallBxml(body)

Interrupts and replaces an active call\'s BXML document.

### Example

```typescript
import {
    CallsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new CallsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateCallBxml(
    accountId,
    callId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Call BXML was successfully replaced. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**409** | Conflict |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# EndpointsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEndpoint**](#createendpoint) | **POST** /accounts/{accountId}/endpoints | Create Endpoint|
|[**deleteEndpoint**](#deleteendpoint) | **DELETE** /accounts/{accountId}/endpoints/{endpointId} | Delete Endpoint|
|[**getEndpoint**](#getendpoint) | **GET** /accounts/{accountId}/endpoints/{endpointId} | Get Endpoint|
|[**listEndpoints**](#listendpoints) | **GET** /accounts/{accountId}/endpoints | List Endpoints|
|[**updateEndpointBxml**](#updateendpointbxml) | **PUT** /accounts/{accountId}/endpoints/{endpointId}/bxml | Update Endpoint BXML|

# **createEndpoint**
> CreateEndpointResponse createEndpoint(body)

Creates a new Endpoint for the specified account.

### Example

```typescript
import {
    EndpointsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new EndpointsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let body: CreateWebRtcConnectionRequest; //

const { status, data } = await apiInstance.createEndpoint(
    accountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **CreateWebRtcConnectionRequest**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**CreateEndpointResponse**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteEndpoint**
> deleteEndpoint()

Deletes the specified endpoint. If the endpoint is actively streaming media, the media stream will be terminated.

### Example

```typescript
import {
    EndpointsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new EndpointsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let endpointId: string; //BRTC Endpoint ID. (default to undefined)

const { status, data } = await apiInstance.deleteEndpoint(
    accountId,
    endpointId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **endpointId** | [**string**] | BRTC Endpoint ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEndpoint**
> EndpointResponse getEndpoint()

Returns information about the specified endpoint.

### Example

```typescript
import {
    EndpointsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new EndpointsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let endpointId: string; //BRTC Endpoint ID. (default to undefined)

const { status, data } = await apiInstance.getEndpoint(
    accountId,
    endpointId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **endpointId** | [**string**] | BRTC Endpoint ID. | defaults to undefined|


### Return type

**EndpointResponse**

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
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listEndpoints**
> ListEndpointsResponse listEndpoints()

Returns a list of endpoints associated with the specified account.

### Example

```typescript
import {
    EndpointsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new EndpointsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let type: EndpointTypeEnum; //The type of endpoint. (optional) (default to undefined)
let status: EndpointStatusEnum; //The status of the endpoint. (optional) (default to undefined)
let afterCursor: string; //The cursor to use for pagination. This is the value of the `next` link in the previous response. (optional) (default to undefined)
let limit: number; //The maximum number of endpoints to return in the response. (optional) (default to 100)

const { status, data } = await apiInstance.listEndpoints(
    accountId,
    type,
    status,
    afterCursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **type** | **EndpointTypeEnum** | The type of endpoint. | (optional) defaults to undefined|
| **status** | **EndpointStatusEnum** | The status of the endpoint. | (optional) defaults to undefined|
| **afterCursor** | [**string**] | The cursor to use for pagination. This is the value of the &#x60;next&#x60; link in the previous response. | (optional) defaults to undefined|
| **limit** | [**number**] | The maximum number of endpoints to return in the response. | (optional) defaults to 100|


### Return type

**ListEndpointsResponse**

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
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateEndpointBxml**
> updateEndpointBxml(body)

Updates the BXML for the specified endpoint.

### Example

```typescript
import {
    EndpointsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new EndpointsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let endpointId: string; //BRTC Endpoint ID. (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateEndpointBxml(
    accountId,
    endpointId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **endpointId** | [**string**] | BRTC Endpoint ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


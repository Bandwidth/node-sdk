# PhoneNumberLookupApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAsyncBulkLookup**](#createasyncbulklookup) | **POST** /accounts/{accountId}/phoneNumberLookup/bulk | Create Asynchronous Bulk Number Lookup|
|[**createSyncLookup**](#createsynclookup) | **POST** /accounts/{accountId}/phoneNumberLookup | Create Synchronous Number Lookup|
|[**getAsyncBulkLookup**](#getasyncbulklookup) | **GET** /accounts/{accountId}/phoneNumberLookup/bulk/{requestId} | Get Asynchronous Bulk Number Lookup|

# **createAsyncBulkLookup**
> CreateAsyncBulkLookupResponse createAsyncBulkLookup(asyncLookupRequest)

Creates an asynchronous bulk phone number lookup request. Maximum of 15,000 telephone numbers per request. Use the [Get Asynchronous Bulk Number Lookup](#tag/Phone-Number-Lookup/operation/getAsyncBulkLookup) endpoint to check the status of the request and view the results.

### Example

```typescript
import {
    PhoneNumberLookupApi,
    Configuration,
    AsyncLookupRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new PhoneNumberLookupApi(configuration);

let accountId: string; // (default to undefined)
let asyncLookupRequest: AsyncLookupRequest; //Asynchronous bulk phone number lookup request.

const { status, data } = await apiInstance.createAsyncBulkLookup(
    accountId,
    asyncLookupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **asyncLookupRequest** | **AsyncLookupRequest**| Asynchronous bulk phone number lookup request. | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateAsyncBulkLookupResponse**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |
|**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSyncLookup**
> CreateSyncLookupResponse createSyncLookup(syncLookupRequest)

Creates a synchronous phone number lookup request. Maximum of 100 telephone numbers per request.

### Example

```typescript
import {
    PhoneNumberLookupApi,
    Configuration,
    SyncLookupRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new PhoneNumberLookupApi(configuration);

let accountId: string; // (default to undefined)
let syncLookupRequest: SyncLookupRequest; //Synchronous phone number lookup request.

const { status, data } = await apiInstance.createSyncLookup(
    accountId,
    syncLookupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncLookupRequest** | **SyncLookupRequest**| Synchronous phone number lookup request. | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CreateSyncLookupResponse**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAsyncBulkLookup**
> GetAsyncBulkLookupResponse getAsyncBulkLookup()

Get an existing [Asynchronous Bulk Number Lookup](#tag/Phone-Number-Lookup/operation/createAsyncBulkLookup). Use this endpoint to check the status of the request and view the results.

### Example

```typescript
import {
    PhoneNumberLookupApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new PhoneNumberLookupApi(configuration);

let accountId: string; // (default to undefined)
let requestId: string; // (default to undefined)

const { status, data } = await apiInstance.getAsyncBulkLookup(
    accountId,
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|
| **requestId** | [**string**] |  | defaults to undefined|


### Return type

**GetAsyncBulkLookupResponse**

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


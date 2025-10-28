# PhoneNumberLookupApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLookup**](#createlookup) | **POST** /accounts/{accountId}/tnlookup | Create Lookup|
|[**getLookupStatus**](#getlookupstatus) | **GET** /accounts/{accountId}/tnlookup/{requestId} | Get Lookup Request Status|

# **createLookup**
> CreateLookupResponse createLookup(lookupRequest)

Create a Phone Number Lookup Request.

### Example

```typescript
import {
    PhoneNumberLookupApi,
    Configuration,
    LookupRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new PhoneNumberLookupApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let lookupRequest: LookupRequest; //Phone number lookup request.

const { status, data } = await apiInstance.createLookup(
    accountId,
    lookupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lookupRequest** | **LookupRequest**| Phone number lookup request. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**CreateLookupResponse**

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
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLookupStatus**
> LookupStatus getLookupStatus()

Get an existing Phone Number Lookup Request.

### Example

```typescript
import {
    PhoneNumberLookupApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new PhoneNumberLookupApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let requestId: string; //The phone number lookup request ID from Bandwidth. (default to undefined)

const { status, data } = await apiInstance.getLookupStatus(
    accountId,
    requestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **requestId** | [**string**] | The phone number lookup request ID from Bandwidth. | defaults to undefined|


### Return type

**LookupStatus**

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
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


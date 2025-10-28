# ConferencesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadConferenceRecording**](#downloadconferencerecording) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media | Download Conference Recording|
|[**getConference**](#getconference) | **GET** /accounts/{accountId}/conferences/{conferenceId} | Get Conference Information|
|[**getConferenceMember**](#getconferencemember) | **GET** /accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Get Conference Member|
|[**getConferenceRecording**](#getconferencerecording) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId} | Get Conference Recording Information|
|[**listConferenceRecordings**](#listconferencerecordings) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings | Get Conference Recordings|
|[**listConferences**](#listconferences) | **GET** /accounts/{accountId}/conferences | Get Conferences|
|[**updateConference**](#updateconference) | **POST** /accounts/{accountId}/conferences/{conferenceId} | Update Conference|
|[**updateConferenceBxml**](#updateconferencebxml) | **PUT** /accounts/{accountId}/conferences/{conferenceId}/bxml | Update Conference BXML|
|[**updateConferenceMember**](#updateconferencemember) | **PUT** /accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Update Conference Member|

# **downloadConferenceRecording**
> File downloadConferenceRecording()

Downloads the specified recording file.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.downloadConferenceRecording(
    accountId,
    conferenceId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: audio/vnd.wave, audio/mpeg, application/json


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

# **getConference**
> Conference getConference()

Returns information about the specified conference.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)

const { status, data } = await apiInstance.getConference(
    accountId,
    conferenceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|


### Return type

**Conference**

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
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConferenceMember**
> ConferenceMember getConferenceMember()

Returns information about the specified conference member.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let memberId: string; //Programmable Voice API Conference Member ID. (default to undefined)

const { status, data } = await apiInstance.getConferenceMember(
    accountId,
    conferenceId,
    memberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|
| **memberId** | [**string**] | Programmable Voice API Conference Member ID. | defaults to undefined|


### Return type

**ConferenceMember**

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
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConferenceRecording**
> ConferenceRecordingMetadata getConferenceRecording()

Returns metadata for the specified recording.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.getConferenceRecording(
    accountId,
    conferenceId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


### Return type

**ConferenceRecordingMetadata**

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
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConferenceRecordings**
> Array<ConferenceRecordingMetadata> listConferenceRecordings()

Returns a (potentially empty) list of metadata for the recordings that took place during the specified conference.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)

const { status, data } = await apiInstance.listConferenceRecordings(
    accountId,
    conferenceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|


### Return type

**Array<ConferenceRecordingMetadata>**

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
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listConferences**
> Array<Conference> listConferences()

Returns a max of 1000 conferences, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of conferences in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of conference records.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let name: string; //Filter results by the `name` field. (optional) (default to undefined)
let minCreatedTime: string; //Filter results to conferences which have a `createdTime` after or at `minCreatedTime` (in ISO8601 format). (optional) (default to undefined)
let maxCreatedTime: string; //Filter results to conferences which have a `createdTime` before or at `maxCreatedTime` (in ISO8601 format). (optional) (default to undefined)
let pageSize: number; //Specifies the max number of conferences that will be returned. (optional) (default to 1000)
let pageToken: string; //Not intended for explicit use. To use pagination, follow the links in the `Link` header of the response, as indicated in the endpoint description. (optional) (default to undefined)

const { status, data } = await apiInstance.listConferences(
    accountId,
    name,
    minCreatedTime,
    maxCreatedTime,
    pageSize,
    pageToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **name** | [**string**] | Filter results by the &#x60;name&#x60; field. | (optional) defaults to undefined|
| **minCreatedTime** | [**string**] | Filter results to conferences which have a &#x60;createdTime&#x60; after or at &#x60;minCreatedTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|
| **maxCreatedTime** | [**string**] | Filter results to conferences which have a &#x60;createdTime&#x60; before or at &#x60;maxCreatedTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|
| **pageSize** | [**number**] | Specifies the max number of conferences that will be returned. | (optional) defaults to 1000|
| **pageToken** | [**string**] | Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description. | (optional) defaults to undefined|


### Return type

**Array<Conference>**

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
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateConference**
> updateConference(updateConference)

Update the conference state.

### Example

```typescript
import {
    ConferencesApi,
    Configuration,
    UpdateConference
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let updateConference: UpdateConference; //

const { status, data } = await apiInstance.updateConference(
    accountId,
    conferenceId,
    updateConference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateConference** | **UpdateConference**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Conference was successfully modified. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateConferenceBxml**
> updateConferenceBxml(body)

Update the conference BXML document.

### Example

```typescript
import {
    ConferencesApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateConferenceBxml(
    accountId,
    conferenceId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|


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
|**204** | Conference successfully modified. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateConferenceMember**
> updateConferenceMember(updateConferenceMember)

Updates settings for a particular conference member.

### Example

```typescript
import {
    ConferencesApi,
    Configuration,
    UpdateConferenceMember
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new ConferencesApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let conferenceId: string; //Programmable Voice API Conference ID. (default to undefined)
let memberId: string; //Programmable Voice API Conference Member ID. (default to undefined)
let updateConferenceMember: UpdateConferenceMember; //

const { status, data } = await apiInstance.updateConferenceMember(
    accountId,
    conferenceId,
    memberId,
    updateConferenceMember
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateConferenceMember** | **UpdateConferenceMember**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **conferenceId** | [**string**] | Programmable Voice API Conference ID. | defaults to undefined|
| **memberId** | [**string**] | Programmable Voice API Conference Member ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Conference member was successfully modified. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


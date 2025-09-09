# TranscriptionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteRealTimeTranscription**](#deleterealtimetranscription) | **DELETE** /accounts/{accountId}/calls/{callId}/transcriptions/{transcriptionId} | Delete Real-time Transcription|
|[**getRealTimeTranscription**](#getrealtimetranscription) | **GET** /accounts/{accountId}/calls/{callId}/transcriptions/{transcriptionId} | Get Real-time Transcription|
|[**listRealTimeTranscriptions**](#listrealtimetranscriptions) | **GET** /accounts/{accountId}/calls/{callId}/transcriptions | List Real-time Transcriptions|

# **deleteRealTimeTranscription**
> deleteRealTimeTranscription()

Delete the specified transcription that was created on this call via [startTranscription](/docs/voice/bxml/startTranscription).  Note: After the deletion is requested and a `200` is returned, the transcription will not be accessible anymore. However, it is not deleted immediately. This deletion process, while transparent and irreversible, can take an additional 24 to 48 hours.

### Example

```typescript
import {
    TranscriptionsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TranscriptionsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let transcriptionId: string; //Programmable Voice API Transcription ID. (default to undefined)

const { status, data } = await apiInstance.deleteRealTimeTranscription(
    accountId,
    callId,
    transcriptionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **transcriptionId** | [**string**] | Programmable Voice API Transcription ID. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRealTimeTranscription**
> CallTranscriptionResponse getRealTimeTranscription()

Retrieve the specified transcription that was created on this call via [startTranscription](/docs/voice/bxml/startTranscription).

### Example

```typescript
import {
    TranscriptionsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TranscriptionsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let transcriptionId: string; //Programmable Voice API Transcription ID. (default to undefined)

const { status, data } = await apiInstance.getRealTimeTranscription(
    accountId,
    callId,
    transcriptionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **transcriptionId** | [**string**] | Programmable Voice API Transcription ID. | defaults to undefined|


### Return type

**CallTranscriptionResponse**

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

# **listRealTimeTranscriptions**
> Array<CallTranscriptionMetadata> listRealTimeTranscriptions()

List the transcriptions created on this call via [startTranscription](/docs/voice/bxml/startTranscription).

### Example

```typescript
import {
    TranscriptionsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TranscriptionsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)

const { status, data } = await apiInstance.listRealTimeTranscriptions(
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

**Array<CallTranscriptionMetadata>**

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


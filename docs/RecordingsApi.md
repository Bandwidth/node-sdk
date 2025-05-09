# RecordingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteRecording**](#deleterecording) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Delete Recording|
|[**deleteRecordingMedia**](#deleterecordingmedia) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Delete Recording Media|
|[**deleteRecordingTranscription**](#deleterecordingtranscription) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Delete Transcription|
|[**downloadCallRecording**](#downloadcallrecording) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Download Recording|
|[**getCallRecording**](#getcallrecording) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Get Call Recording|
|[**getRecordingTranscription**](#getrecordingtranscription) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Get Transcription|
|[**listAccountCallRecordings**](#listaccountcallrecordings) | **GET** /accounts/{accountId}/recordings | Get Call Recordings|
|[**listCallRecordings**](#listcallrecordings) | **GET** /accounts/{accountId}/calls/{callId}/recordings | List Call Recordings|
|[**transcribeCallRecording**](#transcribecallrecording) | **POST** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Create Transcription Request|
|[**updateCallRecordingState**](#updatecallrecordingstate) | **PUT** /accounts/{accountId}/calls/{callId}/recording | Update Recording|

# **deleteRecording**
> deleteRecording()

Delete the recording information, media and transcription.  Note: After the deletion is requested and a `204` is returned, neither the recording metadata nor the actual media nor its transcription will be accessible anymore. However, the media of the specified recording is not deleted immediately. This deletion process, while transparent and irreversible, can take an additional 24 to 48 hours.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.deleteRecording(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


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
|**204** | Recording was deleted. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecordingMedia**
> deleteRecordingMedia()

Deletes the specified recording\'s media.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.deleteRecordingMedia(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


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
|**204** | The recording media was successfully deleted. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRecordingTranscription**
> deleteRecordingTranscription()

Deletes the specified recording\'s transcription.  Note: After the deletion is requested and a `204` is returned, the transcription will not be accessible anymore. However, it is not deleted immediately. This deletion process, while transparent and irreversible, can take an additional 24 to 48 hours.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.deleteRecordingTranscription(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


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
|**204** | The transcription was successfully deleted. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadCallRecording**
> File downloadCallRecording()

Downloads the specified recording.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.downloadCallRecording(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


### Return type

**File**

### Authorization

[Basic](../README.md#Basic)

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

# **getCallRecording**
> CallRecordingMetadata getCallRecording()

Returns metadata for the specified recording.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.getCallRecording(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


### Return type

**CallRecordingMetadata**

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

# **getRecordingTranscription**
> RecordingTranscriptions getRecordingTranscription()

Downloads the specified transcription. If the recording was multi-channel, then there will be 2 transcripts. The caller/called party transcript will be the first item while [`<PlayAudio>`](/docs/voice/bxml/playAudio) and [`<SpeakSentence>`](/docs/voice/bxml/speakSentence) transcript will be the second item. During a [`<Transfer>`](/docs/voice/bxml/transfer) the A-leg transcript will be the first item while the B-leg transcript will be the second item.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)

const { status, data } = await apiInstance.getRecordingTranscription(
    accountId,
    callId,
    recordingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


### Return type

**RecordingTranscriptions**

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

# **listAccountCallRecordings**
> Array<CallRecordingMetadata> listAccountCallRecordings()

Returns a list of metadata for the recordings associated with the specified account. The list can be filtered by the optional from, to, minStartTime, and maxStartTime arguments. The list is capped at 1000 entries and may be empty if no recordings match the specified criteria.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let to: string; //Filter results by the `to` field. (optional) (default to undefined)
let from: string; //Filter results by the `from` field. (optional) (default to undefined)
let minStartTime: string; //Filter results to recordings which have a `startTime` after or including `minStartTime` (in ISO8601 format). (optional) (default to undefined)
let maxStartTime: string; //Filter results to recordings which have a `startTime` before `maxStartTime` (in ISO8601 format). (optional) (default to undefined)

const { status, data } = await apiInstance.listAccountCallRecordings(
    accountId,
    to,
    from,
    minStartTime,
    maxStartTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **to** | [**string**] | Filter results by the &#x60;to&#x60; field. | (optional) defaults to undefined|
| **from** | [**string**] | Filter results by the &#x60;from&#x60; field. | (optional) defaults to undefined|
| **minStartTime** | [**string**] | Filter results to recordings which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|
| **maxStartTime** | [**string**] | Filter results to recordings which have a &#x60;startTime&#x60; before &#x60;maxStartTime&#x60; (in ISO8601 format). | (optional) defaults to undefined|


### Return type

**Array<CallRecordingMetadata>**

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

# **listCallRecordings**
> Array<CallRecordingMetadata> listCallRecordings()

Returns a (potentially empty) list of metadata for the recordings that took place during the specified call.

### Example

```typescript
import {
    RecordingsApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)

const { status, data } = await apiInstance.listCallRecordings(
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

**Array<CallRecordingMetadata>**

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

# **transcribeCallRecording**
> transcribeCallRecording(transcribeRecording)

Generate the transcription for a specific recording. Transcription can succeed only for recordings of length greater than 500 milliseconds and less than 4 hours.

### Example

```typescript
import {
    RecordingsApi,
    Configuration,
    TranscribeRecording
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let recordingId: string; //Programmable Voice API Recording ID. (default to undefined)
let transcribeRecording: TranscribeRecording; //

const { status, data } = await apiInstance.transcribeCallRecording(
    accountId,
    callId,
    recordingId,
    transcribeRecording
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transcribeRecording** | **TranscribeRecording**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **callId** | [**string**] | Programmable Voice API Call ID. | defaults to undefined|
| **recordingId** | [**string**] | Programmable Voice API Recording ID. | defaults to undefined|


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
|**204** | Transcription was successfully requested. |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**405** | Method Not Allowed |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCallRecordingState**
> updateCallRecordingState(updateCallRecording)

Pause or resume a recording on an active phone call.

### Example

```typescript
import {
    RecordingsApi,
    Configuration,
    UpdateCallRecording
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new RecordingsApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let callId: string; //Programmable Voice API Call ID. (default to undefined)
let updateCallRecording: UpdateCallRecording; //

const { status, data } = await apiInstance.updateCallRecordingState(
    accountId,
    callId,
    updateCallRecording
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCallRecording** | **UpdateCallRecording**|  | |
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
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  * Retry-After - When you should try your request again. <br>  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


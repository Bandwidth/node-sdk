# MediaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMedia**](#deletemedia) | **DELETE** /users/{accountId}/media/{mediaId} | Delete Media|
|[**getMedia**](#getmedia) | **GET** /users/{accountId}/media/{mediaId} | Get Media|
|[**listMedia**](#listmedia) | **GET** /users/{accountId}/media | List Media|
|[**uploadMedia**](#uploadmedia) | **PUT** /users/{accountId}/media/{mediaId} | Upload Media|

# **deleteMedia**
> deleteMedia()

Deletes a media file from Bandwidth API server. Make sure you don\'t have any application scripts still using the media before you delete.  If you accidentally delete a media file you can immediately upload a new file with the same name.

### Example

```typescript
import {
    MediaApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let mediaId: string; //Media ID to retrieve. (default to undefined)

const { status, data } = await apiInstance.deleteMedia(
    accountId,
    mediaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **mediaId** | [**string**] | Media ID to retrieve. | defaults to undefined|


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
|**406** | Not Acceptable |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMedia**
> File getMedia()

Downloads a media file you previously uploaded.

### Example

```typescript
import {
    MediaApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let mediaId: string; //Media ID to retrieve. (default to undefined)

const { status, data } = await apiInstance.getMedia(
    accountId,
    mediaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **mediaId** | [**string**] | Media ID to retrieve. | defaults to undefined|


### Return type

**File**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**406** | Not Acceptable |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMedia**
> Array<Media> listMedia()

Gets a list of your media files. No query parameters are supported.

### Example

```typescript
import {
    MediaApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let continuationToken: string; //Continuation token used to retrieve subsequent media. (optional) (default to undefined)

const { status, data } = await apiInstance.listMedia(
    accountId,
    continuationToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **continuationToken** | [**string**] | Continuation token used to retrieve subsequent media. | (optional) defaults to undefined|


### Return type

**Array<Media>**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  * Continuation-Token - Continuation token used to retrieve subsequent media. <br>  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**406** | Not Acceptable |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadMedia**
> uploadMedia(body)

Upload a file. You may add headers to the request in order to provide some control to your media file.  If a file is uploaded with the same name as a file that already exists under this account, the previous file will be overwritten.  A list of supported media types can be found [here](https://support.bandwidth.com/hc/en-us/articles/360014128994-What-MMS-file-types-are-supported-).

### Example

```typescript
import {
    MediaApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let mediaId: string; //Media ID to retrieve. (default to undefined)
let body: File; //
let contentType: string; //The media type of the entity-body. (optional) (default to undefined)
let cacheControl: string; //General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadMedia(
    accountId,
    mediaId,
    body,
    contentType,
    cacheControl
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **File**|  | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **mediaId** | [**string**] | Media ID to retrieve. | defaults to undefined|
| **contentType** | [**string**] | The media type of the entity-body. | (optional) defaults to undefined|
| **cacheControl** | [**string**] | General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain. | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, application/ogg, application/pdf, application/rtf, application/zip, application/x-tar, application/xml, application/gzip, application/x-bzip2, application/x-gzip, application/smil, application/javascript, audio/mp4, audio/mpeg, audio/ogg, audio/flac, audio/webm, audio/wav, audio/amr, audio/3gpp, image/bmp, image/gif, image/heic, image/heif, image/jpeg, image/pjpeg, image/png, image/svg+xml, image/tiff, image/webp, image/x-icon, text/css, text/csv, text/calendar, text/html, text/plain, text/javascript, text/vcard, text/vnd.wap.wml, text/xml, video/avi, video/mp4, video/mpeg, video/ogg, video/quicktime, video/webm, video/x-ms-wmv, video/x-flv
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**406** | Not Acceptable |  -  |
|**415** | Unsupported Media Type |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


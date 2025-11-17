# MFAApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateMessagingCode**](#generatemessagingcode) | **POST** /accounts/{accountId}/code/messaging | Messaging Authentication Code|
|[**generateVoiceCode**](#generatevoicecode) | **POST** /accounts/{accountId}/code/voice | Voice Authentication Code|
|[**verifyCode**](#verifycode) | **POST** /accounts/{accountId}/code/verify | Verify Authentication Code|

# **generateMessagingCode**
> MessagingCodeResponse generateMessagingCode(codeRequest)

Send an MFA code via text message (SMS).

### Example

```typescript
import {
    MFAApi,
    Configuration,
    CodeRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MFAApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let codeRequest: CodeRequest; //MFA code request body.

const { status, data } = await apiInstance.generateMessagingCode(
    accountId,
    codeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeRequest** | **CodeRequest**| MFA code request body. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**MessagingCodeResponse**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateVoiceCode**
> VoiceCodeResponse generateVoiceCode(codeRequest)

Send an MFA Code via a phone call.

### Example

```typescript
import {
    MFAApi,
    Configuration,
    CodeRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MFAApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let codeRequest: CodeRequest; //MFA code request body.

const { status, data } = await apiInstance.generateVoiceCode(
    accountId,
    codeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeRequest** | **CodeRequest**| MFA code request body. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**VoiceCodeResponse**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

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
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyCode**
> VerifyCodeResponse verifyCode(verifyCodeRequest)

Verify a previously sent MFA code.

### Example

```typescript
import {
    MFAApi,
    Configuration,
    VerifyCodeRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new MFAApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let verifyCodeRequest: VerifyCodeRequest; //MFA code verify request body.

const { status, data } = await apiInstance.verifyCode(
    accountId,
    verifyCodeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyCodeRequest** | **VerifyCodeRequest**| MFA code verify request body. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**VerifyCodeResponse**

### Authorization

[Basic](../README.md#Basic), [OAuth2](../README.md#OAuth2)

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
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


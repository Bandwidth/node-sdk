# TollFreeVerificationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhookSubscription**](#createwebhooksubscription) | **POST** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions | Create Webhook Subscription|
|[**deleteVerificationRequest**](#deleteverificationrequest) | **DELETE** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Delete a Toll-Free Verification Submission|
|[**deleteWebhookSubscription**](#deletewebhooksubscription) | **DELETE** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions/{id} | Delete Webhook Subscription|
|[**getTollFreeVerificationStatus**](#gettollfreeverificationstatus) | **GET** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Get Toll-Free Verification Status|
|[**listTollFreeUseCases**](#listtollfreeusecases) | **GET** /tollFreeVerification/useCases | List Toll-Free Use Cases|
|[**listWebhookSubscriptions**](#listwebhooksubscriptions) | **GET** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions | List Webhook Subscriptions|
|[**requestTollFreeVerification**](#requesttollfreeverification) | **POST** /accounts/{accountId}/tollFreeVerification | Request Toll-Free Verification|
|[**updateTollFreeVerificationRequest**](#updatetollfreeverificationrequest) | **PUT** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Update Toll-Free Verification Request|
|[**updateWebhookSubscription**](#updatewebhooksubscription) | **PUT** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions/{id} | Update Webhook Subscription|

# **createWebhookSubscription**
> WebhookSubscription createWebhookSubscription(webhookSubscriptionRequestSchema)

Create a new webhook subscription (this webhook will be called for every update on every submission). In addition to a `callbackUrl`, this subscription can provide optional HTTP basic authentication credentials (a username and a password). The returned subscription object will contain an ID that can be used to modify or delete the subscription at a later time.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration,
    WebhookSubscriptionRequestSchema
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let webhookSubscriptionRequestSchema: WebhookSubscriptionRequestSchema; //Information about a webhook that Bandwidth should send upon the completion of event customer is trying to subscribe to.

const { status, data } = await apiInstance.createWebhookSubscription(
    accountId,
    webhookSubscriptionRequestSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookSubscriptionRequestSchema** | **WebhookSubscriptionRequestSchema**| Information about a webhook that Bandwidth should send upon the completion of event customer is trying to subscribe to. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**WebhookSubscription**

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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteVerificationRequest**
> deleteVerificationRequest()

Delete a toll-free verification submission for a toll-free number.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let phoneNumber: string; //Valid Toll-Free telephone number in E.164 format. (default to undefined)

const { status, data } = await apiInstance.deleteVerificationRequest(
    accountId,
    phoneNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **phoneNumber** | [**string**] | Valid Toll-Free telephone number in E.164 format. | defaults to undefined|


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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhookSubscription**
> deleteWebhookSubscription()

Delete a webhook subscription by ID.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let id: string; //Webhook subscription ID (default to undefined)

const { status, data } = await apiInstance.deleteWebhookSubscription(
    accountId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **id** | [**string**] | Webhook subscription ID | defaults to undefined|


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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTollFreeVerificationStatus**
> TfvStatus getTollFreeVerificationStatus()

Gets the verification status for a phone number that is provisioned to your account. Submission information will be appended to the response if it is available.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let phoneNumber: string; //Valid Toll-Free telephone number in E.164 format. (default to undefined)

const { status, data } = await apiInstance.getTollFreeVerificationStatus(
    accountId,
    phoneNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **phoneNumber** | [**string**] | Valid Toll-Free telephone number in E.164 format. | defaults to undefined|


### Return type

**TfvStatus**

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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTollFreeUseCases**
> Array<string> listTollFreeUseCases()

Lists valid toll-free use cases.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

const { status, data } = await apiInstance.listTollFreeUseCases();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string>**

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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listWebhookSubscriptions**
> WebhookSubscriptionsListBody listWebhookSubscriptions()

Lists all webhook subscriptions that are registered to receive status updates for the toll-free verification requests submitted under this account (password will not be returned through this API If `basicAuthentication` is defined, the `password` property of that object will be null).

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)

const { status, data } = await apiInstance.listWebhookSubscriptions(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


### Return type

**WebhookSubscriptionsListBody**

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
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestTollFreeVerification**
> requestTollFreeVerification(verificationRequest)

Submit a request for verification of a toll-free phone number.

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration,
    VerificationRequest
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let verificationRequest: VerificationRequest; //Request for verification of a toll-free phone number.

const { status, data } = await apiInstance.requestTollFreeVerification(
    accountId,
    verificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verificationRequest** | **VerificationRequest**| Request for verification of a toll-free phone number. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|


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
|**202** | Accepted |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTollFreeVerificationRequest**
> updateTollFreeVerificationRequest(tfvSubmissionWrapper)

Updates a toll-free verification request. Submissions are only eligible for resubmission for 7 days within being processed and if resubmission is allowed (resubmitAllowed field is true).

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration,
    TfvSubmissionWrapper
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let phoneNumber: string; //Valid Toll-Free telephone number in E.164 format. (default to undefined)
let tfvSubmissionWrapper: TfvSubmissionWrapper; //Update a request for verification of a toll-free phone number.

const { status, data } = await apiInstance.updateTollFreeVerificationRequest(
    accountId,
    phoneNumber,
    tfvSubmissionWrapper
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tfvSubmissionWrapper** | **TfvSubmissionWrapper**| Update a request for verification of a toll-free phone number. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **phoneNumber** | [**string**] | Valid Toll-Free telephone number in E.164 format. | defaults to undefined|


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
|**202** | Accepted |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhookSubscription**
> WebhookSubscription updateWebhookSubscription(webhookSubscriptionRequestSchema)

Update an existing webhook subscription (`callbackUrl` and `basicAuthentication` can be updated).

### Example

```typescript
import {
    TollFreeVerificationApi,
    Configuration,
    WebhookSubscriptionRequestSchema
} from 'bandwidth-sdk';

const configuration = new Configuration();
const apiInstance = new TollFreeVerificationApi(configuration);

let accountId: string; //Your Bandwidth Account ID. (default to undefined)
let id: string; //Webhook subscription ID (default to undefined)
let webhookSubscriptionRequestSchema: WebhookSubscriptionRequestSchema; //Information about a webhook that Bandwidth should send upon the completion of event customer is trying to subscribe to.

const { status, data } = await apiInstance.updateWebhookSubscription(
    accountId,
    id,
    webhookSubscriptionRequestSchema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookSubscriptionRequestSchema** | **WebhookSubscriptionRequestSchema**| Information about a webhook that Bandwidth should send upon the completion of event customer is trying to subscribe to. | |
| **accountId** | [**string**] | Your Bandwidth Account ID. | defaults to undefined|
| **id** | [**string**] | Webhook subscription ID | defaults to undefined|


### Return type

**WebhookSubscription**

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
|**404** | Cannot find the requested resource. |  -  |
|**405** | Method Not Allowed |  -  |
|**429** | Too Many Requests |  -  |
|**500** | Internal Server Error |  -  |
|**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## bandwidth-sdk

[![Deploy](https://github.com/Bandwidth/node-sdk/actions/workflows/deploy.yml/badge.svg)](https://github.com/Bandwidth/node-sdk/actions/workflows/deploy.yml)

|    **OS**    |  **Node**  |
|:------------:|:----------:|
| Windows 2022 | 18, 20, 22, 24 |
| Windows 2025 | 18, 20, 22, 24 |
| Ubuntu 22.04 | 18, 20, 22, 24 |
| Ubuntu 24.04 | 18, 20, 22, 24 |

#### Available on NPM
```
npm install bandwidth-sdk
```


#### To Run Unit Tests Locally

1. Install Prism
```bash
npm install -g @stoplight/prism-cli
```
2. Start Prism Mock Server with the OpenAPI Spec
```bash
prism mock bandwidth.yml
```
3. Run Tests
```bash
npm run test-unit
```


This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install bandwidth-sdk --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Getting Started

The following is a simple example of how to use this module:

```javascript
import { CallsApi, Configuration } from 'bandwidth-sdk';

const config = new Configuration({
    clientId: BW_CLIENT_ID,
    clientSecret: BW_CLIENT_SECRET
});
const callsApi = new CallsApi(config);

const body = {
    applicationId: BW_VOICE_APPLICATION_ID,
    to: TO_NUMBER,
    from: BW_NUMBER
};

await callsApi.createCall(BW_ACCOUNT_ID, body);
```

More samples can be found in the [Bandwidth Samples](https://github.com/orgs/Bandwidth-Samples/repositories?q=lang%3Ajavascript&type=all) GitHub Organization.

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CallsApi* | [**createCall**](docs/CallsApi.md#createcall) | **POST** /accounts/{accountId}/calls | Create Call
*CallsApi* | [**getCallState**](docs/CallsApi.md#getcallstate) | **GET** /accounts/{accountId}/calls/{callId} | Get Call State Information
*CallsApi* | [**listCalls**](docs/CallsApi.md#listcalls) | **GET** /accounts/{accountId}/calls | Get Calls
*CallsApi* | [**updateCall**](docs/CallsApi.md#updatecall) | **POST** /accounts/{accountId}/calls/{callId} | Update Call
*CallsApi* | [**updateCallBxml**](docs/CallsApi.md#updatecallbxml) | **PUT** /accounts/{accountId}/calls/{callId}/bxml | Update Call BXML
*ConferencesApi* | [**downloadConferenceRecording**](docs/ConferencesApi.md#downloadconferencerecording) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId}/media | Download Conference Recording
*ConferencesApi* | [**getConference**](docs/ConferencesApi.md#getconference) | **GET** /accounts/{accountId}/conferences/{conferenceId} | Get Conference Information
*ConferencesApi* | [**getConferenceMember**](docs/ConferencesApi.md#getconferencemember) | **GET** /accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Get Conference Member
*ConferencesApi* | [**getConferenceRecording**](docs/ConferencesApi.md#getconferencerecording) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings/{recordingId} | Get Conference Recording Information
*ConferencesApi* | [**listConferenceRecordings**](docs/ConferencesApi.md#listconferencerecordings) | **GET** /accounts/{accountId}/conferences/{conferenceId}/recordings | Get Conference Recordings
*ConferencesApi* | [**listConferences**](docs/ConferencesApi.md#listconferences) | **GET** /accounts/{accountId}/conferences | Get Conferences
*ConferencesApi* | [**updateConference**](docs/ConferencesApi.md#updateconference) | **POST** /accounts/{accountId}/conferences/{conferenceId} | Update Conference
*ConferencesApi* | [**updateConferenceBxml**](docs/ConferencesApi.md#updateconferencebxml) | **PUT** /accounts/{accountId}/conferences/{conferenceId}/bxml | Update Conference BXML
*ConferencesApi* | [**updateConferenceMember**](docs/ConferencesApi.md#updateconferencemember) | **PUT** /accounts/{accountId}/conferences/{conferenceId}/members/{memberId} | Update Conference Member
*MFAApi* | [**generateMessagingCode**](docs/MFAApi.md#generatemessagingcode) | **POST** /accounts/{accountId}/code/messaging | Messaging Authentication Code
*MFAApi* | [**generateVoiceCode**](docs/MFAApi.md#generatevoicecode) | **POST** /accounts/{accountId}/code/voice | Voice Authentication Code
*MFAApi* | [**verifyCode**](docs/MFAApi.md#verifycode) | **POST** /accounts/{accountId}/code/verify | Verify Authentication Code
*MediaApi* | [**deleteMedia**](docs/MediaApi.md#deletemedia) | **DELETE** /users/{accountId}/media/{mediaId} | Delete Media
*MediaApi* | [**getMedia**](docs/MediaApi.md#getmedia) | **GET** /users/{accountId}/media/{mediaId} | Get Media
*MediaApi* | [**listMedia**](docs/MediaApi.md#listmedia) | **GET** /users/{accountId}/media | List Media
*MediaApi* | [**uploadMedia**](docs/MediaApi.md#uploadmedia) | **PUT** /users/{accountId}/media/{mediaId} | Upload Media
*MessagesApi* | [**createMessage**](docs/MessagesApi.md#createmessage) | **POST** /users/{accountId}/messages | Create Message
*MessagesApi* | [**listMessages**](docs/MessagesApi.md#listmessages) | **GET** /users/{accountId}/messages | List Messages
*MultiChannelApi* | [**createMultiChannelMessage**](docs/MultiChannelApi.md#createmultichannelmessage) | **POST** /users/{accountId}/messages/multiChannel | Create Multi-Channel Message
*PhoneNumberLookupApi* | [**createAsyncBulkLookup**](docs/PhoneNumberLookupApi.md#createasyncbulklookup) | **POST** /accounts/{accountId}/phoneNumberLookup/bulk | Create Asynchronous Bulk Number Lookup
*PhoneNumberLookupApi* | [**createSyncLookup**](docs/PhoneNumberLookupApi.md#createsynclookup) | **POST** /accounts/{accountId}/phoneNumberLookup | Create Synchronous Number Lookup
*PhoneNumberLookupApi* | [**getAsyncBulkLookup**](docs/PhoneNumberLookupApi.md#getasyncbulklookup) | **GET** /accounts/{accountId}/phoneNumberLookup/bulk/{requestId} | Get Asynchronous Bulk Number Lookup
*RecordingsApi* | [**deleteRecording**](docs/RecordingsApi.md#deleterecording) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Delete Recording
*RecordingsApi* | [**deleteRecordingMedia**](docs/RecordingsApi.md#deleterecordingmedia) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Delete Recording Media
*RecordingsApi* | [**deleteRecordingTranscription**](docs/RecordingsApi.md#deleterecordingtranscription) | **DELETE** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Delete Transcription
*RecordingsApi* | [**downloadCallRecording**](docs/RecordingsApi.md#downloadcallrecording) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/media | Download Recording
*RecordingsApi* | [**getCallRecording**](docs/RecordingsApi.md#getcallrecording) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId} | Get Call Recording
*RecordingsApi* | [**getRecordingTranscription**](docs/RecordingsApi.md#getrecordingtranscription) | **GET** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Get Transcription
*RecordingsApi* | [**listAccountCallRecordings**](docs/RecordingsApi.md#listaccountcallrecordings) | **GET** /accounts/{accountId}/recordings | Get Call Recordings
*RecordingsApi* | [**listCallRecordings**](docs/RecordingsApi.md#listcallrecordings) | **GET** /accounts/{accountId}/calls/{callId}/recordings | List Call Recordings
*RecordingsApi* | [**transcribeCallRecording**](docs/RecordingsApi.md#transcribecallrecording) | **POST** /accounts/{accountId}/calls/{callId}/recordings/{recordingId}/transcription | Create Transcription Request
*RecordingsApi* | [**updateCallRecordingState**](docs/RecordingsApi.md#updatecallrecordingstate) | **PUT** /accounts/{accountId}/calls/{callId}/recording | Update Recording
*StatisticsApi* | [**getStatistics**](docs/StatisticsApi.md#getstatistics) | **GET** /accounts/{accountId}/statistics | Get Account Statistics
*TollFreeVerificationApi* | [**createWebhookSubscription**](docs/TollFreeVerificationApi.md#createwebhooksubscription) | **POST** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions | Create Webhook Subscription
*TollFreeVerificationApi* | [**deleteVerificationRequest**](docs/TollFreeVerificationApi.md#deleteverificationrequest) | **DELETE** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Delete a Toll-Free Verification Submission
*TollFreeVerificationApi* | [**deleteWebhookSubscription**](docs/TollFreeVerificationApi.md#deletewebhooksubscription) | **DELETE** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions/{id} | Delete Webhook Subscription
*TollFreeVerificationApi* | [**getTollFreeVerificationStatus**](docs/TollFreeVerificationApi.md#gettollfreeverificationstatus) | **GET** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Get Toll-Free Verification Status
*TollFreeVerificationApi* | [**listTollFreeUseCases**](docs/TollFreeVerificationApi.md#listtollfreeusecases) | **GET** /tollFreeVerification/useCases | List Toll-Free Use Cases
*TollFreeVerificationApi* | [**listWebhookSubscriptions**](docs/TollFreeVerificationApi.md#listwebhooksubscriptions) | **GET** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions | List Webhook Subscriptions
*TollFreeVerificationApi* | [**requestTollFreeVerification**](docs/TollFreeVerificationApi.md#requesttollfreeverification) | **POST** /accounts/{accountId}/tollFreeVerification | Request Toll-Free Verification
*TollFreeVerificationApi* | [**updateTollFreeVerificationRequest**](docs/TollFreeVerificationApi.md#updatetollfreeverificationrequest) | **PUT** /accounts/{accountId}/phoneNumbers/{phoneNumber}/tollFreeVerification | Update Toll-Free Verification Request
*TollFreeVerificationApi* | [**updateWebhookSubscription**](docs/TollFreeVerificationApi.md#updatewebhooksubscription) | **PUT** /accounts/{accountId}/tollFreeVerification/webhooks/subscriptions/{id} | Update Webhook Subscription
*TranscriptionsApi* | [**deleteRealTimeTranscription**](docs/TranscriptionsApi.md#deleterealtimetranscription) | **DELETE** /accounts/{accountId}/calls/{callId}/transcriptions/{transcriptionId} | Delete Real-time Transcription
*TranscriptionsApi* | [**getRealTimeTranscription**](docs/TranscriptionsApi.md#getrealtimetranscription) | **GET** /accounts/{accountId}/calls/{callId}/transcriptions/{transcriptionId} | Get Real-time Transcription
*TranscriptionsApi* | [**listRealTimeTranscriptions**](docs/TranscriptionsApi.md#listrealtimetranscriptions) | **GET** /accounts/{accountId}/calls/{callId}/transcriptions | List Real-time Transcriptions


### Documentation For Models

 - [AccountStatistics](docs/AccountStatistics.md)
 - [AdditionalDenialReason](docs/AdditionalDenialReason.md)
 - [Address](docs/Address.md)
 - [AnswerCallback](docs/AnswerCallback.md)
 - [AsyncLookupRequest](docs/AsyncLookupRequest.md)
 - [BlockedWebhook](docs/BlockedWebhook.md)
 - [BridgeCompleteCallback](docs/BridgeCompleteCallback.md)
 - [BridgeTargetCompleteCallback](docs/BridgeTargetCompleteCallback.md)
 - [BusinessEntityTypeEnum](docs/BusinessEntityTypeEnum.md)
 - [BusinessRegistrationTypeEnum](docs/BusinessRegistrationTypeEnum.md)
 - [CallDirectionEnum](docs/CallDirectionEnum.md)
 - [CallRecordingMetadata](docs/CallRecordingMetadata.md)
 - [CallState](docs/CallState.md)
 - [CallStateEnum](docs/CallStateEnum.md)
 - [CallTranscription](docs/CallTranscription.md)
 - [CallTranscriptionDetectedLanguageEnum](docs/CallTranscriptionDetectedLanguageEnum.md)
 - [CallTranscriptionMetadata](docs/CallTranscriptionMetadata.md)
 - [CallTranscriptionResponse](docs/CallTranscriptionResponse.md)
 - [CallTranscriptionTrackEnum](docs/CallTranscriptionTrackEnum.md)
 - [Callback](docs/Callback.md)
 - [CallbackMethodEnum](docs/CallbackMethodEnum.md)
 - [CardWidthEnum](docs/CardWidthEnum.md)
 - [CodeRequest](docs/CodeRequest.md)
 - [CompletedLookupStatusEnum](docs/CompletedLookupStatusEnum.md)
 - [Conference](docs/Conference.md)
 - [ConferenceCompletedCallback](docs/ConferenceCompletedCallback.md)
 - [ConferenceCreatedCallback](docs/ConferenceCreatedCallback.md)
 - [ConferenceMember](docs/ConferenceMember.md)
 - [ConferenceMemberExitCallback](docs/ConferenceMemberExitCallback.md)
 - [ConferenceMemberJoinCallback](docs/ConferenceMemberJoinCallback.md)
 - [ConferenceRecordingAvailableCallback](docs/ConferenceRecordingAvailableCallback.md)
 - [ConferenceRecordingMetadata](docs/ConferenceRecordingMetadata.md)
 - [ConferenceRedirectCallback](docs/ConferenceRedirectCallback.md)
 - [ConferenceStateEnum](docs/ConferenceStateEnum.md)
 - [Contact](docs/Contact.md)
 - [CreateAsyncBulkLookupResponse](docs/CreateAsyncBulkLookupResponse.md)
 - [CreateAsyncBulkLookupResponseData](docs/CreateAsyncBulkLookupResponseData.md)
 - [CreateCall](docs/CreateCall.md)
 - [CreateCallResponse](docs/CreateCallResponse.md)
 - [CreateMessageRequestError](docs/CreateMessageRequestError.md)
 - [CreateMultiChannelMessageResponse](docs/CreateMultiChannelMessageResponse.md)
 - [CreateSyncLookupResponse](docs/CreateSyncLookupResponse.md)
 - [CreateSyncLookupResponseData](docs/CreateSyncLookupResponseData.md)
 - [DeactivationEventEnum](docs/DeactivationEventEnum.md)
 - [DisconnectCallback](docs/DisconnectCallback.md)
 - [Diversion](docs/Diversion.md)
 - [DtmfCallback](docs/DtmfCallback.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [FailureWebhook](docs/FailureWebhook.md)
 - [FieldError](docs/FieldError.md)
 - [FileFormatEnum](docs/FileFormatEnum.md)
 - [GatherCallback](docs/GatherCallback.md)
 - [GetAsyncBulkLookupResponse](docs/GetAsyncBulkLookupResponse.md)
 - [GetAsyncBulkLookupResponseData](docs/GetAsyncBulkLookupResponseData.md)
 - [InProgressLookupStatusEnum](docs/InProgressLookupStatusEnum.md)
 - [InboundCallback](docs/InboundCallback.md)
 - [InboundCallbackMessage](docs/InboundCallbackMessage.md)
 - [InboundCallbackTypeEnum](docs/InboundCallbackTypeEnum.md)
 - [InitiateCallback](docs/InitiateCallback.md)
 - [LatestMessageDeliveryStatusEnum](docs/LatestMessageDeliveryStatusEnum.md)
 - [LineTypeEnum](docs/LineTypeEnum.md)
 - [Link](docs/Link.md)
 - [LinkSchema](docs/LinkSchema.md)
 - [LinksObject](docs/LinksObject.md)
 - [ListMessageDirectionEnum](docs/ListMessageDirectionEnum.md)
 - [ListMessageItem](docs/ListMessageItem.md)
 - [LookupErrorResponse](docs/LookupErrorResponse.md)
 - [LookupErrorSchema](docs/LookupErrorSchema.md)
 - [LookupErrorSchemaMeta](docs/LookupErrorSchemaMeta.md)
 - [LookupResult](docs/LookupResult.md)
 - [MachineDetectionCompleteCallback](docs/MachineDetectionCompleteCallback.md)
 - [MachineDetectionConfiguration](docs/MachineDetectionConfiguration.md)
 - [MachineDetectionModeEnum](docs/MachineDetectionModeEnum.md)
 - [MachineDetectionResult](docs/MachineDetectionResult.md)
 - [Media](docs/Media.md)
 - [Message](docs/Message.md)
 - [MessageDirectionEnum](docs/MessageDirectionEnum.md)
 - [MessageRequest](docs/MessageRequest.md)
 - [MessageStatusEnum](docs/MessageStatusEnum.md)
 - [MessageTypeEnum](docs/MessageTypeEnum.md)
 - [MessagesList](docs/MessagesList.md)
 - [MessagingCodeResponse](docs/MessagingCodeResponse.md)
 - [MessagingRequestError](docs/MessagingRequestError.md)
 - [MfaForbiddenRequestError](docs/MfaForbiddenRequestError.md)
 - [MfaRequestError](docs/MfaRequestError.md)
 - [MfaUnauthorizedRequestError](docs/MfaUnauthorizedRequestError.md)
 - [MmsMessageContent](docs/MmsMessageContent.md)
 - [MmsMessageContentFile](docs/MmsMessageContentFile.md)
 - [ModelError](docs/ModelError.md)
 - [MultiChannelAction](docs/MultiChannelAction.md)
 - [MultiChannelActionCalendarEvent](docs/MultiChannelActionCalendarEvent.md)
 - [MultiChannelChannelListMMSObject](docs/MultiChannelChannelListMMSObject.md)
 - [MultiChannelChannelListMMSResponseObject](docs/MultiChannelChannelListMMSResponseObject.md)
 - [MultiChannelChannelListObjectBase](docs/MultiChannelChannelListObjectBase.md)
 - [MultiChannelChannelListOwnerObject](docs/MultiChannelChannelListOwnerObject.md)
 - [MultiChannelChannelListRBMObject](docs/MultiChannelChannelListRBMObject.md)
 - [MultiChannelChannelListRBMObjectAllOfContent](docs/MultiChannelChannelListRBMObjectAllOfContent.md)
 - [MultiChannelChannelListRBMResponseObject](docs/MultiChannelChannelListRBMResponseObject.md)
 - [MultiChannelChannelListRequestObject](docs/MultiChannelChannelListRequestObject.md)
 - [MultiChannelChannelListResponseObject](docs/MultiChannelChannelListResponseObject.md)
 - [MultiChannelChannelListSMSObject](docs/MultiChannelChannelListSMSObject.md)
 - [MultiChannelChannelListSMSResponseObject](docs/MultiChannelChannelListSMSResponseObject.md)
 - [MultiChannelError](docs/MultiChannelError.md)
 - [MultiChannelMessageChannelEnum](docs/MultiChannelMessageChannelEnum.md)
 - [MultiChannelMessageContent](docs/MultiChannelMessageContent.md)
 - [MultiChannelMessageRequest](docs/MultiChannelMessageRequest.md)
 - [MultiChannelMessageResponseData](docs/MultiChannelMessageResponseData.md)
 - [OptInWorkflow](docs/OptInWorkflow.md)
 - [PageInfo](docs/PageInfo.md)
 - [PriorityEnum](docs/PriorityEnum.md)
 - [ProductTypeEnum](docs/ProductTypeEnum.md)
 - [RbmActionBase](docs/RbmActionBase.md)
 - [RbmActionDial](docs/RbmActionDial.md)
 - [RbmActionOpenUrl](docs/RbmActionOpenUrl.md)
 - [RbmActionTypeEnum](docs/RbmActionTypeEnum.md)
 - [RbmActionViewLocation](docs/RbmActionViewLocation.md)
 - [RbmCardContent](docs/RbmCardContent.md)
 - [RbmCardContentMedia](docs/RbmCardContentMedia.md)
 - [RbmLocationResponse](docs/RbmLocationResponse.md)
 - [RbmMediaHeightEnum](docs/RbmMediaHeightEnum.md)
 - [RbmMessageCarouselCard](docs/RbmMessageCarouselCard.md)
 - [RbmMessageContentFile](docs/RbmMessageContentFile.md)
 - [RbmMessageContentRichCard](docs/RbmMessageContentRichCard.md)
 - [RbmMessageContentText](docs/RbmMessageContentText.md)
 - [RbmMessageMedia](docs/RbmMessageMedia.md)
 - [RbmOpenUrlEnum](docs/RbmOpenUrlEnum.md)
 - [RbmStandaloneCard](docs/RbmStandaloneCard.md)
 - [RbmSuggestionResponse](docs/RbmSuggestionResponse.md)
 - [RbmWebViewEnum](docs/RbmWebViewEnum.md)
 - [RecordingAvailableCallback](docs/RecordingAvailableCallback.md)
 - [RecordingCompleteCallback](docs/RecordingCompleteCallback.md)
 - [RecordingStateEnum](docs/RecordingStateEnum.md)
 - [RecordingTranscriptionMetadata](docs/RecordingTranscriptionMetadata.md)
 - [RecordingTranscriptions](docs/RecordingTranscriptions.md)
 - [RedirectCallback](docs/RedirectCallback.md)
 - [RedirectMethodEnum](docs/RedirectMethodEnum.md)
 - [SmsMessageContent](docs/SmsMessageContent.md)
 - [StandaloneCardOrientationEnum](docs/StandaloneCardOrientationEnum.md)
 - [StatusCallback](docs/StatusCallback.md)
 - [StatusCallbackMessage](docs/StatusCallbackMessage.md)
 - [StatusCallbackTypeEnum](docs/StatusCallbackTypeEnum.md)
 - [StirShaken](docs/StirShaken.md)
 - [SyncLookupRequest](docs/SyncLookupRequest.md)
 - [TelephoneNumber](docs/TelephoneNumber.md)
 - [TfvBasicAuthentication](docs/TfvBasicAuthentication.md)
 - [TfvCallbackStatusEnum](docs/TfvCallbackStatusEnum.md)
 - [TfvError](docs/TfvError.md)
 - [TfvStatus](docs/TfvStatus.md)
 - [TfvStatusEnum](docs/TfvStatusEnum.md)
 - [TfvSubmissionInfo](docs/TfvSubmissionInfo.md)
 - [TfvSubmissionWrapper](docs/TfvSubmissionWrapper.md)
 - [ThumbnailAlignmentEnum](docs/ThumbnailAlignmentEnum.md)
 - [TranscribeRecording](docs/TranscribeRecording.md)
 - [Transcription](docs/Transcription.md)
 - [TranscriptionAvailableCallback](docs/TranscriptionAvailableCallback.md)
 - [TransferAnswerCallback](docs/TransferAnswerCallback.md)
 - [TransferCompleteCallback](docs/TransferCompleteCallback.md)
 - [TransferDisconnectCallback](docs/TransferDisconnectCallback.md)
 - [UpdateCall](docs/UpdateCall.md)
 - [UpdateCallRecording](docs/UpdateCallRecording.md)
 - [UpdateConference](docs/UpdateConference.md)
 - [UpdateConferenceMember](docs/UpdateConferenceMember.md)
 - [VerificationDenialWebhook](docs/VerificationDenialWebhook.md)
 - [VerificationRequest](docs/VerificationRequest.md)
 - [VerificationUpdateRequest](docs/VerificationUpdateRequest.md)
 - [VerificationWebhook](docs/VerificationWebhook.md)
 - [VerifyCodeRequest](docs/VerifyCodeRequest.md)
 - [VerifyCodeResponse](docs/VerifyCodeResponse.md)
 - [VoiceApiError](docs/VoiceApiError.md)
 - [VoiceCodeResponse](docs/VoiceCodeResponse.md)
 - [WebhookSubscription](docs/WebhookSubscription.md)
 - [WebhookSubscriptionBasicAuthentication](docs/WebhookSubscriptionBasicAuthentication.md)
 - [WebhookSubscriptionRequestSchema](docs/WebhookSubscriptionRequestSchema.md)
 - [WebhookSubscriptionTypeEnum](docs/WebhookSubscriptionTypeEnum.md)
 - [WebhookSubscriptionsListBody](docs/WebhookSubscriptionsListBody.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="Basic"></a>
### Basic

- **Type**: HTTP basic authentication

<a id="OAuth2"></a>
### OAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


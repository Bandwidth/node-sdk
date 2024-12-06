/* tslint:disable */
/* eslint-disable */
/**
 * Bandwidth
 * Bandwidth\'s Communication APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: letstalk@bandwidth.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "http://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected axios: AxiosInstance = globalAxios) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath ?? basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

interface ServerMap {
    [key: string]: {
        url: string,
        description: string,
    }[];
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {
    "CallsApi.createCall": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "CallsApi.getCallState": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "CallsApi.listCalls": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "CallsApi.updateCall": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "CallsApi.updateCallBxml": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.downloadConferenceRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.getConference": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.getConferenceMember": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.getConferenceRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.listConferenceRecordings": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.listConferences": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.updateConference": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.updateConferenceBxml": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "ConferencesApi.updateConferenceMember": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MFAApi.generateMessagingCode": [
        {
            url: "https://mfa.bandwidth.com/api/v1",
            description: "Production",
        }
    ],
    "MFAApi.generateVoiceCode": [
        {
            url: "https://mfa.bandwidth.com/api/v1",
            description: "Production",
        }
    ],
    "MFAApi.verifyCode": [
        {
            url: "https://mfa.bandwidth.com/api/v1",
            description: "Production",
        }
    ],
    "MediaApi.deleteMedia": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MediaApi.getMedia": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MediaApi.listMedia": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MediaApi.uploadMedia": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MessagesApi.createMessage": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "MessagesApi.listMessages": [
        {
            url: "https://messaging.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "PhoneNumberLookupApi.createLookup": [
        {
            url: "https://numbers.bandwidth.com/api/v1",
            description: "Production",
        }
    ],
    "PhoneNumberLookupApi.getLookupStatus": [
        {
            url: "https://numbers.bandwidth.com/api/v1",
            description: "Production",
        }
    ],
    "RecordingsApi.deleteRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.deleteRecordingMedia": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.deleteRecordingTranscription": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.downloadCallRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.getCallRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.getRecordingTranscription": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.listAccountCallRecordings": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.listCallRecordings": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.transcribeCallRecording": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "RecordingsApi.updateCallRecordingState": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "StatisticsApi.getStatistics": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "TranscriptionsApi.deleteRealTimeTranscription": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "TranscriptionsApi.getRealTimeTranscription": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
    "TranscriptionsApi.listRealTimeTranscriptions": [
        {
            url: "https://voice.bandwidth.com/api/v2",
            description: "Production",
        }
    ],
}

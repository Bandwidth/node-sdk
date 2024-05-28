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


// May contain unused imports in some cases
// @ts-ignore
import type { CallDirectionEnum } from './call-direction-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { FileFormatEnum } from './file-format-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { Transcription } from './transcription';

/**
 * The Transcription Available event is sent when the recording transcription is available to be downloaded.
 * @export
 * @interface TranscriptionAvailableCallback
 */
export interface TranscriptionAvailableCallback {
    /**
     * The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'eventType'?: string;
    /**
     * The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'eventTime'?: string;
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'accountId'?: string;
    /**
     * The id of the application associated with the call.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'applicationId'?: string;
    /**
     * The provided identifier of the caller: can be a phone number in E.164 format (e.g. +15555555555) or one of Private, Restricted, Unavailable, or Anonymous.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'from'?: string;
    /**
     * The phone number that received the call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'to'?: string;
    /**
     * 
     * @type {CallDirectionEnum}
     * @memberof TranscriptionAvailableCallback
     */
    'direction'?: CallDirectionEnum;
    /**
     * The call id associated with the event.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'callId'?: string;
    /**
     * The URL of the call associated with the event.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'callUrl'?: string;
    /**
     * The URL that can be used to download the recording. Only present if the recording is finished and may be downloaded.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'mediaUrl'?: string | null;
    /**
     * (optional) If the event is related to the B leg of a <Transfer>, the call id of the original call leg that executed the <Transfer>. Otherwise, this field will not be present.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'parentCallId'?: string;
    /**
     * The unique ID of this recording
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'recordingId'?: string;
    /**
     * (optional) If call queueing is enabled and this is an outbound call, time the call was queued, in ISO 8601 format.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'enqueuedTime'?: string | null;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'startTime'?: string;
    /**
     * The time that the recording ended in ISO-8601 format
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'endTime'?: string;
    /**
     * The duration of the recording in ISO-8601 format
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'duration'?: string;
    /**
     * 
     * @type {FileFormatEnum}
     * @memberof TranscriptionAvailableCallback
     */
    'fileFormat'?: FileFormatEnum;
    /**
     * (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'tag'?: string | null;
    /**
     * 
     * @type {Transcription}
     * @memberof TranscriptionAvailableCallback
     */
    'transcription'?: Transcription;
    /**
     * The phone number used as the from field of the B-leg call, in E.164 format (e.g. +15555555555) or one of Restricted, Anonymous, Private, or Unavailable.
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'transferCallerId'?: string;
    /**
     * The phone number used as the to field of the B-leg call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof TranscriptionAvailableCallback
     */
    'transferTo'?: string;
}




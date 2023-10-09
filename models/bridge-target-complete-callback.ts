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
import { CallDirectionEnum } from './call-direction-enum';

/**
 * If the originating call leaves the <Bridge>, then this callback is sent to the bridgeTargetCompleteUrl, and the BXML returned in it is executed on the target call. If this webhook is sent, the Bridge Complete webhook is NOT sent.
 * @export
 * @interface BridgeTargetCompleteCallback
 */
export interface BridgeTargetCompleteCallback {
    /**
     * The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'eventType'?: string;
    /**
     * The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'eventTime'?: string;
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'accountId'?: string;
    /**
     * The id of the application associated with the call.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'applicationId'?: string;
    /**
     * The provided identifier of the caller: can be a phone number in E.164 format (e.g. +15555555555) or one of Private, Restricted, Unavailable, or Anonymous.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'from'?: string;
    /**
     * The phone number that received the call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'to'?: string;
    /**
     * 
     * @type {CallDirectionEnum}
     * @memberof BridgeTargetCompleteCallback
     */
    'direction'?: CallDirectionEnum;
    /**
     * The call id associated with the event.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'callId'?: string;
    /**
     * The URL of the call associated with the event.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'callUrl'?: string;
    /**
     * (optional) If call queueing is enabled and this is an outbound call, time the call was queued, in ISO 8601 format.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'enqueuedTime'?: string | null;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'startTime'?: string;
    /**
     * Time the call was answered, in ISO 8601 format.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'answerTime'?: string | null;
    /**
     * (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present.
     * @type {string}
     * @memberof BridgeTargetCompleteCallback
     */
    'tag'?: string | null;
}




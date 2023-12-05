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
 * When processing a <Transfer> verb, this event is sent when a called party (B-leg) answers. The event is sent to the endpoint specified in the transferAnswerUrl attribute of the <PhoneNumber> tag that answered. BXML returned by this callback will be executed for the called party only. After all BXML has been executed, the called party will be bridged to the original call. Most BXML verbs are allowed in response to a transferAnswer event, but some are not allowed.
 * @export
 * @interface TransferAnswerCallback
 */
export interface TransferAnswerCallback {
    /**
     * The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'eventType'?: string;
    /**
     * The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'eventTime'?: string;
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'accountId'?: string;
    /**
     * The id of the application associated with the call.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'applicationId'?: string;
    /**
     * The provided identifier of the caller: can be a phone number in E.164 format (e.g. +15555555555) or one of Private, Restricted, Unavailable, or Anonymous.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'from'?: string;
    /**
     * The phone number that received the call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'to'?: string;
    /**
     * 
     * @type {CallDirectionEnum}
     * @memberof TransferAnswerCallback
     */
    'direction'?: CallDirectionEnum;
    /**
     * The call id associated with the event.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'callId'?: string;
    /**
     * The URL of the call associated with the event.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'callUrl'?: string;
    /**
     * (optional) If call queueing is enabled and this is an outbound call, time the call was queued, in ISO 8601 format.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'enqueuedTime'?: string | null;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'startTime'?: string;
    /**
     * Time the call was answered, in ISO 8601 format.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'answerTime'?: string | null;
    /**
     * (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'tag'?: string | null;
    /**
     * The phone number used as the from field of the B-leg call, in E.164 format (e.g. +15555555555) or one of Restricted, Anonymous, Private, or Unavailable.
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'transferCallerId'?: string;
    /**
     * The phone number used as the to field of the B-leg call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof TransferAnswerCallback
     */
    'transferTo'?: string;
}




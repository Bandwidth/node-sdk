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
import type { Diversion } from './diversion';
// May contain unused imports in some cases
// @ts-ignore
import type { StirShaken } from './stir-shaken';

/**
 * The Initiate event is fired when an inbound call is received for a Telephone Number on your Account. It is sent to the URL specified in the application associated with the location (sip-peer) that the called telephone number belongs to.
 * @export
 * @interface InitiateCallback
 */
export interface InitiateCallback {
    /**
     * The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect.
     * @type {string}
     * @memberof InitiateCallback
     */
    'eventType'?: string;
    /**
     * The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution.
     * @type {string}
     * @memberof InitiateCallback
     */
    'eventTime'?: string;
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof InitiateCallback
     */
    'accountId'?: string;
    /**
     * The id of the application associated with the call.
     * @type {string}
     * @memberof InitiateCallback
     */
    'applicationId'?: string;
    /**
     * The provided identifier of the caller: can be a phone number in E.164 format (e.g. +15555555555) or one of Private, Restricted, Unavailable, or Anonymous.
     * @type {string}
     * @memberof InitiateCallback
     */
    'from'?: string;
    /**
     * The phone number that received the call, in E.164 format (e.g. +15555555555).
     * @type {string}
     * @memberof InitiateCallback
     */
    'to'?: string;
    /**
     * 
     * @type {CallDirectionEnum}
     * @memberof InitiateCallback
     */
    'direction'?: CallDirectionEnum;
    /**
     * The call id associated with the event.
     * @type {string}
     * @memberof InitiateCallback
     */
    'callId'?: string;
    /**
     * The URL of the call associated with the event.
     * @type {string}
     * @memberof InitiateCallback
     */
    'callUrl'?: string;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof InitiateCallback
     */
    'startTime'?: string;
    /**
     * 
     * @type {Diversion}
     * @memberof InitiateCallback
     */
    'diversion'?: Diversion;
    /**
     * 
     * @type {StirShaken}
     * @memberof InitiateCallback
     */
    'stirShaken'?: StirShaken;
}




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
import type { FileFormatEnum } from './file-format-enum';

/**
 * The Conference Recording Available event is sent after a conference recording has been processed. It indicates that the recording is available for download.
 * @export
 * @interface ConferenceRecordingAvailableCallback
 */
export interface ConferenceRecordingAvailableCallback {
    /**
     * The event type, value can be one of the following: answer, bridgeComplete, bridgeTargetComplete, conferenceCreated, conferenceRedirect, conferenceMemberJoin, conferenceMemberExit, conferenceCompleted, conferenceRecordingAvailable, disconnect, dtmf, gather, initiate, machineDetectionComplete, recordingComplete, recordingAvailable, redirect, transcriptionAvailable, transferAnswer, transferComplete, transferDisconnect.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'eventType'?: string;
    /**
     * The approximate UTC date and time when the event was generated by the Bandwidth server, in ISO 8601 format. This may not be exactly the time of event execution.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'eventTime'?: string;
    /**
     * The unique, Bandwidth-generated ID of the conference that was recorded
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'conferenceId'?: string;
    /**
     * The user-specified name of the conference that was recorded
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'name'?: string;
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'accountId'?: string;
    /**
     * The unique ID of this recording
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'recordingId'?: string;
    /**
     * Always `1` for conference recordings; multi-channel recordings are not supported on conferences.
     * @type {number}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'channels'?: number;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'startTime'?: string;
    /**
     * The time that the recording ended in ISO-8601 format
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'endTime'?: string;
    /**
     * The duration of the recording in ISO-8601 format
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'duration'?: string;
    /**
     * 
     * @type {FileFormatEnum}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'fileFormat'?: FileFormatEnum;
    /**
     * The URL that can be used to download the recording. Only present if the recording is finished and may be downloaded.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'mediaUrl'?: string | null;
    /**
     * (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'tag'?: string | null;
    /**
     * The current status of the process. For recording, current possible values are \'processing\', \'partial\', \'complete\', \'deleted\', and \'error\'. For transcriptions, current possible values are \'none\', \'processing\', \'available\', \'error\', \'timeout\', \'file-size-too-big\', and \'file-size-too-small\'. Additional states may be added in the future, so your application must be tolerant of unknown values.
     * @type {string}
     * @memberof ConferenceRecordingAvailableCallback
     */
    'status'?: string;
}




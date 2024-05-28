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
 * 
 * @export
 * @interface ConferenceRecordingMetadata
 */
export interface ConferenceRecordingMetadata {
    /**
     * The user account associated with the call.
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'accountId'?: string;
    /**
     * The unique, Bandwidth-generated ID of the conference that was recorded
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'conferenceId'?: string;
    /**
     * The user-specified name of the conference that was recorded
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'name'?: string;
    /**
     * The unique ID of this recording
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'recordingId'?: string;
    /**
     * The duration of the recording in ISO-8601 format
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'duration'?: string;
    /**
     * Always `1` for conference recordings; multi-channel recordings are not supported on conferences.
     * @type {number}
     * @memberof ConferenceRecordingMetadata
     */
    'channels'?: number;
    /**
     * Time the call was started, in ISO 8601 format.
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'startTime'?: string;
    /**
     * The time that the recording ended in ISO-8601 format
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'endTime'?: string;
    /**
     * 
     * @type {FileFormatEnum}
     * @memberof ConferenceRecordingMetadata
     */
    'fileFormat'?: FileFormatEnum;
    /**
     * The current status of the process. For recording, current possible values are \'processing\', \'partial\', \'complete\', \'deleted\', and \'error\'. For transcriptions, current possible values are \'none\', \'processing\', \'available\', \'error\', \'timeout\', \'file-size-too-big\', and \'file-size-too-small\'. Additional states may be added in the future, so your application must be tolerant of unknown values.
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'status'?: string;
    /**
     * The URL that can be used to download the recording. Only present if the recording is finished and may be downloaded.
     * @type {string}
     * @memberof ConferenceRecordingMetadata
     */
    'mediaUrl'?: string | null;
}




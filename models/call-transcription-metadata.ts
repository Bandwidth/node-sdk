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



/**
 * 
 * @export
 * @interface CallTranscriptionMetadata
 */
export interface CallTranscriptionMetadata {
    /**
     * The programmable voice API transcription ID.
     * @type {string}
     * @memberof CallTranscriptionMetadata
     */
    'transcriptionId'?: string;
    /**
     * The programmable voice API transcription name. This name could be provided by the user when creating the transcription.
     * @type {string}
     * @memberof CallTranscriptionMetadata
     */
    'transcriptionName'?: string;
    /**
     * A URL that may be used to retrieve the transcription itself. This points to the [Get Call Transcription](/apis/voice/#operation/getCallTranscription) endpoint.
     * @type {string}
     * @memberof CallTranscriptionMetadata
     */
    'transcriptionUrl'?: string;
}


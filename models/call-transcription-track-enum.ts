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
 * Which `track` this transcription is derived from.
 * @export
 * @enum {string}
 */

export const CallTranscriptionTrackEnum = {
    Inbound: 'inbound',
    Outbound: 'outbound'
} as const;

export type CallTranscriptionTrackEnum = typeof CallTranscriptionTrackEnum[keyof typeof CallTranscriptionTrackEnum];




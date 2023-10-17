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
 * The machine detection mode. If set to \'async\', the detection result will be sent in a \'machineDetectionComplete\' callback. If set to \'sync\', the \'answer\' callback will wait for the machine detection to complete and will include its result.
 * @export
 * @enum {string}
 */

export const MachineDetectionModeEnum = {
    Sync: 'sync',
    Async: 'async'
} as const;

export type MachineDetectionModeEnum = typeof MachineDetectionModeEnum[keyof typeof MachineDetectionModeEnum];




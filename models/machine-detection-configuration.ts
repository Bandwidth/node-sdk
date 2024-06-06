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
import type { CallbackMethodEnum } from './callback-method-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { MachineDetectionModeEnum } from './machine-detection-mode-enum';

/**
 * The machine detection request used to perform <a href=\'/docs/voice/guides/machineDetection\'>machine detection</a> on the call. Currently, there is an issue where decimal values are not getting processed correctly. Please use whole number values. We are working to resolve this issue. Please contact Bandwidth Support if you need more information.
 * @export
 * @interface MachineDetectionConfiguration
 */
export interface MachineDetectionConfiguration {
    /**
     * 
     * @type {MachineDetectionModeEnum}
     * @memberof MachineDetectionConfiguration
     */
    'mode'?: MachineDetectionModeEnum;
    /**
     * The timeout used for the whole operation, in seconds. If no result is determined in this period, a callback with a `timeout` result is sent.
     * @type {number}
     * @memberof MachineDetectionConfiguration
     */
    'detectionTimeout'?: number | null;
    /**
     * If no speech is detected in this period, a callback with a \'silence\' result is sent.
     * @type {number}
     * @memberof MachineDetectionConfiguration
     */
    'silenceTimeout'?: number | null;
    /**
     * When speech has ended and a result couldn\'t be determined based on the audio content itself, this value is used to determine if the speaker is a machine based on the speech duration. If the length of the speech detected is greater than or equal to this threshold, the result will be \'answering-machine\'. If the length of speech detected is below this threshold, the result will be \'human\'.
     * @type {number}
     * @memberof MachineDetectionConfiguration
     */
    'speechThreshold'?: number | null;
    /**
     * Amount of silence (in seconds) before assuming the callee has finished speaking.
     * @type {number}
     * @memberof MachineDetectionConfiguration
     */
    'speechEndThreshold'?: number | null;
    /**
     * When an answering machine is detected, the amount of silence (in seconds) before assuming the message has finished playing.  If not provided it will default to the speechEndThreshold value.
     * @type {number}
     * @memberof MachineDetectionConfiguration
     */
    'machineSpeechEndThreshold'?: number | null;
    /**
     * If set to \'true\' and if an answering machine is detected, the \'answering-machine\' callback will be delayed until the machine is done speaking, or an end of message tone is detected, or until the \'detectionTimeout\' is exceeded. If false, the \'answering-machine\' result is sent immediately.
     * @type {boolean}
     * @memberof MachineDetectionConfiguration
     */
    'delayResult'?: boolean | null;
    /**
     * The URL to send the \'machineDetectionComplete\' webhook when the detection is completed. Only for \'async\' mode.
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'callbackUrl'?: string | null;
    /**
     * 
     * @type {CallbackMethodEnum}
     * @memberof MachineDetectionConfiguration
     */
    'callbackMethod'?: CallbackMethodEnum | null;
    /**
     * Basic auth username.
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'username'?: string | null;
    /**
     * Basic auth password.
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'password'?: string | null;
    /**
     * A fallback URL which, if provided, will be used to retry the machine detection complete webhook delivery in case `callbackUrl` fails to respond
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'fallbackUrl'?: string | null;
    /**
     * 
     * @type {CallbackMethodEnum}
     * @memberof MachineDetectionConfiguration
     */
    'fallbackMethod'?: CallbackMethodEnum | null;
    /**
     * Basic auth username.
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'fallbackUsername'?: string | null;
    /**
     * Basic auth password.
     * @type {string}
     * @memberof MachineDetectionConfiguration
     */
    'fallbackPassword'?: string | null;
}




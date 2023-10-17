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
import { CallbackMethodEnum } from './callback-method-enum';

/**
 * 
 * @export
 * @interface TranscribeRecording
 */
export interface TranscribeRecording {
    /**
     * The URL to send the [TranscriptionAvailable](/docs/voice/webhooks/transcriptionAvailable) event to. You should not include sensitive or personally-identifiable information in the callbackUrl field! Always use the proper username and password fields for authorization.
     * @type {string}
     * @memberof TranscribeRecording
     */
    'callbackUrl'?: string;
    /**
     * 
     * @type {CallbackMethodEnum}
     * @memberof TranscribeRecording
     */
    'callbackMethod'?: CallbackMethodEnum | null;
    /**
     * Basic auth username.
     * @type {string}
     * @memberof TranscribeRecording
     */
    'username'?: string | null;
    /**
     * Basic auth password.
     * @type {string}
     * @memberof TranscribeRecording
     */
    'password'?: string | null;
    /**
     * (optional) The tag specified on call creation. If no tag was specified or it was previously cleared, this field will not be present.
     * @type {string}
     * @memberof TranscribeRecording
     */
    'tag'?: string | null;
    /**
     * This is the timeout (in seconds) to use when delivering the webhook to `callbackUrl`. Can be any numeric value (including decimals) between 1 and 25.
     * @type {number}
     * @memberof TranscribeRecording
     */
    'callbackTimeout'?: number | null;
    /**
     * A boolean value to indicate that the recording may not be in English, and the transcription service will need to detect the dominant language the recording is in and transcribe accordingly. Current supported languages are English, French, and Spanish.
     * @type {boolean}
     * @memberof TranscribeRecording
     */
    'detectLanguage'?: boolean | null;
}




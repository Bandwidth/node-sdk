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
import { MessageFailedCallbackMessage } from './message-failed-callback-message';

/**
 * Message Failed Callback
 * @export
 * @interface MessageFailedCallback
 */
export interface MessageFailedCallback {
    /**
     * 
     * @type {string}
     * @memberof MessageFailedCallback
     */
    'time': string;
    /**
     * 
     * @type {string}
     * @memberof MessageFailedCallback
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof MessageFailedCallback
     */
    'to': string;
    /**
     * 
     * @type {string}
     * @memberof MessageFailedCallback
     */
    'description': string;
    /**
     * 
     * @type {MessageFailedCallbackMessage}
     * @memberof MessageFailedCallback
     */
    'message': MessageFailedCallbackMessage;
    /**
     * 
     * @type {number}
     * @memberof MessageFailedCallback
     */
    'errorCode': number;
}


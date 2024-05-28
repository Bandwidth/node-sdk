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
import type { MessageSendingCallbackMessage } from './message-sending-callback-message';

/**
 * Message Sending Callback
 * @export
 * @interface MessageSendingCallback
 */
export interface MessageSendingCallback {
    /**
     * 
     * @type {string}
     * @memberof MessageSendingCallback
     */
    'time': string;
    /**
     * 
     * @type {string}
     * @memberof MessageSendingCallback
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof MessageSendingCallback
     */
    'to': string;
    /**
     * 
     * @type {string}
     * @memberof MessageSendingCallback
     */
    'description': string;
    /**
     * 
     * @type {MessageSendingCallbackMessage}
     * @memberof MessageSendingCallback
     */
    'message': MessageSendingCallbackMessage;
}


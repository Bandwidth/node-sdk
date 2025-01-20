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
import type { CallbackTypeEnum } from './callback-type-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { MessageCallbackMessage } from './message-callback-message';

/**
 * Message Callback Schema
 * @export
 * @interface MessageCallback
 */
export interface MessageCallback {
    /**
     * 
     * @type {string}
     * @memberof MessageCallback
     */
    'time': string;
    /**
     * 
     * @type {CallbackTypeEnum}
     * @memberof MessageCallback
     */
    'type': CallbackTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MessageCallback
     */
    'to': string;
    /**
     * A detailed description of the event described by the callback.
     * @type {string}
     * @memberof MessageCallback
     */
    'description': string;
    /**
     * 
     * @type {MessageCallbackMessage}
     * @memberof MessageCallback
     */
    'message': MessageCallbackMessage;
    /**
     * Optional error code, applicable only when type is `message-failed`.
     * @type {number}
     * @memberof MessageCallback
     */
    'errorCode'?: number | null;
}




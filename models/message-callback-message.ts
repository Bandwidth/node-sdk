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
import type { MessageDirectionEnum } from './message-direction-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { PriorityEnum } from './priority-enum';

/**
 * Message payload schema within a MessageCallback
 * @export
 * @interface MessageCallbackMessage
 */
export interface MessageCallbackMessage {
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'owner': string;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'applicationId': string;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'time': string;
    /**
     * 
     * @type {number}
     * @memberof MessageCallbackMessage
     */
    'segmentCount': number;
    /**
     * 
     * @type {MessageDirectionEnum}
     * @memberof MessageCallbackMessage
     */
    'direction': MessageDirectionEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof MessageCallbackMessage
     */
    'to': Set<string>;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'from': string;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof MessageCallbackMessage
     */
    'tag'?: string;
    /**
     * Optional media, applicable only for mms
     * @type {Array<string>}
     * @memberof MessageCallbackMessage
     */
    'media'?: Array<string> | null;
    /**
     * 
     * @type {PriorityEnum}
     * @memberof MessageCallbackMessage
     */
    'priority'?: PriorityEnum;
}




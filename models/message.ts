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
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * The id of the message.
     * @type {string}
     * @memberof Message
     */
    'id'?: string;
    /**
     * The Bandwidth phone number associated with the message.
     * @type {string}
     * @memberof Message
     */
    'owner'?: string;
    /**
     * The application ID associated with the message.
     * @type {string}
     * @memberof Message
     */
    'applicationId'?: string;
    /**
     * The datetime stamp of the message in ISO 8601
     * @type {string}
     * @memberof Message
     */
    'time'?: string;
    /**
     * The number of segments the original message from the user is broken into before sending over to carrier networks.
     * @type {number}
     * @memberof Message
     */
    'segmentCount'?: number;
    /**
     * 
     * @type {MessageDirectionEnum}
     * @memberof Message
     */
    'direction'?: MessageDirectionEnum;
    /**
     * The phone number recipients of the message.
     * @type {Set<string>}
     * @memberof Message
     */
    'to'?: Set<string>;
    /**
     * The phone number the message was sent from.
     * @type {string}
     * @memberof Message
     */
    'from'?: string;
    /**
     * The list of media URLs sent in the message. Including a `filename` field in the `Content-Disposition` header of the media linked with a URL will set the displayed file name. This is a best practice to ensure that your media has a readable file name.
     * @type {Set<string>}
     * @memberof Message
     */
    'media'?: Set<string>;
    /**
     * The contents of the message.
     * @type {string}
     * @memberof Message
     */
    'text'?: string;
    /**
     * The custom string set by the user.
     * @type {string}
     * @memberof Message
     */
    'tag'?: string;
    /**
     * 
     * @type {PriorityEnum}
     * @memberof Message
     */
    'priority'?: PriorityEnum;
    /**
     * A string with the date/time value that the message will automatically expire by. This must be a valid RFC-3339 value, e.g., 2021-03-14T01:59:26Z or 2021-03-13T20:59:26-05:00. Must be a date-time in the future.
     * @type {string}
     * @memberof Message
     */
    'expiration'?: string;
}




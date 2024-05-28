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
import type { PriorityEnum } from './priority-enum';

/**
 * 
 * @export
 * @interface MessageRequest
 */
export interface MessageRequest {
    /**
     * The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard.
     * @type {string}
     * @memberof MessageRequest
     */
    'applicationId': string;
    /**
     * The phone number(s) the message should be sent to in E164 format.
     * @type {Set<string>}
     * @memberof MessageRequest
     */
    'to': Set<string>;
    /**
     * Either an alphanumeric sender ID or the sender\'s Bandwidth phone number in E.164 format, which must be hosted within Bandwidth and linked to the account that is generating the message.  Alphanumeric Sender IDs can contain up to 11 characters, upper-case letters A-Z, lower-case letters a-z, numbers 0-9, space, hyphen -, plus +, underscore _ and ampersand &. Alphanumeric Sender IDs must contain at least one letter.
     * @type {string}
     * @memberof MessageRequest
     */
    'from': string;
    /**
     * The contents of the text message. Must be 2048 characters or less.
     * @type {string}
     * @memberof MessageRequest
     */
    'text'?: string;
    /**
     * A list of URLs to include as media attachments as part of the message. Each URL can be at most 4096 characters.
     * @type {Array<string>}
     * @memberof MessageRequest
     */
    'media'?: Array<string>;
    /**
     * A custom string that will be included in callback events of the message. Max 1024 characters.
     * @type {string}
     * @memberof MessageRequest
     */
    'tag'?: string;
    /**
     * 
     * @type {PriorityEnum}
     * @memberof MessageRequest
     */
    'priority'?: PriorityEnum;
    /**
     * A string with the date/time value that the message will automatically expire by. This must be a valid RFC-3339 value, e.g., 2021-03-14T01:59:26Z or 2021-03-13T20:59:26-05:00. Must be a date-time in the future. Not supported on MMS.
     * @type {string}
     * @memberof MessageRequest
     */
    'expiration'?: string;
}




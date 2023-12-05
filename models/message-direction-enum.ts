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
 * The direction of the message. One of in out.
 * @export
 * @enum {string}
 */

export const MessageDirectionEnum = {
    In: 'in',
    Out: 'out'
} as const;

export type MessageDirectionEnum = typeof MessageDirectionEnum[keyof typeof MessageDirectionEnum];




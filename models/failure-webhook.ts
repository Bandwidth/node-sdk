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
 * 
 * @export
 * @interface FailureWebhook
 */
export interface FailureWebhook {
    /**
     * User\'s account ID.
     * @type {string}
     * @memberof FailureWebhook
     */
    'accountId'?: string;
    /**
     * Toll-free telephone number in E.164 format.
     * @type {string}
     * @memberof FailureWebhook
     */
    'phoneNumber'?: string;
    /**
     * An error code indicating what error was encountered. This code can be interpreted as an HTTP status code in regards to the error that was encountered.
     * @type {string}
     * @memberof FailureWebhook
     */
    'errorCode'?: string;
    /**
     * A description of the error that was encountered.
     * @type {string}
     * @memberof FailureWebhook
     */
    'errorDescription'?: string;
    /**
     * Details of the errors that were encountered when processing the request.
     * @type {Array<string>}
     * @memberof FailureWebhook
     */
    'errors'?: Array<string>;
    /**
     * Unique identifier (UUID) generated by Bandwidth to assist in tracking the verification status of a toll-free number.
     * @type {string}
     * @memberof FailureWebhook
     */
    'internalTicketNumber'?: string;
}


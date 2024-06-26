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
import type { LookupResult } from './lookup-result';
// May contain unused imports in some cases
// @ts-ignore
import type { LookupStatusEnum } from './lookup-status-enum';

/**
 * If requestId exists, the result for that request is returned. See the Examples for details on the various responses that you can receive. Generally, if you see a Response Code of 0 in a result for a TN, information will be available for it.  Any other Response Code will indicate no information was available for the TN.
 * @export
 * @interface LookupStatus
 */
export interface LookupStatus {
    /**
     * The requestId.
     * @type {string}
     * @memberof LookupStatus
     */
    'requestId'?: string;
    /**
     * 
     * @type {LookupStatusEnum}
     * @memberof LookupStatus
     */
    'status'?: LookupStatusEnum;
    /**
     * The carrier information results for the specified telephone number.
     * @type {Array<LookupResult>}
     * @memberof LookupStatus
     */
    'result'?: Array<LookupResult>;
    /**
     * The telephone numbers whose lookup failed.
     * @type {Array<string>}
     * @memberof LookupStatus
     */
    'failedTelephoneNumbers'?: Array<string>;
}




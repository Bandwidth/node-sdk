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
import type { TfvStatusEnum } from './tfv-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { TfvSubmissionInfo } from './tfv-submission-info';

/**
 * 
 * @export
 * @interface TfvStatus
 */
export interface TfvStatus {
    /**
     * Toll-free telephone number in E.164 format.
     * @type {string}
     * @memberof TfvStatus
     */
    'phoneNumber'?: string;
    /**
     * 
     * @type {TfvStatusEnum}
     * @memberof TfvStatus
     */
    'status'?: TfvStatusEnum;
    /**
     * Unique identifier (UUID) generated by Bandwidth to assist in tracking the verification status of a toll-free number - included in all webhook payloads.
     * @type {string}
     * @memberof TfvStatus
     */
    'internalTicketNumber'?: string;
    /**
     * Explanation for why a verification request was declined.
     * @type {string}
     * @memberof TfvStatus
     */
    'declineReasonDescription'?: string;
    /**
     * Whether a Toll-Free Verification request qualifies for resubmission via PUT.
     * @type {boolean}
     * @memberof TfvStatus
     */
    'resubmitAllowed'?: boolean;
    /**
     * Date and time the verification request was created.
     * @type {string}
     * @memberof TfvStatus
     */
    'createdDateTime'?: string;
    /**
     * Date and time the verification request was last modified.
     * @type {string}
     * @memberof TfvStatus
     */
    'modifiedDateTime'?: string;
    /**
     * 
     * @type {TfvSubmissionInfo}
     * @memberof TfvStatus
     */
    'submission'?: TfvSubmissionInfo;
}




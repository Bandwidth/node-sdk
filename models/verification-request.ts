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
import type { Address } from './address';
// May contain unused imports in some cases
// @ts-ignore
import type { Contact } from './contact';
// May contain unused imports in some cases
// @ts-ignore
import type { OptInWorkflow } from './opt-in-workflow';

/**
 * 
 * @export
 * @interface VerificationRequest
 */
export interface VerificationRequest {
    /**
     * 
     * @type {Address}
     * @memberof VerificationRequest
     */
    'businessAddress': Address;
    /**
     * 
     * @type {Contact}
     * @memberof VerificationRequest
     */
    'businessContact': Contact;
    /**
     * Estimated monthly volume of messages from the toll-free number.
     * @type {number}
     * @memberof VerificationRequest
     */
    'messageVolume': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof VerificationRequest
     */
    'phoneNumbers': Array<string>;
    /**
     * The category of the use case.
     * @type {string}
     * @memberof VerificationRequest
     */
    'useCase': string;
    /**
     * A general idea of the use case and customer.
     * @type {string}
     * @memberof VerificationRequest
     */
    'useCaseSummary': string;
    /**
     * Example of message content.
     * @type {string}
     * @memberof VerificationRequest
     */
    'productionMessageContent': string;
    /**
     * 
     * @type {OptInWorkflow}
     * @memberof VerificationRequest
     */
    'optInWorkflow': OptInWorkflow;
    /**
     * Any additional information.
     * @type {string}
     * @memberof VerificationRequest
     */
    'additionalInformation'?: string | null;
    /**
     * ISV name.
     * @type {string}
     * @memberof VerificationRequest
     */
    'isvReseller'?: string | null;
    /**
     * The Toll-Free Verification request privacy policy URL.
     * @type {string}
     * @memberof VerificationRequest
     */
    'privacyPolicyUrl'?: string;
    /**
     * The Toll-Free Verification request terms and conditions policy URL.
     * @type {string}
     * @memberof VerificationRequest
     */
    'termsAndConditionsUrl'?: string;
    /**
     * The company \'Doing Business As\'.
     * @type {string}
     * @memberof VerificationRequest
     */
    'businessDba'?: string;
}


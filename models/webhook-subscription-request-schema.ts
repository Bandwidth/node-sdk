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
import type { TfvBasicAuthentication } from './tfv-basic-authentication';

/**
 * 
 * @export
 * @interface WebhookSubscriptionRequestSchema
 */
export interface WebhookSubscriptionRequestSchema {
    /**
     * 
     * @type {TfvBasicAuthentication}
     * @memberof WebhookSubscriptionRequestSchema
     */
    'basicAuthentication'?: TfvBasicAuthentication;
    /**
     * Callback URL to receive status updates from Bandwidth. When a webhook subscription is registered with Bandwidth under a given account ID, it will be used to send status updates for all requests submitted under that account ID.
     * @type {string}
     * @memberof WebhookSubscriptionRequestSchema
     */
    'callbackUrl': string | null;
    /**
     * An ASCII string submitted by the user as a shared secret key for generating an HMAC header for callbacks.
     * @type {string}
     * @memberof WebhookSubscriptionRequestSchema
     */
    'sharedSecretKey'?: string | null;
}


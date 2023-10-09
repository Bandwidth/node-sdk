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
import { CallStateEnum } from './call-state-enum';
// May contain unused imports in some cases
// @ts-ignore
import { RedirectMethodEnum } from './redirect-method-enum';

/**
 * 
 * @export
 * @interface UpdateCall
 */
export interface UpdateCall {
    /**
     * 
     * @type {CallStateEnum}
     * @memberof UpdateCall
     */
    'state'?: CallStateEnum | null;
    /**
     * The URL to send the [Redirect](/docs/voice/bxml/redirect) event to which will provide new BXML.  Required if `state` is `active`.  Not allowed if `state` is `completed`.
     * @type {string}
     * @memberof UpdateCall
     */
    'redirectUrl'?: string | null;
    /**
     * 
     * @type {RedirectMethodEnum}
     * @memberof UpdateCall
     */
    'redirectMethod'?: RedirectMethodEnum | null;
    /**
     * Basic auth username.
     * @type {string}
     * @memberof UpdateCall
     */
    'username'?: string | null;
    /**
     * Basic auth password.
     * @type {string}
     * @memberof UpdateCall
     */
    'password'?: string | null;
    /**
     * A fallback url which, if provided, will be used to retry the redirect callback delivery in case `redirectUrl` fails to respond.
     * @type {string}
     * @memberof UpdateCall
     */
    'redirectFallbackUrl'?: string | null;
    /**
     * 
     * @type {RedirectMethodEnum}
     * @memberof UpdateCall
     */
    'redirectFallbackMethod'?: RedirectMethodEnum | null;
    /**
     * Basic auth username.
     * @type {string}
     * @memberof UpdateCall
     */
    'fallbackUsername'?: string | null;
    /**
     * Basic auth password.
     * @type {string}
     * @memberof UpdateCall
     */
    'fallbackPassword'?: string | null;
    /**
     * A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](/docs/voice/bxml/tag) verb, or cleared.  May be cleared by setting `tag=\"\"`.  Max length 256 characters.  Not allowed if `state` is `completed`.
     * @type {string}
     * @memberof UpdateCall
     */
    'tag'?: string | null;
}




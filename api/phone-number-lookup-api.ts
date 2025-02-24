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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CreateLookupResponse } from '../models';
// @ts-ignore
import type { LookupRequest } from '../models';
// @ts-ignore
import type { LookupStatus } from '../models';
// @ts-ignore
import type { TnLookupRequestError } from '../models';
/**
 * PhoneNumberLookupApi - axios parameter creator
 * @export
 */
export const PhoneNumberLookupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a Phone Number Lookup Request.
         * @summary Create Lookup
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {LookupRequest} lookupRequest Phone number lookup request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLookup: async (accountId: string, lookupRequest: LookupRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createLookup', 'accountId', accountId)
            // verify required parameter 'lookupRequest' is not null or undefined
            assertParamExists('createLookup', 'lookupRequest', lookupRequest)
            const localVarPath = `/accounts/{accountId}/tnlookup`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(lookupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an existing Phone Number Lookup Request.
         * @summary Get Lookup Request Status
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} requestId The phone number lookup request ID from Bandwidth.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLookupStatus: async (accountId: string, requestId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getLookupStatus', 'accountId', accountId)
            // verify required parameter 'requestId' is not null or undefined
            assertParamExists('getLookupStatus', 'requestId', requestId)
            const localVarPath = `/accounts/{accountId}/tnlookup/{requestId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"requestId"}}`, encodeURIComponent(String(requestId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PhoneNumberLookupApi - functional programming interface
 * @export
 */
export const PhoneNumberLookupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PhoneNumberLookupApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a Phone Number Lookup Request.
         * @summary Create Lookup
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {LookupRequest} lookupRequest Phone number lookup request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLookup(accountId: string, lookupRequest: LookupRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateLookupResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLookup(accountId, lookupRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhoneNumberLookupApi.createLookup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get an existing Phone Number Lookup Request.
         * @summary Get Lookup Request Status
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} requestId The phone number lookup request ID from Bandwidth.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLookupStatus(accountId: string, requestId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LookupStatus>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLookupStatus(accountId, requestId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PhoneNumberLookupApi.getLookupStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PhoneNumberLookupApi - factory interface
 * @export
 */
export const PhoneNumberLookupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PhoneNumberLookupApiFp(configuration)
    return {
        /**
         * Create a Phone Number Lookup Request.
         * @summary Create Lookup
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {LookupRequest} lookupRequest Phone number lookup request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLookup(accountId: string, lookupRequest: LookupRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateLookupResponse> {
            return localVarFp.createLookup(accountId, lookupRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an existing Phone Number Lookup Request.
         * @summary Get Lookup Request Status
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} requestId The phone number lookup request ID from Bandwidth.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLookupStatus(accountId: string, requestId: string, options?: RawAxiosRequestConfig): AxiosPromise<LookupStatus> {
            return localVarFp.getLookupStatus(accountId, requestId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PhoneNumberLookupApi - object-oriented interface
 * @export
 * @class PhoneNumberLookupApi
 * @extends {BaseAPI}
 */
export class PhoneNumberLookupApi extends BaseAPI {
    /**
     * Create a Phone Number Lookup Request.
     * @summary Create Lookup
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {LookupRequest} lookupRequest Phone number lookup request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhoneNumberLookupApi
     */
    public createLookup(accountId: string, lookupRequest: LookupRequest, options?: RawAxiosRequestConfig) {
        return PhoneNumberLookupApiFp(this.configuration).createLookup(accountId, lookupRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an existing Phone Number Lookup Request.
     * @summary Get Lookup Request Status
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} requestId The phone number lookup request ID from Bandwidth.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhoneNumberLookupApi
     */
    public getLookupStatus(accountId: string, requestId: string, options?: RawAxiosRequestConfig) {
        return PhoneNumberLookupApiFp(this.configuration).getLookupStatus(accountId, requestId, options).then((request) => request(this.axios, this.basePath));
    }
}


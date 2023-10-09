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
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CallState } from '../models';
// @ts-ignore
import { CreateCall } from '../models';
// @ts-ignore
import { CreateCallResponse } from '../models';
// @ts-ignore
import { UpdateCall } from '../models';
// @ts-ignore
import { VoiceApiError } from '../models';
/**
 * CallsApi - axios parameter creator
 * @export
 */
export const CallsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates an outbound phone call.  All calls are initially queued. Your outbound calls will initiated at a specific dequeueing rate, enabling your application to \"fire and forget\" when creating calls. Queued calls may not be modified until they are dequeued and placed, but may be removed from your queue on demand.  <b>Please note:</b> Calls submitted to your queue will be placed approximately in order, but exact ordering is not guaranteed.
         * @summary Create Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {CreateCall} createCall JSON object containing information to create an outbound call
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCall: async (accountId: string, createCall: CreateCall, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createCall', 'accountId', accountId)
            // verify required parameter 'createCall' is not null or undefined
            assertParamExists('createCall', 'createCall', createCall)
            const localVarPath = `/accounts/{accountId}/calls`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCall, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the current state of a specific call. This information is near-realtime, so it may take a few minutes for your call to be accessible using this endpoint.  **Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.
         * @summary Get Call State Information
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallState: async (accountId: string, callId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getCallState', 'accountId', accountId)
            // verify required parameter 'callId' is not null or undefined
            assertParamExists('getCallState', 'callId', callId)
            const localVarPath = `/accounts/{accountId}/calls/{callId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"callId"}}`, encodeURIComponent(String(callId)));
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
        /**
         * Returns a max of 10000 calls, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of calls in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of call records. Also, call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an empty array [] in response.
         * @summary Get Calls
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [to] Filter results by the &#x60;to&#x60; field.
         * @param {string} [from] Filter results by the &#x60;from&#x60; field.
         * @param {string} [minStartTime] Filter results to calls which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format).
         * @param {string} [maxStartTime] Filter results to calls which have a &#x60;startTime&#x60; before or including &#x60;maxStartTime&#x60; (in ISO8601 format).
         * @param {string} [disconnectCause] Filter results to calls with specified call Disconnect Cause.
         * @param {number} [pageSize] Specifies the max number of calls that will be returned.
         * @param {string} [pageToken] Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCalls: async (accountId: string, to?: string, from?: string, minStartTime?: string, maxStartTime?: string, disconnectCause?: string, pageSize?: number, pageToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('listCalls', 'accountId', accountId)
            const localVarPath = `/accounts/{accountId}/calls`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
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

            if (to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = from;
            }

            if (minStartTime !== undefined) {
                localVarQueryParameter['minStartTime'] = minStartTime;
            }

            if (maxStartTime !== undefined) {
                localVarQueryParameter['maxStartTime'] = maxStartTime;
            }

            if (disconnectCause !== undefined) {
                localVarQueryParameter['disconnectCause'] = disconnectCause;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Interrupts and redirects a call to a different URL that should return a BXML document.
         * @summary Update Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {UpdateCall} updateCall JSON object containing information to redirect an existing call to a new BXML document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCall: async (accountId: string, callId: string, updateCall: UpdateCall, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('updateCall', 'accountId', accountId)
            // verify required parameter 'callId' is not null or undefined
            assertParamExists('updateCall', 'callId', callId)
            // verify required parameter 'updateCall' is not null or undefined
            assertParamExists('updateCall', 'updateCall', updateCall)
            const localVarPath = `/accounts/{accountId}/calls/{callId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"callId"}}`, encodeURIComponent(String(callId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCall, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Interrupts and replaces an active call\'s BXML document.
         * @summary Update Call BXML
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCallBxml: async (accountId: string, callId: string, body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('updateCallBxml', 'accountId', accountId)
            // verify required parameter 'callId' is not null or undefined
            assertParamExists('updateCallBxml', 'callId', callId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('updateCallBxml', 'body', body)
            const localVarPath = `/accounts/{accountId}/calls/{callId}/bxml`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"callId"}}`, encodeURIComponent(String(callId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/xml';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CallsApi - functional programming interface
 * @export
 */
export const CallsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CallsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates an outbound phone call.  All calls are initially queued. Your outbound calls will initiated at a specific dequeueing rate, enabling your application to \"fire and forget\" when creating calls. Queued calls may not be modified until they are dequeued and placed, but may be removed from your queue on demand.  <b>Please note:</b> Calls submitted to your queue will be placed approximately in order, but exact ordering is not guaranteed.
         * @summary Create Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {CreateCall} createCall JSON object containing information to create an outbound call
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCall(accountId: string, createCall: CreateCall, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCallResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCall(accountId, createCall, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve the current state of a specific call. This information is near-realtime, so it may take a few minutes for your call to be accessible using this endpoint.  **Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.
         * @summary Get Call State Information
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCallState(accountId: string, callId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CallState>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCallState(accountId, callId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a max of 10000 calls, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of calls in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of call records. Also, call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an empty array [] in response.
         * @summary Get Calls
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [to] Filter results by the &#x60;to&#x60; field.
         * @param {string} [from] Filter results by the &#x60;from&#x60; field.
         * @param {string} [minStartTime] Filter results to calls which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format).
         * @param {string} [maxStartTime] Filter results to calls which have a &#x60;startTime&#x60; before or including &#x60;maxStartTime&#x60; (in ISO8601 format).
         * @param {string} [disconnectCause] Filter results to calls with specified call Disconnect Cause.
         * @param {number} [pageSize] Specifies the max number of calls that will be returned.
         * @param {string} [pageToken] Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCalls(accountId: string, to?: string, from?: string, minStartTime?: string, maxStartTime?: string, disconnectCause?: string, pageSize?: number, pageToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CallState>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCalls(accountId, to, from, minStartTime, maxStartTime, disconnectCause, pageSize, pageToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Interrupts and redirects a call to a different URL that should return a BXML document.
         * @summary Update Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {UpdateCall} updateCall JSON object containing information to redirect an existing call to a new BXML document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCall(accountId: string, callId: string, updateCall: UpdateCall, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCall(accountId, callId, updateCall, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Interrupts and replaces an active call\'s BXML document.
         * @summary Update Call BXML
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCallBxml(accountId: string, callId: string, body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCallBxml(accountId, callId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CallsApi - factory interface
 * @export
 */
export const CallsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CallsApiFp(configuration)
    return {
        /**
         * Creates an outbound phone call.  All calls are initially queued. Your outbound calls will initiated at a specific dequeueing rate, enabling your application to \"fire and forget\" when creating calls. Queued calls may not be modified until they are dequeued and placed, but may be removed from your queue on demand.  <b>Please note:</b> Calls submitted to your queue will be placed approximately in order, but exact ordering is not guaranteed.
         * @summary Create Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {CreateCall} createCall JSON object containing information to create an outbound call
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCall(accountId: string, createCall: CreateCall, options?: any): AxiosPromise<CreateCallResponse> {
            return localVarFp.createCall(accountId, createCall, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the current state of a specific call. This information is near-realtime, so it may take a few minutes for your call to be accessible using this endpoint.  **Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.
         * @summary Get Call State Information
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallState(accountId: string, callId: string, options?: any): AxiosPromise<CallState> {
            return localVarFp.getCallState(accountId, callId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a max of 10000 calls, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of calls in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of call records. Also, call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an empty array [] in response.
         * @summary Get Calls
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [to] Filter results by the &#x60;to&#x60; field.
         * @param {string} [from] Filter results by the &#x60;from&#x60; field.
         * @param {string} [minStartTime] Filter results to calls which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format).
         * @param {string} [maxStartTime] Filter results to calls which have a &#x60;startTime&#x60; before or including &#x60;maxStartTime&#x60; (in ISO8601 format).
         * @param {string} [disconnectCause] Filter results to calls with specified call Disconnect Cause.
         * @param {number} [pageSize] Specifies the max number of calls that will be returned.
         * @param {string} [pageToken] Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCalls(accountId: string, to?: string, from?: string, minStartTime?: string, maxStartTime?: string, disconnectCause?: string, pageSize?: number, pageToken?: string, options?: any): AxiosPromise<Array<CallState>> {
            return localVarFp.listCalls(accountId, to, from, minStartTime, maxStartTime, disconnectCause, pageSize, pageToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Interrupts and redirects a call to a different URL that should return a BXML document.
         * @summary Update Call
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {UpdateCall} updateCall JSON object containing information to redirect an existing call to a new BXML document
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCall(accountId: string, callId: string, updateCall: UpdateCall, options?: any): AxiosPromise<void> {
            return localVarFp.updateCall(accountId, callId, updateCall, options).then((request) => request(axios, basePath));
        },
        /**
         * Interrupts and replaces an active call\'s BXML document.
         * @summary Update Call BXML
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} callId Programmable Voice API Call ID.
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCallBxml(accountId: string, callId: string, body: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateCallBxml(accountId, callId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CallsApi - object-oriented interface
 * @export
 * @class CallsApi
 * @extends {BaseAPI}
 */
export class CallsApi extends BaseAPI {
    /**
     * Creates an outbound phone call.  All calls are initially queued. Your outbound calls will initiated at a specific dequeueing rate, enabling your application to \"fire and forget\" when creating calls. Queued calls may not be modified until they are dequeued and placed, but may be removed from your queue on demand.  <b>Please note:</b> Calls submitted to your queue will be placed approximately in order, but exact ordering is not guaranteed.
     * @summary Create Call
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {CreateCall} createCall JSON object containing information to create an outbound call
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public createCall(accountId: string, createCall: CreateCall, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).createCall(accountId, createCall, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve the current state of a specific call. This information is near-realtime, so it may take a few minutes for your call to be accessible using this endpoint.  **Note**: Call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an HTTP 404 response.
     * @summary Get Call State Information
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} callId Programmable Voice API Call ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public getCallState(accountId: string, callId: string, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).getCallState(accountId, callId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a max of 10000 calls, sorted by `createdTime` from oldest to newest.  **NOTE:** If the number of calls in the account is bigger than `pageSize`, a `Link` header (with format `<{url}>; rel=\"next\"`) will be returned in the response. The url can be used to retrieve the next page of call records. Also, call information is kept for 7 days after the calls are hung up. If you attempt to retrieve information for a call that is older than 7 days, you will get an empty array [] in response.
     * @summary Get Calls
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} [to] Filter results by the &#x60;to&#x60; field.
     * @param {string} [from] Filter results by the &#x60;from&#x60; field.
     * @param {string} [minStartTime] Filter results to calls which have a &#x60;startTime&#x60; after or including &#x60;minStartTime&#x60; (in ISO8601 format).
     * @param {string} [maxStartTime] Filter results to calls which have a &#x60;startTime&#x60; before or including &#x60;maxStartTime&#x60; (in ISO8601 format).
     * @param {string} [disconnectCause] Filter results to calls with specified call Disconnect Cause.
     * @param {number} [pageSize] Specifies the max number of calls that will be returned.
     * @param {string} [pageToken] Not intended for explicit use. To use pagination, follow the links in the &#x60;Link&#x60; header of the response, as indicated in the endpoint description.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public listCalls(accountId: string, to?: string, from?: string, minStartTime?: string, maxStartTime?: string, disconnectCause?: string, pageSize?: number, pageToken?: string, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).listCalls(accountId, to, from, minStartTime, maxStartTime, disconnectCause, pageSize, pageToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Interrupts and redirects a call to a different URL that should return a BXML document.
     * @summary Update Call
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} callId Programmable Voice API Call ID.
     * @param {UpdateCall} updateCall JSON object containing information to redirect an existing call to a new BXML document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public updateCall(accountId: string, callId: string, updateCall: UpdateCall, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).updateCall(accountId, callId, updateCall, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Interrupts and replaces an active call\'s BXML document.
     * @summary Update Call BXML
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} callId Programmable Voice API Call ID.
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CallsApi
     */
    public updateCallBxml(accountId: string, callId: string, body: string, options?: AxiosRequestConfig) {
        return CallsApiFp(this.configuration).updateCallBxml(accountId, callId, body, options).then((request) => request(this.axios, this.basePath));
    }
}


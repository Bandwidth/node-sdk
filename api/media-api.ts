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
import type { Media } from '../models';
// @ts-ignore
import type { MessagingRequestError } from '../models';
/**
 * MediaApi - axios parameter creator
 * @export
 */
export const MediaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a media file from Bandwidth API server. Make sure you don\'t have any application scripts still using the media before you delete.  If you accidentally delete a media file you can immediately upload a new file with the same name.
         * @summary Delete Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMedia: async (accountId: string, mediaId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('deleteMedia', 'accountId', accountId)
            // verify required parameter 'mediaId' is not null or undefined
            assertParamExists('deleteMedia', 'mediaId', mediaId)
            const localVarPath = `/users/{accountId}/media/{mediaId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"mediaId"}}`, encodeURIComponent(String(mediaId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Downloads a media file you previously uploaded.
         * @summary Get Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMedia: async (accountId: string, mediaId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getMedia', 'accountId', accountId)
            // verify required parameter 'mediaId' is not null or undefined
            assertParamExists('getMedia', 'mediaId', mediaId)
            const localVarPath = `/users/{accountId}/media/{mediaId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"mediaId"}}`, encodeURIComponent(String(mediaId)));
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
         * Gets a list of your media files. No query parameters are supported.
         * @summary List Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [continuationToken] Continuation token used to retrieve subsequent media.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMedia: async (accountId: string, continuationToken?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('listMedia', 'accountId', accountId)
            const localVarPath = `/users/{accountId}/media`
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


    
            if (continuationToken != null) {
                localVarHeaderParameter['Continuation-Token'] = String(continuationToken);
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
         * Upload a file. You may add headers to the request in order to provide some control to your media file.  If a file is uploaded with the same name as a file that already exists under this account, the previous file will be overwritten.  A list of supported media types can be found [here](https://support.bandwidth.com/hc/en-us/articles/360014128994-What-MMS-file-types-are-supported-).
         * @summary Upload Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {File} body 
         * @param {string} [contentType] The media type of the entity-body.
         * @param {string} [cacheControl] General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadMedia: async (accountId: string, mediaId: string, body: File, contentType?: string, cacheControl?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('uploadMedia', 'accountId', accountId)
            // verify required parameter 'mediaId' is not null or undefined
            assertParamExists('uploadMedia', 'mediaId', mediaId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('uploadMedia', 'body', body)
            const localVarPath = `/users/{accountId}/media/{mediaId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"mediaId"}}`, encodeURIComponent(String(mediaId)));
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            if (contentType != null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (cacheControl != null) {
                localVarHeaderParameter['Cache-Control'] = String(cacheControl);
            }
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
 * MediaApi - functional programming interface
 * @export
 */
export const MediaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes a media file from Bandwidth API server. Make sure you don\'t have any application scripts still using the media before you delete.  If you accidentally delete a media file you can immediately upload a new file with the same name.
         * @summary Delete Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMedia(accountId, mediaId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MediaApi.deleteMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Downloads a media file you previously uploaded.
         * @summary Get Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMedia(accountId, mediaId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MediaApi.getMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets a list of your media files. No query parameters are supported.
         * @summary List Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [continuationToken] Continuation token used to retrieve subsequent media.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMedia(accountId: string, continuationToken?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Media>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMedia(accountId, continuationToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MediaApi.listMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Upload a file. You may add headers to the request in order to provide some control to your media file.  If a file is uploaded with the same name as a file that already exists under this account, the previous file will be overwritten.  A list of supported media types can be found [here](https://support.bandwidth.com/hc/en-us/articles/360014128994-What-MMS-file-types-are-supported-).
         * @summary Upload Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {File} body 
         * @param {string} [contentType] The media type of the entity-body.
         * @param {string} [cacheControl] General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadMedia(accountId: string, mediaId: string, body: File, contentType?: string, cacheControl?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadMedia(accountId, mediaId, body, contentType, cacheControl, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MediaApi.uploadMedia']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MediaApi - factory interface
 * @export
 */
export const MediaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaApiFp(configuration)
    return {
        /**
         * Deletes a media file from Bandwidth API server. Make sure you don\'t have any application scripts still using the media before you delete.  If you accidentally delete a media file you can immediately upload a new file with the same name.
         * @summary Delete Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteMedia(accountId, mediaId, options).then((request) => request(axios, basePath));
        },
        /**
         * Downloads a media file you previously uploaded.
         * @summary Get Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig): AxiosPromise<File> {
            return localVarFp.getMedia(accountId, mediaId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of your media files. No query parameters are supported.
         * @summary List Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [continuationToken] Continuation token used to retrieve subsequent media.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMedia(accountId: string, continuationToken?: string, options?: RawAxiosRequestConfig): AxiosPromise<Array<Media>> {
            return localVarFp.listMedia(accountId, continuationToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload a file. You may add headers to the request in order to provide some control to your media file.  If a file is uploaded with the same name as a file that already exists under this account, the previous file will be overwritten.  A list of supported media types can be found [here](https://support.bandwidth.com/hc/en-us/articles/360014128994-What-MMS-file-types-are-supported-).
         * @summary Upload Media
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} mediaId Media ID to retrieve.
         * @param {File} body 
         * @param {string} [contentType] The media type of the entity-body.
         * @param {string} [cacheControl] General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadMedia(accountId: string, mediaId: string, body: File, contentType?: string, cacheControl?: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.uploadMedia(accountId, mediaId, body, contentType, cacheControl, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
export class MediaApi extends BaseAPI {
    /**
     * Deletes a media file from Bandwidth API server. Make sure you don\'t have any application scripts still using the media before you delete.  If you accidentally delete a media file you can immediately upload a new file with the same name.
     * @summary Delete Media
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} mediaId Media ID to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public deleteMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig) {
        return MediaApiFp(this.configuration).deleteMedia(accountId, mediaId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Downloads a media file you previously uploaded.
     * @summary Get Media
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} mediaId Media ID to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public getMedia(accountId: string, mediaId: string, options?: RawAxiosRequestConfig) {
        return MediaApiFp(this.configuration).getMedia(accountId, mediaId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of your media files. No query parameters are supported.
     * @summary List Media
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} [continuationToken] Continuation token used to retrieve subsequent media.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public listMedia(accountId: string, continuationToken?: string, options?: RawAxiosRequestConfig) {
        return MediaApiFp(this.configuration).listMedia(accountId, continuationToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload a file. You may add headers to the request in order to provide some control to your media file.  If a file is uploaded with the same name as a file that already exists under this account, the previous file will be overwritten.  A list of supported media types can be found [here](https://support.bandwidth.com/hc/en-us/articles/360014128994-What-MMS-file-types-are-supported-).
     * @summary Upload Media
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} mediaId Media ID to retrieve.
     * @param {File} body 
     * @param {string} [contentType] The media type of the entity-body.
     * @param {string} [cacheControl] General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public uploadMedia(accountId: string, mediaId: string, body: File, contentType?: string, cacheControl?: string, options?: RawAxiosRequestConfig) {
        return MediaApiFp(this.configuration).uploadMedia(accountId, mediaId, body, contentType, cacheControl, options).then((request) => request(this.axios, this.basePath));
    }
}


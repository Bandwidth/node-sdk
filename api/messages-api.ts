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
import type { CreateMessageRequestError } from '../models';
// @ts-ignore
import type { ListMessageDirectionEnum } from '../models';
// @ts-ignore
import type { Message } from '../models';
// @ts-ignore
import type { MessageRequest } from '../models';
// @ts-ignore
import type { MessageStatusEnum } from '../models';
// @ts-ignore
import type { MessageTypeEnum } from '../models';
// @ts-ignore
import type { MessagesList } from '../models';
// @ts-ignore
import type { MessagingRequestError } from '../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Endpoint for sending text messages and picture messages using V2 messaging.
         * @summary Create Message
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {MessageRequest} messageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMessage: async (accountId: string, messageRequest: MessageRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createMessage', 'accountId', accountId)
            // verify required parameter 'messageRequest' is not null or undefined
            assertParamExists('createMessage', 'messageRequest', messageRequest)
            const localVarPath = `/users/{accountId}/messages`
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
            localVarRequestOptions.data = serializeDataIfNeeded(messageRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of messages based on query parameters.
         * @summary List Messages
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [messageId] The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. 
         * @param {string} [sourceTn] The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {string} [destinationTn] The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {MessageStatusEnum} [messageStatus] The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. 
         * @param {ListMessageDirectionEnum} [messageDirection] The direction of the message. One of INBOUND OUTBOUND.
         * @param {string} [carrierName] The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T). 
         * @param {MessageTypeEnum} [messageType] The type of message. Either sms or mms.
         * @param {number} [errorCode] The error code of the message.
         * @param {string} [fromDateTime] The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [toDateTime] The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [campaignId] The campaign ID of the message.
         * @param {string} [sort] The field and direction to sort by combined with a colon. Direction is either asc or desc.
         * @param {string} [pageToken] A base64 encoded value used for pagination of results.
         * @param {number} [limit] The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. 
         * @param {boolean} [limitTotalCount] When set to true, the response\&#39;s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMessages: async (accountId: string, messageId?: string, sourceTn?: string, destinationTn?: string, messageStatus?: MessageStatusEnum, messageDirection?: ListMessageDirectionEnum, carrierName?: string, messageType?: MessageTypeEnum, errorCode?: number, fromDateTime?: string, toDateTime?: string, campaignId?: string, sort?: string, pageToken?: string, limit?: number, limitTotalCount?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('listMessages', 'accountId', accountId)
            const localVarPath = `/users/{accountId}/messages`
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

            if (messageId !== undefined) {
                localVarQueryParameter['messageId'] = messageId;
            }

            if (sourceTn !== undefined) {
                localVarQueryParameter['sourceTn'] = sourceTn;
            }

            if (destinationTn !== undefined) {
                localVarQueryParameter['destinationTn'] = destinationTn;
            }

            if (messageStatus !== undefined) {
                localVarQueryParameter['messageStatus'] = messageStatus;
            }

            if (messageDirection !== undefined) {
                localVarQueryParameter['messageDirection'] = messageDirection;
            }

            if (carrierName !== undefined) {
                localVarQueryParameter['carrierName'] = carrierName;
            }

            if (messageType !== undefined) {
                localVarQueryParameter['messageType'] = messageType;
            }

            if (errorCode !== undefined) {
                localVarQueryParameter['errorCode'] = errorCode;
            }

            if (fromDateTime !== undefined) {
                localVarQueryParameter['fromDateTime'] = fromDateTime;
            }

            if (toDateTime !== undefined) {
                localVarQueryParameter['toDateTime'] = toDateTime;
            }

            if (campaignId !== undefined) {
                localVarQueryParameter['campaignId'] = campaignId;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (limitTotalCount !== undefined) {
                localVarQueryParameter['limitTotalCount'] = limitTotalCount;
            }


    
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
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MessagesApiAxiosParamCreator(configuration)
    return {
        /**
         * Endpoint for sending text messages and picture messages using V2 messaging.
         * @summary Create Message
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {MessageRequest} messageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMessage(accountId: string, messageRequest: MessageRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Message>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMessage(accountId, messageRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.createMessage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of messages based on query parameters.
         * @summary List Messages
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [messageId] The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. 
         * @param {string} [sourceTn] The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {string} [destinationTn] The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {MessageStatusEnum} [messageStatus] The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. 
         * @param {ListMessageDirectionEnum} [messageDirection] The direction of the message. One of INBOUND OUTBOUND.
         * @param {string} [carrierName] The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T). 
         * @param {MessageTypeEnum} [messageType] The type of message. Either sms or mms.
         * @param {number} [errorCode] The error code of the message.
         * @param {string} [fromDateTime] The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [toDateTime] The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [campaignId] The campaign ID of the message.
         * @param {string} [sort] The field and direction to sort by combined with a colon. Direction is either asc or desc.
         * @param {string} [pageToken] A base64 encoded value used for pagination of results.
         * @param {number} [limit] The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. 
         * @param {boolean} [limitTotalCount] When set to true, the response\&#39;s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMessages(accountId: string, messageId?: string, sourceTn?: string, destinationTn?: string, messageStatus?: MessageStatusEnum, messageDirection?: ListMessageDirectionEnum, carrierName?: string, messageType?: MessageTypeEnum, errorCode?: number, fromDateTime?: string, toDateTime?: string, campaignId?: string, sort?: string, pageToken?: string, limit?: number, limitTotalCount?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessagesList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMessages(accountId, messageId, sourceTn, destinationTn, messageStatus, messageDirection, carrierName, messageType, errorCode, fromDateTime, toDateTime, campaignId, sort, pageToken, limit, limitTotalCount, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MessagesApi.listMessages']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MessagesApiFp(configuration)
    return {
        /**
         * Endpoint for sending text messages and picture messages using V2 messaging.
         * @summary Create Message
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {MessageRequest} messageRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMessage(accountId: string, messageRequest: MessageRequest, options?: RawAxiosRequestConfig): AxiosPromise<Message> {
            return localVarFp.createMessage(accountId, messageRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of messages based on query parameters.
         * @summary List Messages
         * @param {string} accountId Your Bandwidth Account ID.
         * @param {string} [messageId] The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. 
         * @param {string} [sourceTn] The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {string} [destinationTn] The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
         * @param {MessageStatusEnum} [messageStatus] The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. 
         * @param {ListMessageDirectionEnum} [messageDirection] The direction of the message. One of INBOUND OUTBOUND.
         * @param {string} [carrierName] The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T). 
         * @param {MessageTypeEnum} [messageType] The type of message. Either sms or mms.
         * @param {number} [errorCode] The error code of the message.
         * @param {string} [fromDateTime] The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [toDateTime] The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
         * @param {string} [campaignId] The campaign ID of the message.
         * @param {string} [sort] The field and direction to sort by combined with a colon. Direction is either asc or desc.
         * @param {string} [pageToken] A base64 encoded value used for pagination of results.
         * @param {number} [limit] The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. 
         * @param {boolean} [limitTotalCount] When set to true, the response\&#39;s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMessages(accountId: string, messageId?: string, sourceTn?: string, destinationTn?: string, messageStatus?: MessageStatusEnum, messageDirection?: ListMessageDirectionEnum, carrierName?: string, messageType?: MessageTypeEnum, errorCode?: number, fromDateTime?: string, toDateTime?: string, campaignId?: string, sort?: string, pageToken?: string, limit?: number, limitTotalCount?: boolean, options?: RawAxiosRequestConfig): AxiosPromise<MessagesList> {
            return localVarFp.listMessages(accountId, messageId, sourceTn, destinationTn, messageStatus, messageDirection, carrierName, messageType, errorCode, fromDateTime, toDateTime, campaignId, sort, pageToken, limit, limitTotalCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * Endpoint for sending text messages and picture messages using V2 messaging.
     * @summary Create Message
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {MessageRequest} messageRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public createMessage(accountId: string, messageRequest: MessageRequest, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).createMessage(accountId, messageRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of messages based on query parameters.
     * @summary List Messages
     * @param {string} accountId Your Bandwidth Account ID.
     * @param {string} [messageId] The ID of the message to search for. Special characters need to be encoded using URL encoding. Message IDs could come in different formats, e.g., 9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6 and 1589228074636lm4k2je7j7jklbn2 are valid message ID formats. Note that you must include at least one query parameter. 
     * @param {string} [sourceTn] The phone number that sent the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
     * @param {string} [destinationTn] The phone number that received the message. Accepted values are: a single full phone number a comma separated list of full phone numbers (maximum of 10) or a single partial phone number (minimum of 5 characters e.g. \&#39;%2B1919\&#39;). 
     * @param {MessageStatusEnum} [messageStatus] The status of the message. One of RECEIVED QUEUED SENDING SENT FAILED DELIVERED ACCEPTED UNDELIVERED. 
     * @param {ListMessageDirectionEnum} [messageDirection] The direction of the message. One of INBOUND OUTBOUND.
     * @param {string} [carrierName] The name of the carrier used for this message. Possible values include but are not limited to Verizon and TMobile. Special characters need to be encoded using URL encoding (i.e. AT&amp;T should be passed as AT%26T). 
     * @param {MessageTypeEnum} [messageType] The type of message. Either sms or mms.
     * @param {number} [errorCode] The error code of the message.
     * @param {string} [fromDateTime] The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
     * @param {string} [toDateTime] The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. 
     * @param {string} [campaignId] The campaign ID of the message.
     * @param {string} [sort] The field and direction to sort by combined with a colon. Direction is either asc or desc.
     * @param {string} [pageToken] A base64 encoded value used for pagination of results.
     * @param {number} [limit] The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000. 
     * @param {boolean} [limitTotalCount] When set to true, the response\&#39;s totalCount field will have a maximum value of 10,000. When set to false, or excluded, this will give an accurate totalCount of all messages that match the provided filters. If you are experiencing latency, try using this parameter to limit your results.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public listMessages(accountId: string, messageId?: string, sourceTn?: string, destinationTn?: string, messageStatus?: MessageStatusEnum, messageDirection?: ListMessageDirectionEnum, carrierName?: string, messageType?: MessageTypeEnum, errorCode?: number, fromDateTime?: string, toDateTime?: string, campaignId?: string, sort?: string, pageToken?: string, limit?: number, limitTotalCount?: boolean, options?: RawAxiosRequestConfig) {
        return MessagesApiFp(this.configuration).listMessages(accountId, messageId, sourceTn, destinationTn, messageStatus, messageDirection, carrierName, messageType, errorCode, fromDateTime, toDateTime, campaignId, sort, pageToken, limit, limitTotalCount, options).then((request) => request(this.axios, this.basePath));
    }
}


//@ts-nocheck
import { MessagesApi } from '../../../api';
import { Configuration } from '../../../configuration';
import {
    ListMessageDirectionEnum,
    MessageDirectionEnum,
    MessageRequest,
    MessageStatusEnum,
    MessageTypeEnum,
    PriorityEnum
} from '../../../models';

describe('MessagesApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const messagesApi = new MessagesApi(config);

    const smsText = 'nodejs sdk test SMS';
    const smsTag = 'nodejs sdk test SMS tag';
    const priority = PriorityEnum.High;
    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 + 60;
    const expiration = new Date(expirationTime).toISOString();

    describe('createMessage', () => {
        test('should create a message', async () => {
            const messageRequest: MessageRequest = {
                to: new Set([USER_NUMBER]),
                from: BW_NUMBER,
                text: smsText,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                tag: smsTag,
                priority: priority,
                expiration: expiration
            };

            const { status, data } = await messagesApi.createMessage(BW_ACCOUNT_ID, messageRequest);
            
            expect(status).toEqual(202);
            expect(data.id).toHaveLength(29);
            expect(data.owner).toHaveLength(12);
            expect(data.applicationId).toHaveLength(36);
            expect(data.time).toBeDateString();
            expect(data.segmentCount).toBeInteger();
            expect(data.direction).toBeOneOf(Object.values(MessageDirectionEnum));
            expect(data.to).toBeInstanceOf(Array);
            expect(data.to![0]).toHaveLength(12);
            expect(data.from).toHaveLength(12);
            expect(data.media).toBeInstanceOf(Array);
            expect(data.media![0]).toStartWith('http');
            expect(data.text).toBeString();
            expect(data.tag).toBeString();
            expect(data.priority).toBeOneOf(Object.values(PriorityEnum));
            expect(data.expiration).toBeDateString();
        });
    });

    describe('listMessages', () => {
        test('should list messages', async () => {
            const { status, data } =
                await messagesApi.listMessages(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.totalCount).toBeInteger();
            expect(data.pageInfo).toContainAllKeys(['prevPage', 'nextPage', 'prevPageToken', 'nextPageToken']);
            expect(data.pageInfo!.prevPage).toStartWith('http');
            expect(data.pageInfo!.nextPage).toStartWith('http');
            expect(data.pageInfo!.prevPageToken).toBeString();
            expect(data.pageInfo!.nextPageToken).toBeString();
            expect(data.messages).toBeInstanceOf(Array);
            expect(data.messages![0].messageId).toHaveLength(29);
            expect(data.messages![0].accountId).toHaveLength(7);
            expect(data.messages![0].sourceTn).toHaveLength(12);
            expect(data.messages![0].destinationTn).toHaveLength(12);
            expect(data.messages![0].messageStatus).toBeOneOf(Object.values(MessageStatusEnum));
            expect(data.messages![0].messageDirection).toBeOneOf(Object.values(ListMessageDirectionEnum));
            expect(data.messages![0].messageType).toBeOneOf(Object.values(MessageTypeEnum));
            expect(data.messages![0].segmentCount).toBeInteger();
            expect(data.messages![0].errorCode).toBePositive();
            expect(data.messages![0].receiveTime).toBeDateString();
            expect(data.messages![0].carrierName).toBeString();
            expect(data.messages![0].messageSize).toBeInteger();
            expect(data.messages![0].messageLength).toBeInteger();
            expect(data.messages![0].attachmentCount).toBeInteger();
            expect(data.messages![0].recipientCount).toBeInteger();
            expect(data.messages![0].campaignClass).toBeString();
            expect(data.messages![0].campaignId).toBeString();
            expect(data.messages![0].bwLatency).toBeInteger();
            expect(data.messages![0].carrierLatency).toBeInteger();
            expect(data.messages![0].callingNumberCountryA3).toBeString();
            expect(data.messages![0].calledNumberCountryA3).toBeString();
            expect(data.messages![0].product).toBeString();
            expect(data.messages![0].location).toBeString();
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            try {
                await messagesApi.createMessage(BW_ACCOUNT_ID, {});
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            const unauthorizedConfig = new Configuration({ basePath: 'http://127.0.0.1:4010' });
            const unauthorizedMessagesApi = new MessagesApi(unauthorizedConfig);
            
            try {
                await unauthorizedMessagesApi.listMessages(BW_ACCOUNT_ID);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });
    });
});

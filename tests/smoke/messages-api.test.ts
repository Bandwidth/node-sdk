//@ts-nocheck
import { MessagesApi } from '../../api';
import { Configuration } from '../../configuration';
import { ListMessageDirectionEnum, MessageRequest, PriorityEnum } from '../../models';

describe('MessagesApi', () => {
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const messagesApi = new MessagesApi(config);

    const mmsText = 'nodejs sdk test MMS';
    const smsText = 'nodejs sdk test SMS';
    const mmsTag = 'nodejs sdk test MMS tag';
    const smsTag = 'nodejs sdk test SMS tag';
    const mediaUrl = 'https://cdn2.thecatapi.com/images/MTY3ODk4Mg.jpg';
    const priority = PriorityEnum.High;
    const callingNumberCountryA3 = 'USA';
    const listMessageDirection = ListMessageDirectionEnum.Outbound;
    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 + 60;
    const expiration = new Date(expirationTime).toISOString();

    describe('createMessage', () => {
        test('should create SMS message', async () => {
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
            expect(data.owner).toEqual(BW_NUMBER);
            expect(data.to).toEqual([USER_NUMBER]);
            expect(data.from).toEqual(BW_NUMBER);
            expect(data.text).toEqual(smsText);
            expect(data.tag).toEqual(smsTag);
            expect(data.priority).toEqual(priority);
        });

        test('should create MMS message', async () => {
            const messageRequest: MessageRequest = {
                to: new Set([USER_NUMBER]),
                from: BW_NUMBER,
                text: mmsText,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                tag: mmsTag,
                media: [mediaUrl]
            };

            const { status, data } = await messagesApi.createMessage(BW_ACCOUNT_ID, messageRequest);

            expect(status).toEqual(202);
            expect(data.id).toHaveLength(29);
            expect(data.owner).toEqual(BW_NUMBER);
            expect(data.to).toEqual([USER_NUMBER]);
            expect(data.from).toEqual(BW_NUMBER);
            expect(data.text).toEqual(mmsText);
            expect(data.tag).toEqual(mmsTag);
            expect(data.media).toEqual([mediaUrl]);
        });
    });

    describe('listMessages', () => {
        test('should list messages', async () => {
            const { status, data } =
                await messagesApi.listMessages(BW_ACCOUNT_ID, undefined, BW_NUMBER,
                    undefined, undefined, listMessageDirection, undefined, undefined,
                    undefined, undefined, undefined, undefined, undefined, undefined,
                    undefined, undefined, undefined, undefined, callingNumberCountryA3);
            
            expect(status).toEqual(200);
            expect(data.messages).toBeInstanceOf(Array);
            expect(data.messages![0].accountId).toEqual(BW_ACCOUNT_ID);
            expect(data.messages![0].messageId).toHaveLength(29);
            expect(data.messages![0].sourceTn).toEqual(BW_NUMBER);
            expect(data.messages![0].messageDirection).toEqual(listMessageDirection);
            expect(data.messages![0].callingNumberCountryA3).toEqual(callingNumberCountryA3);
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            const messageRequest: MessageRequest = {
                applicationId: BW_MESSAGING_APPLICATION_ID,
                to: new Set(['+1invalid']),
                from: BW_NUMBER,
                text: smsText
            };

            try {
                await messagesApi.createMessage(BW_ACCOUNT_ID, messageRequest);
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            const configBad = new Configuration({username: UNAUTHORIZED_USERNAME, password: UNAUTHORIZED_PASSWORD});
            const messagesApiBad = new MessagesApi(configBad);

            const messageRequest: MessageRequest = {
                applicationId: BW_MESSAGING_APPLICATION_ID,
                to: new Set([USER_NUMBER]),
                from: BW_NUMBER,
                text: smsText
            };

            try {
                await messagesApiBad.createMessage(BW_ACCOUNT_ID, messageRequest);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });
    });
});

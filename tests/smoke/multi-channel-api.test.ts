//@ts-nocheck
import { MultiChannelApi } from '../../api';
import { Configuration } from '../../configuration';
import {
    MultiChannelChannelListObject,
    MultiChannelMessageChannelEnum,
    PriorityEnum,
    RbmMessageContentText,
    SmsMessageContent,
    MmsMessageContent,
    RbmMessageContentText,
    MultiChannelMessageRequest,
    MessageDirectionEnum,
    RbmActionTypeEnum
} from '../../models';

describe('MultiChannelApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD
    });
    const multiChannelApi = new MultiChannelApi(config);

    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 + 60;
    const expiration = new Date(expirationTime).toISOString();

    describe('createMultiChannelSMSMessage', () => {
        test('should create a multi-channel SMS message', async () => {
            const content: SmsMessageContent = { text: "Hello World!" };
            
            const channelListObject: MultiChannelChannelListSMSObject = {
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                channel: MultiChannelMessageChannelEnum.Sms,
                content,
            };

            const multiChannelMessageRequest: MultiChannelMessageRequest = {
                to: USER_NUMBER,
                tag: "tag",
                priority: PriorityEnum.High,
                expiration,
                channelList: [channelListObject],
            };

            const { status, data } = await multiChannelApi.createMultiChannelMessage(
                BW_ACCOUNT_ID,
                multiChannelMessageRequest
            );
            
            expect(status).toEqual(202);
            expect(data.links).toBeArray();
            expect(data.data?.id).toBeString();
            expect(data.data?.time).toBeDateString();
            expect(data.data?.direction).toBeOneOf(Object.values(MessageDirectionEnum));
            expect(data.data?.to).toBeArray();
            expect(data.data?.tag).toBeString();
            expect(data.data?.priority).toBeOneOf(Object.values(PriorityEnum));
            expect(data.data?.expiration).toBeDateString();
            expect(data.data?.channelList).toBeArray();
            expect(data.data?.channelList![0].channel).toEqual(MultiChannelMessageChannelEnum.Sms);
        });
    });

    describe('createMultiChannelMMSMessage', () => {
        test('should create a multi-channel MMS message', async () => {
            const content: MmsMessageContent = {
                text: "Hello World!",
                media: [{ fileUrl: "https://example.com/image.jpg" }]
            };
            
            const channelListObject: MultiChannelChannelListMMSObject = {
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                channel: MultiChannelMessageChannelEnum.Mms,
                content,
            };

            const multiChannelMessageRequest: MultiChannelMessageRequest = {
                to: USER_NUMBER,
                tag: "tag",
                priority: PriorityEnum.High,
                expiration,
                channelList: [channelListObject],
            };

            const { status, data } = await multiChannelApi.createMultiChannelMessage(
                BW_ACCOUNT_ID,
                multiChannelMessageRequest
            );
            
            expect(status).toEqual(202);
            expect(data.links).toBeArray();
            expect(data.data?.id).toBeString();
            expect(data.data?.time).toBeDateString();
            expect(data.data?.direction).toBeOneOf(Object.values(MessageDirectionEnum));
            expect(data.data?.to).toBeArray();
            expect(data.data?.tag).toBeString();
            expect(data.data?.priority).toBeOneOf(Object.values(PriorityEnum));
            expect(data.data?.expiration).toBeDateString();
            expect(data.data?.channelList).toBeArray();
            expect(data.data?.channelList![0].channel).toEqual(MultiChannelMessageChannelEnum.Mms);
        });
    });

    describe('createMultiChannelRBMMessage', () => {
        test('should create a multi-channel RBM message', async () => {
            const content: RbmMessageContentText = {
                text: "Hello World!",
                suggestions: [{
                    type: RbmActionTypeEnum.DialPhone,
                    text: "Call Us",
                    postbackData: "tel:+1234567890",
                    phoneNumber: BW_NUMBER
                }]
            };
            
            const channelListObject: MultiChannelChannelListRBMObject = {
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                channel: MultiChannelMessageChannelEnum.Rbm,
                content,
            };

            const multiChannelMessageRequest: MultiChannelMessageRequest = {
                to: USER_NUMBER,
                tag: "tag",
                priority: PriorityEnum.High,
                expiration,
                channelList: [channelListObject],
            };

            const { status, data } = await multiChannelApi.createMultiChannelMessage(
                BW_ACCOUNT_ID,
                multiChannelMessageRequest
            );
            
            expect(status).toEqual(202);
            expect(data.links).toBeArray();
            expect(data.data?.id).toBeString();
            expect(data.data?.time).toBeDateString();
            expect(data.data?.direction).toBeOneOf(Object.values(MessageDirectionEnum));
            expect(data.data?.to).toBeArray();
            expect(data.data?.tag).toBeString();
            expect(data.data?.priority).toBeOneOf(Object.values(PriorityEnum));
            expect(data.data?.expiration).toBeDateString();
            expect(data.data?.channelList).toBeArray();
            expect(data.data?.channelList![0].channel).toEqual(MultiChannelMessageChannelEnum.Rbm);
        });
    });
});

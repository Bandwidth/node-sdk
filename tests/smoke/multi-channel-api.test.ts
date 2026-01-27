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
    RbmActionTypeEnum,
    RbmMessageMedia,
    RbmActionDial,
    MultiChannelChannelListRBMResponseObject,
    RbmStandaloneCard,
    StandaloneCardOrientationEnum,
    ThumbnailAlignmentEnum,
    MultiChannelChannelListSMSObject,
    MultiChannelChannelListMMSObject,
    MultiChannelChannelListRBMObject
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

    describe('createMultiChannelRBMTextMessage', () => {
        test('should create a multi-channel RBM text message', async () => {
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
            expect(data.data?.channelList![0]).toBeObject();
            const channelListObject = data.data?.channelList![0] as MultiChannelChannelListRBMResponseObject;
            expect(channelListObject.from).toEqual(BW_NUMBER);
            expect(channelListObject.applicationId).toEqual(BW_MESSAGING_APPLICATION_ID);
            expect(channelListObject.channel).toEqual(MultiChannelMessageChannelEnum.Rbm);
            expect(channelListObject.content).toBeObject();
            expect(channelListObject.owner).toEqual(BW_NUMBER);
            const rbmContent = channelListObject.content as RbmMessageContentText;
            expect(rbmContent.text).toBeString();
            expect(rbmContent.suggestions).toBeArray();
            expect(rbmContent.suggestions[0]).toBeObject();
            const rbmActionDial = rbmContent.suggestions[0] as RbmActionDial;
            expect(rbmActionDial.type).toEqual(RbmActionTypeEnum.DialPhone);
            expect(rbmActionDial.text).toBeString();
            expect(rbmActionDial.postbackData).toBeString();
            expect(rbmActionDial.phoneNumber).toBeString();
        });
    });

    describe('createMultiChannelRBMMediaMessage', () => {
        test('should create a multi-channel RBM media message', async () => {
            const content: RbmMessageMedia = {
                media:[{
                    fileUrl: "https://example.com/image.jpg",
                    thumbnailUrl: "https://example.com/thumbnail.jpg",
                }],
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
            expect(data.data?.channelList![0]).toBeObject();
            const channelListObject = data.data?.channelList![0] as MultiChannelChannelListRBMResponseObject;
            expect(channelListObject.from).toEqual(BW_NUMBER);
            expect(channelListObject.applicationId).toEqual(BW_MESSAGING_APPLICATION_ID);
            expect(channelListObject.channel).toEqual(MultiChannelMessageChannelEnum.Rbm);
            expect(channelListObject.content).toBeObject();
            expect(channelListObject.owner).toEqual(BW_NUMBER);
            const rbmContent = channelListObject.content as RbmMessageMedia;
            expect(rbmContent.media).toBeArray();
            expect(rbmContent.media[0].fileUrl).toBeString();
            expect(rbmContent.media[0].thumbnailUrl).toBeString();
            expect(rbmContent.suggestions).toBeArray();
            expect(rbmContent.suggestions[0]).toBeObject();
            const rbmActionDial = rbmContent.suggestions[0] as RbmActionDial;
            expect(rbmActionDial.type).toEqual(RbmActionTypeEnum.DialPhone);
            expect(rbmActionDial.text).toBeString();
            expect(rbmActionDial.postbackData).toBeString();
            expect(rbmActionDial.phoneNumber).toBeString();
        });
    });

    describe('createMultiChannelRBMRichStandaloneMessage', () => {
        test('should create a multi-channel RBM standalone rich card message', async () => {
            const content: RbmStandaloneCard = {
                orientation: StandaloneCardOrientationEnum.Horizontal,
                thumbnailImageAlignment: ThumbnailAlignmentEnum.Left,
                cardContent: {
                    title: "Test Title"
                }
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
            expect(data.data?.channelList![0]).toBeObject();
            const channelListObject = data.data?.channelList![0] as MultiChannelChannelListRBMResponseObject;
            expect(channelListObject.from).toEqual(BW_NUMBER);
            expect(channelListObject.applicationId).toEqual(BW_MESSAGING_APPLICATION_ID);
            expect(channelListObject.channel).toEqual(MultiChannelMessageChannelEnum.Rbm);
            expect(channelListObject.content).toBeObject();
            expect(channelListObject.owner).toEqual(BW_NUMBER);
            const rbmContent = channelListObject.content as RbmStandaloneCard;
            expect(rbmContent.orientation).toEqual(StandaloneCardOrientationEnum.Horizontal);
            expect(rbmContent.thumbnailImageAlignment).toEqual(ThumbnailAlignmentEnum.Left);
            expect(rbmContent.cardContent.title).toBeString();
        });
    });
});

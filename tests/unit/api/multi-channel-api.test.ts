//@ts-nocheck
import { MultiChannelApi } from '../../../api';
import { Configuration } from '../../../configuration';
import {
    MultiChannelChannelListRBMObject,
    MultiChannelMessageChannelEnum,
    PriorityEnum,
    RbmMessageContentText,
    SmsMessageContent,
    MultiChannelMessageRequest,
    MessageDirectionEnum
} from '../../../models';

describe('MultiChannelApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const multiChannelApi = new MultiChannelApi(config);

    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 + 60;
    const expiration = new Date(expirationTime).toISOString();

    describe('createMultiChannelMessage', () => {
        test('should create a multi-channel message', async () => {
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
            expect(data.data?.channelList![0].channel).toBeOneOf(Object.values(MultiChannelMessageChannelEnum));
        });
    });
});

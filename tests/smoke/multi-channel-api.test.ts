//@ts-nocheck
import { MultiChannelApi } from '../../api';
import { Configuration } from '../../configuration';
import {
    MultiChannelChannelListObject,
    MultiChannelMessageChannelEnum,
    PriorityEnum,
    RbmMessageContentText
} from '../../models';

describe('MultiChannelApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD
    });
    const multiChannelApi = new MultiChannelApi(config);

    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 + 60;
    const expiration = new Date(expirationTime).toISOString();

    describe('createMultiChannelMessage', () => {
        test('should create a multi-channel message', async () => {
            const channelListObject: MultiChannelChannelListObject = {
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                channel: MultiChannelMessageChannelEnum.Rbm,
                content: {
                    text: "Hello World!"
                }
            };

            const multiChannelMessageRequest: MultiChannelMessageRequest = {
                to: USER_NUMBER,
                tag: "tag",
                priority: PriorityEnum.HIGH,
                channelList: [channelListObject],
                expiration,
            };

            const { status, data } = await multiChannelApi.createMultiChannelMessage(BW_ACCOUNT_ID, multiChannelMessageRequest);
            expect(status).toEqual(202);
        });
    });
});

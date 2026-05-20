import { CreateMultiChannelMessageResponse } from '../../../models/create-multi-channel-message-response';
import { MultiChannelMessageResponseData } from '../../../models/multi-channel-message-response-data';

describe('CreateMultiChannelMessageResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: CreateMultiChannelMessageResponse = {
            links: [],
            data: {} as unknown as MultiChannelMessageResponseData,
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.data).toBeDefined();
        expect(fixture.errors).toEqual([]);
    });
});

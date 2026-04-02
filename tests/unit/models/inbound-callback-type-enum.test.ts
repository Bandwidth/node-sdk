import { InboundCallbackTypeEnum } from '../../../models/inbound-callback-type-enum';

describe('InboundCallbackTypeEnum', () => {
    test('should define the expected values', () => {
        expect(InboundCallbackTypeEnum.MessageReceived).toBe('message-received');
        expect(InboundCallbackTypeEnum.RequestLocationResponse).toBe('request-location-response');
        expect(InboundCallbackTypeEnum.SuggestionResponse).toBe('suggestion-response');
    });
});

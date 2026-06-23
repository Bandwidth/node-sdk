import { InboundCallbackTypeEnum } from '../../../models/inbound-callback-type-enum';

describe('InboundCallbackTypeEnum', () => {
    test('should define the expected values', () => {
        expect(InboundCallbackTypeEnum.MessageReceived).toBe('message-received');
        expect(InboundCallbackTypeEnum.RequestedLocationResponse).toBe('requested-location-response');
        expect(InboundCallbackTypeEnum.SuggestionResponse).toBe('suggestion-response');
        expect(Object.values(InboundCallbackTypeEnum)).toEqual([
            'message-received',
            'requested-location-response',
            'suggestion-response'
        ]);
    });
});

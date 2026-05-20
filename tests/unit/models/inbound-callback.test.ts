import { InboundCallback } from '../../../models/inbound-callback';
import { InboundCallbackTypeEnum } from '../../../models/inbound-callback-type-enum';
import { InboundCallbackMessage } from '../../../models/inbound-callback-message';

describe('InboundCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: InboundCallback = {
            time: 'test-time',
            type: InboundCallbackTypeEnum.MessageReceived,
            to: 'test-to',
            description: 'test-description',
            message: {} as unknown as InboundCallbackMessage,
            carrierName: 'test-carrierName',
        };

        expect(fixture.time).toBe('test-time');
        expect(fixture.type).toBe(InboundCallbackTypeEnum.MessageReceived);
        expect(fixture.to).toBe('test-to');
        expect(fixture.description).toBe('test-description');
        expect(fixture.message).toBeDefined();
        expect(fixture.carrierName).toBe('test-carrierName');
    });
});

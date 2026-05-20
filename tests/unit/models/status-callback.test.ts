import { StatusCallback } from '../../../models/status-callback';
import { StatusCallbackTypeEnum } from '../../../models/status-callback-type-enum';
import { StatusCallbackMessage } from '../../../models/status-callback-message';

describe('StatusCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: StatusCallback = {
            time: 'test-time',
            eventTime: 'test-eventTime',
            type: StatusCallbackTypeEnum.MessageSending,
            to: 'test-to',
            description: 'test-description',
            message: {} as unknown as StatusCallbackMessage,
            errorCode: 1.5,
            carrierName: 'test-carrierName',
        };

        expect(fixture.time).toBe('test-time');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.type).toBe(StatusCallbackTypeEnum.MessageSending);
        expect(fixture.to).toBe('test-to');
        expect(fixture.description).toBe('test-description');
        expect(fixture.message).toBeDefined();
        expect(fixture.errorCode).toBe(1.5);
        expect(fixture.carrierName).toBe('test-carrierName');
    });
});

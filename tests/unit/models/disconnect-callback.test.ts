import { DisconnectCallback } from '../../../models/disconnect-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('DisconnectCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: DisconnectCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            callId: 'test-callId',
            direction: CallDirectionEnum.Inbound,
            callUrl: 'test-callUrl',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            endTime: 'test-endTime',
            cause: 'test-cause',
            errorMessage: 'test-errorMessage',
            errorId: 'test-errorId',
            tag: 'test-tag',
        };

        expect(fixture.eventType).toBe('test-eventType');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.from).toBe('test-from');
        expect(fixture.to).toBe('test-to');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.direction).toBe(CallDirectionEnum.Inbound);
        expect(fixture.callUrl).toBe('test-callUrl');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.cause).toBe('test-cause');
        expect(fixture.errorMessage).toBe('test-errorMessage');
        expect(fixture.errorId).toBe('test-errorId');
        expect(fixture.tag).toBe('test-tag');
    });
});

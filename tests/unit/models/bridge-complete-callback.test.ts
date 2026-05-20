import { BridgeCompleteCallback } from '../../../models/bridge-complete-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('BridgeCompleteCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: BridgeCompleteCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            direction: CallDirectionEnum.Inbound,
            callId: 'test-callId',
            callUrl: 'test-callUrl',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            tag: 'test-tag',
            cause: 'test-cause',
            errorMessage: 'test-errorMessage',
            errorId: 'test-errorId',
        };

        expect(fixture.eventType).toBe('test-eventType');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.from).toBe('test-from');
        expect(fixture.to).toBe('test-to');
        expect(fixture.direction).toBe(CallDirectionEnum.Inbound);
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.callUrl).toBe('test-callUrl');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.cause).toBe('test-cause');
        expect(fixture.errorMessage).toBe('test-errorMessage');
        expect(fixture.errorId).toBe('test-errorId');
    });
});

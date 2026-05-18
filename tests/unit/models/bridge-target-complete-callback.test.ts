import { BridgeTargetCompleteCallback } from '../../../models/bridge-target-complete-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('BridgeTargetCompleteCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: BridgeTargetCompleteCallback = {
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
    });
});

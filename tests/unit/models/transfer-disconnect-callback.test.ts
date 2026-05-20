import { TransferDisconnectCallback } from '../../../models/transfer-disconnect-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('TransferDisconnectCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: TransferDisconnectCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            direction: CallDirectionEnum.Inbound,
            callId: 'test-callId',
            callUrl: 'test-callUrl',
            parentCallId: 'test-parentCallId',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            endTime: 'test-endTime',
            tag: 'test-tag',
            transferCallerId: 'test-transferCallerId',
            transferTo: 'test-transferTo',
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
        expect(fixture.parentCallId).toBe('test-parentCallId');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.transferCallerId).toBe('test-transferCallerId');
        expect(fixture.transferTo).toBe('test-transferTo');
        expect(fixture.cause).toBe('test-cause');
        expect(fixture.errorMessage).toBe('test-errorMessage');
        expect(fixture.errorId).toBe('test-errorId');
    });
});

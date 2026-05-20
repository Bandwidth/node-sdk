import { DtmfCallback } from '../../../models/dtmf-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('DtmfCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: DtmfCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            callId: 'test-callId',
            direction: CallDirectionEnum.Inbound,
            digit: 'test-digit',
            callUrl: 'test-callUrl',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            parentCallId: 'test-parentCallId',
            transferCallerId: 'test-transferCallerId',
            transferTo: 'test-transferTo',
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
        expect(fixture.digit).toBe('test-digit');
        expect(fixture.callUrl).toBe('test-callUrl');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.parentCallId).toBe('test-parentCallId');
        expect(fixture.transferCallerId).toBe('test-transferCallerId');
        expect(fixture.transferTo).toBe('test-transferTo');
        expect(fixture.tag).toBe('test-tag');
    });
});

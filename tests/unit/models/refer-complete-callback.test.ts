import { ReferCompleteCallback } from '../../../models/refer-complete-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';
import { ReferCallStatusEnum } from '../../../models/refer-call-status-enum';

describe('ReferCompleteCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: ReferCompleteCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            direction: CallDirectionEnum.Inbound,
            callId: 'test-callId',
            callUrl: 'test-callUrl',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            tag: 'test-tag',
            referCallStatus: ReferCallStatusEnum.Success,
            referSipResponseCode: 1,
            notifySipResponseCode: 1,
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
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.referCallStatus).toBe(ReferCallStatusEnum.Success);
        expect(fixture.referSipResponseCode).toBe(1);
        expect(fixture.notifySipResponseCode).toBe(1);
    });
});

import { CallState } from '../../../models/call-state';
import { CallDirectionEnum } from '../../../models/call-direction-enum';

describe('CallState', () => {
    test('should accept the expected shape', () => {
        const fixture: CallState = {
            applicationId: 'test-applicationId',
            accountId: 'test-accountId',
            callId: 'test-callId',
            parentCallId: 'test-parentCallId',
            to: 'test-to',
            from: 'test-from',
            direction: CallDirectionEnum.Inbound,
            state: 'test-state',
            stirShaken: {},
            identity: 'test-identity',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            answerTime: 'test-answerTime',
            endTime: 'test-endTime',
            disconnectCause: 'test-disconnectCause',
            errorMessage: 'test-errorMessage',
            errorId: 'test-errorId',
            lastUpdate: 'test-lastUpdate',
        };

        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.parentCallId).toBe('test-parentCallId');
        expect(fixture.to).toBe('test-to');
        expect(fixture.from).toBe('test-from');
        expect(fixture.direction).toBe(CallDirectionEnum.Inbound);
        expect(fixture.state).toBe('test-state');
        expect(fixture.stirShaken).toEqual({});
        expect(fixture.identity).toBe('test-identity');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.answerTime).toBe('test-answerTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.disconnectCause).toBe('test-disconnectCause');
        expect(fixture.errorMessage).toBe('test-errorMessage');
        expect(fixture.errorId).toBe('test-errorId');
        expect(fixture.lastUpdate).toBe('test-lastUpdate');
    });
});

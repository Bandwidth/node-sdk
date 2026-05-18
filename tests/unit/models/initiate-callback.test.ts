import { InitiateCallback } from '../../../models/initiate-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';
import { Diversion } from '../../../models/diversion';
import { StirShaken } from '../../../models/stir-shaken';

describe('InitiateCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: InitiateCallback = {
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
            diversion: {} as unknown as Diversion,
            stirShaken: {} as unknown as StirShaken,
            uui: 'test-uui',
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
        expect(fixture.diversion).toBeDefined();
        expect(fixture.stirShaken).toBeDefined();
        expect(fixture.uui).toBe('test-uui');
    });
});

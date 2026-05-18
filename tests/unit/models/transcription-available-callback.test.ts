import { TranscriptionAvailableCallback } from '../../../models/transcription-available-callback';
import { CallDirectionEnum } from '../../../models/call-direction-enum';
import { FileFormatEnum } from '../../../models/file-format-enum';
import { Transcription } from '../../../models/transcription';

describe('TranscriptionAvailableCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: TranscriptionAvailableCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            accountId: 'test-accountId',
            applicationId: 'test-applicationId',
            from: 'test-from',
            to: 'test-to',
            direction: CallDirectionEnum.Inbound,
            callId: 'test-callId',
            callUrl: 'test-callUrl',
            mediaUrl: 'test-mediaUrl',
            parentCallId: 'test-parentCallId',
            recordingId: 'test-recordingId',
            enqueuedTime: 'test-enqueuedTime',
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            duration: 'test-duration',
            fileFormat: FileFormatEnum.Mp3,
            tag: 'test-tag',
            transcription: {} as unknown as Transcription,
            transferCallerId: 'test-transferCallerId',
            transferTo: 'test-transferTo',
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
        expect(fixture.mediaUrl).toBe('test-mediaUrl');
        expect(fixture.parentCallId).toBe('test-parentCallId');
        expect(fixture.recordingId).toBe('test-recordingId');
        expect(fixture.enqueuedTime).toBe('test-enqueuedTime');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.duration).toBe('test-duration');
        expect(fixture.fileFormat).toBe(FileFormatEnum.Mp3);
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.transcription).toBeDefined();
        expect(fixture.transferCallerId).toBe('test-transferCallerId');
        expect(fixture.transferTo).toBe('test-transferTo');
    });
});

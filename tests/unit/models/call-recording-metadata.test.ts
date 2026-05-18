import { CallRecordingMetadata } from '../../../models/call-recording-metadata';
import { CallDirectionEnum } from '../../../models/call-direction-enum';
import { FileFormatEnum } from '../../../models/file-format-enum';
import { RecordingTranscriptionMetadata } from '../../../models/recording-transcription-metadata';

describe('CallRecordingMetadata', () => {
    test('should accept the expected shape', () => {
        const fixture: CallRecordingMetadata = {
            applicationId: 'test-applicationId',
            accountId: 'test-accountId',
            callId: 'test-callId',
            parentCallId: 'test-parentCallId',
            recordingId: 'test-recordingId',
            to: 'test-to',
            from: 'test-from',
            transferCallerId: 'test-transferCallerId',
            transferTo: 'test-transferTo',
            duration: 'test-duration',
            direction: CallDirectionEnum.Inbound,
            channels: 1.5,
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            fileFormat: FileFormatEnum.Mp3,
            status: 'test-status',
            mediaUrl: 'test-mediaUrl',
            transcription: {} as unknown as RecordingTranscriptionMetadata,
            recordingName: 'test-recordingName',
        };

        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.callId).toBe('test-callId');
        expect(fixture.parentCallId).toBe('test-parentCallId');
        expect(fixture.recordingId).toBe('test-recordingId');
        expect(fixture.to).toBe('test-to');
        expect(fixture.from).toBe('test-from');
        expect(fixture.transferCallerId).toBe('test-transferCallerId');
        expect(fixture.transferTo).toBe('test-transferTo');
        expect(fixture.duration).toBe('test-duration');
        expect(fixture.direction).toBe(CallDirectionEnum.Inbound);
        expect(fixture.channels).toBe(1.5);
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.fileFormat).toBe(FileFormatEnum.Mp3);
        expect(fixture.status).toBe('test-status');
        expect(fixture.mediaUrl).toBe('test-mediaUrl');
        expect(fixture.transcription).toBeDefined();
        expect(fixture.recordingName).toBe('test-recordingName');
    });
});

import { ConferenceRecordingMetadata } from '../../../models/conference-recording-metadata';
import { FileFormatEnum } from '../../../models/file-format-enum';

describe('ConferenceRecordingMetadata', () => {
    test('should accept the expected shape', () => {
        const fixture: ConferenceRecordingMetadata = {
            accountId: 'test-accountId',
            conferenceId: 'test-conferenceId',
            name: 'test-name',
            recordingId: 'test-recordingId',
            duration: 'test-duration',
            channels: 1.5,
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            fileFormat: FileFormatEnum.Mp3,
            status: 'test-status',
            mediaUrl: 'test-mediaUrl',
            recordingName: 'test-recordingName',
        };

        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.conferenceId).toBe('test-conferenceId');
        expect(fixture.name).toBe('test-name');
        expect(fixture.recordingId).toBe('test-recordingId');
        expect(fixture.duration).toBe('test-duration');
        expect(fixture.channels).toBe(1.5);
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.fileFormat).toBe(FileFormatEnum.Mp3);
        expect(fixture.status).toBe('test-status');
        expect(fixture.mediaUrl).toBe('test-mediaUrl');
        expect(fixture.recordingName).toBe('test-recordingName');
    });
});

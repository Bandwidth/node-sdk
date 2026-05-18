import { ConferenceRecordingAvailableCallback } from '../../../models/conference-recording-available-callback';
import { FileFormatEnum } from '../../../models/file-format-enum';

describe('ConferenceRecordingAvailableCallback', () => {
    test('should accept the expected shape', () => {
        const fixture: ConferenceRecordingAvailableCallback = {
            eventType: 'test-eventType',
            eventTime: 'test-eventTime',
            conferenceId: 'test-conferenceId',
            name: 'test-name',
            accountId: 'test-accountId',
            recordingId: 'test-recordingId',
            channels: 1.5,
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            duration: 'test-duration',
            fileFormat: FileFormatEnum.Mp3,
            mediaUrl: 'test-mediaUrl',
            tag: 'test-tag',
            status: 'test-status',
        };

        expect(fixture.eventType).toBe('test-eventType');
        expect(fixture.eventTime).toBe('test-eventTime');
        expect(fixture.conferenceId).toBe('test-conferenceId');
        expect(fixture.name).toBe('test-name');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.recordingId).toBe('test-recordingId');
        expect(fixture.channels).toBe(1.5);
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.duration).toBe('test-duration');
        expect(fixture.fileFormat).toBe(FileFormatEnum.Mp3);
        expect(fixture.mediaUrl).toBe('test-mediaUrl');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.status).toBe('test-status');
    });
});

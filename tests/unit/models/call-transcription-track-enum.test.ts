import { CallTranscriptionTrackEnum } from '../../../models/call-transcription-track-enum';

describe('CallTranscriptionTrackEnum', () => {
    test('should define the expected values', () => {
        expect(CallTranscriptionTrackEnum.Inbound).toBe('inbound');
        expect(CallTranscriptionTrackEnum.Outbound).toBe('outbound');
    });
});

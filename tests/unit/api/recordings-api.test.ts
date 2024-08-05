//@ts-nocheck
import { RecordingsApi } from "../../../api";
import { Configuration } from "../../../configuration";
import { CallDirectionEnum, FileFormatEnum, RecordingStateEnum } from "../../../models";

describe('RecordingsApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const recordingsApi = new RecordingsApi(config);

    const callId = 'c-1234';
    const recordingId = 'r-1234';

    describe('updateCallRecordingState', () => {
        test('should update call recording state', async () => {
            const pauseRecording = { state: RecordingStateEnum.Paused };

            const { status } =
                await recordingsApi.updateCallRecordingState(BW_ACCOUNT_ID, callId, pauseRecording);
            expect(status).toEqual(200);
        });
    });

    describe('listAccountCallRecordings', () => {
        test('should list account call recordings', async () => {
            const { status, data } = await recordingsApi.listAccountCallRecordings(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].applicationId).toHaveLength(36);
            expect(data[0].accountId).toHaveLength(7);
            expect(data[0].callId).toHaveLength(47);
            expect(data[0].parentCallId).toHaveLength(47);
            expect(data[0].recordingId).toHaveLength(47);
            expect(data[0].to).toHaveLength(12);
            expect(data[0].from).toHaveLength(12);
            expect(data[0].transferCallerId).toHaveLength(12);
            expect(data[0].transferTo).toHaveLength(12);
            expect(data[0].duration).toStartWith('PT');
            expect(data[0].direction).toBeOneOf([CallDirectionEnum.Inbound, CallDirectionEnum.Outbound]);
            expect(data[0].channels).toBeNumber();
            expect(data[0].startTime).toBeDateString();
            expect(data[0].endTime).toBeDateString();
            expect(data[0].fileFormat).toBeOneOf([FileFormatEnum.Wav, FileFormatEnum.Mp3]);
            expect(data[0].status).toBeString();
            expect(data[0].mediaUrl).toStartWith('http');
            expect(data[0].transcription).toContainAllKeys(['id', 'status', 'completedTime', 'url']);
            expect(data[0].transcription!.id).toHaveLength(38);
            expect(data[0].transcription!.status).toBeString();
            expect(data[0].transcription!.completedTime).toBeDateString();
            expect(data[0].transcription!.url).toStartWith('http');
        });
    });

    describe('listCallRecordings', () => {
        test('should list call recordings', async () => {
            const { status, data } = await recordingsApi.listCallRecordings(BW_ACCOUNT_ID, callId);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].applicationId).toHaveLength(36);
            expect(data[0].accountId).toHaveLength(7);
            expect(data[0].callId).toHaveLength(47);
            expect(data[0].parentCallId).toHaveLength(47);
            expect(data[0].recordingId).toHaveLength(47);
            expect(data[0].to).toHaveLength(12);
            expect(data[0].from).toHaveLength(12);
            expect(data[0].transferCallerId).toHaveLength(12);
            expect(data[0].transferTo).toHaveLength(12);
            expect(data[0].duration).toStartWith('PT');
            expect(data[0].direction).toBeOneOf([CallDirectionEnum.Inbound, CallDirectionEnum.Outbound]);
            expect(data[0].channels).toBeNumber();
            expect(data[0].startTime).toBeDateString();
            expect(data[0].endTime).toBeDateString();
            expect(data[0].fileFormat).toBeOneOf([FileFormatEnum.Wav, FileFormatEnum.Mp3]);
            expect(data[0].status).toBeString();
            expect(data[0].mediaUrl).toStartWith('http');
            expect(data[0].transcription).toContainAllKeys(['id', 'status', 'completedTime', 'url']);
            expect(data[0].transcription!.id).toHaveLength(38);
            expect(data[0].transcription!.status).toBeString();
            expect(data[0].transcription!.completedTime).toBeDateString();
            expect(data[0].transcription!.url).toStartWith('http');
        });
    });
    
    describe('getCallRecording', () => {
        test.skip('should get call recording', async () => {
            const { status, data } = await recordingsApi.getCallRecording(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(200);
            expect(data.applicationId).toHaveLength(36);
            expect(data.accountId).toHaveLength(7);
            expect(data.callId).toHaveLength(47);
            expect(data.parentCallId).toHaveLength(47);
            expect(data.recordingId).toHaveLength(47);
            expect(data.to).toHaveLength(12);
            expect(data.from).toHaveLength(12);
            expect(data.transferCallerId).toHaveLength(12);
            expect(data.transferTo).toHaveLength(12);
            expect(data.duration).toStartWith('PT');
            expect(data.direction).toBeOneOf([CallDirectionEnum.Inbound, CallDirectionEnum.Outbound]);
            expect(data.channels).toBeNumber();
            expect(data.startTime).toBeDateString();
            expect(data.endTime).toBeDateString();
            expect(data.fileFormat).toBeOneOf([FileFormatEnum.Wav, FileFormatEnum.Mp3]);
            expect(data.status).toBeString();
            expect(data.mediaUrl).toStartWith('http');
            expect(data.transcription).toContainAllKeys(['id', 'status', 'completedTime', 'url']);
            expect(data.transcription!.id).toHaveLength(38);
            expect(data.transcription!.status).toBeString();
            expect(data.transcription!.completedTime).toBeDateString();
            expect(data.transcription!.url).toStartWith('http');
        });
    });

    describe('downloadCallRecording', () => {
        test('should download call recording', async () => {
            const { status, data } = await recordingsApi.downloadCallRecording(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(200);
            expect(data).toBeDefined();
        });
    });

    describe('transcribeCallRecording', () => {
        test('should create a transcription request', async () => {
            const transcribeRecording = {
                callbackUrl: `${MANTECA_BASE_URL}/transcriptions`,
                tag: callId
            };
            const { status } =
                await recordingsApi.transcribeCallRecording(BW_ACCOUNT_ID, callId, recordingId, transcribeRecording);

            expect(status).toEqual(204);
        });
    });

    describe('getRecordingTranscription', () => {
        test('should get recording transcription', async () => {
            const { status, data } = await recordingsApi.getRecordingTranscription(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(200);
            expect(data.transcripts).toBeInstanceOf(Array);
            expect(data.transcripts![0].text).toBeString();
            expect(data.transcripts![0].confidence).toBeNumber();
        });
    });

    describe('deleteRecordingTranscription', () => {
        test('should delete recording transcription', async () => {
            const { status } = await recordingsApi.deleteRecordingTranscription(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecordingMedia', () => {
        test('should delete recording media', async () => {
            const { status } = await recordingsApi.deleteRecordingMedia(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecording', () => {
        test('should delete recording', async () => {
            const { status } = await recordingsApi.deleteRecording(BW_ACCOUNT_ID, callId, recordingId);

            expect(status).toEqual(204);
        });
    });

});

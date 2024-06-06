//@ts-nocheck
import { CallsApi, RecordingsApi } from "../../api";
import { Configuration } from "../../configuration";
import { CallStateEnum, RecordingStateEnum } from "../../models";
import { getMantecaTestStatus, setupManteca, createMantecaCall, cleanupCalls, sleep } from '../callUtils';

describe('RecordingsApi', () => {
    jest.setTimeout(240000);
    const config = new Configuration({username: globalThis.BW_USERNAME, password: globalThis.BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const recordingsApi = new RecordingsApi(config);

    let recordingId: string, mantecaTestId: string, mantecaCallId: string;
    let activeCalls: string[] = [];

    beforeAll(async () => {
        mantecaTestId = await setupManteca('CALL');
        mantecaCallId = await createMantecaCall(callsApi, mantecaTestId, '/bxml/startLongRecording');
        activeCalls.push(mantecaCallId);
    });

    afterAll(async () => {
        await cleanupCalls(activeCalls, callsApi);
    });

    describe('updateCallRecordingState', () => {
        test('should update call recording state', async () => {
            const pauseRecording = { state: RecordingStateEnum.Paused };
            const startRecording = { state: RecordingStateEnum.Recording };

            await sleep(globalThis.SLEEP_TIME_S * 2);
            const { status: pauseStatus } =
                await recordingsApi.updateCallRecordingState(globalThis.BW_ACCOUNT_ID, mantecaCallId, pauseRecording);
            expect(pauseStatus).toEqual(200);

            await sleep(globalThis.SLEEP_TIME_S * 2);
            const { status: startStatus } =
                await recordingsApi.updateCallRecordingState(globalThis.BW_ACCOUNT_ID, mantecaCallId, startRecording);
            expect(startStatus).toEqual(200);

            await sleep(globalThis.SLEEP_TIME_S * 2);
            const { status: completeStatus } =
                await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, mantecaCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);

            let retries = 0;
            let recordingComplete = false;
            try {
                while (!recordingComplete && retries < globalThis.MAX_RETRIES) {
                    const { callRecorded } = await getMantecaTestStatus(mantecaTestId);
                    recordingComplete = callRecorded;
                    retries++;
                    await sleep(globalThis.SLEEP_TIME_S);
                }
            } catch (e) {
                console.log(e);
            }

            expect(recordingComplete).toBe(true);
        });
    });

    describe('listAccountCallRecordings', () => {
        test('should list account call recordings', async () => {
            const { status, data } = await recordingsApi.listAccountCallRecordings(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].accountId).toEqual(globalThis.BW_ACCOUNT_ID);
        });
    });

    describe('listCallRecordings', () => {
        test('should list call recordings', async () => {
            const { status, data } = await recordingsApi.listCallRecordings(globalThis.BW_ACCOUNT_ID, mantecaCallId);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].applicationId).toEqual(globalThis.MANTECA_APPLICATION_ID);
            expect(data[0].accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data[0].callId).toEqual(mantecaCallId);
            expect(data[0].recordingId).toHaveLength(47);
            expect(['partial', 'complete']).toContain(data[0].status);

            recordingId = data[0].recordingId!;
        });
    });
    
    describe('getCallRecording', () => {
        test('should get call recording', async () => {
            const { status, data } = await recordingsApi.getCallRecording(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data.applicationId).toEqual(globalThis.MANTECA_APPLICATION_ID);
            expect(data.accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data.callId).toEqual(mantecaCallId);
            expect(data.recordingId).toEqual(recordingId);
            expect(['partial', 'complete']).toContain(data.status);
        });
    });

    describe('downloadCallRecording', () => {
        test('should download call recording', async () => {
            const { status, data } = await recordingsApi.downloadCallRecording(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data).toBeDefined();
        });
    });

    describe('transcribeCallRecording', () => {
        test('should create a transcription request', async () => {
            const transcribeRecording = {
                callbackUrl: `${globalThis.MANTECA_BASE_URL}/transcriptions`,
                tag: mantecaTestId
            };
            const { status } =
                await recordingsApi.transcribeCallRecording(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId, transcribeRecording);

            expect(status).toEqual(204);

            let retries = 0;
            let transcriptionComplete = false;
            await sleep(globalThis.SLEEP_TIME_S * 10);
            try {
                while (!transcriptionComplete && retries < globalThis.MAX_RETRIES) {
                    const { callTranscribed } = await getMantecaTestStatus(mantecaTestId);
                    transcriptionComplete = callTranscribed;
                    retries++;
                    await sleep(globalThis.SLEEP_TIME_S);
                }
            } catch (e) {
                console.log(e);
            }

            expect(transcriptionComplete).toBe(true);
        });
    });

    describe('getRecordingTranscription', () => {
        test('should get recording transcription', async () => {
            const { status, data } = await recordingsApi.getRecordingTranscription(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data.transcripts).toBeInstanceOf(Array);
            expect(data.transcripts![0].text).toBeDefined();
            expect(data.transcripts![0].confidence).toBeDefined();
        });
    });

    describe('deleteRecordingTranscription', () => {
        test('should delete recording transcription', async () => {
            const { status } = await recordingsApi.deleteRecordingTranscription(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecordingMedia', () => {
        test('should delete recording media', async () => {
            const { status } = await recordingsApi.deleteRecordingMedia(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecording', () => {
        test('should delete recording', async () => {
            const { status } = await recordingsApi.deleteRecording(globalThis.BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });
});

const { CallsApi } = require('../../api/calls-api');
const { RecordingsApi } = require('../../api/recordings-api');
const { Configuration } = require('../../configuration');
const { RecordingStateEnum, CallStateEnum } = require('../../models');
const { setupManteca, createMantecaCall, cleanupCalls, getMantecaTestStatus, sleep } = require('../callUtils');

describe('RecordingsApi', () => {
    jest.setTimeout(125000);
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const recordingsApi = new RecordingsApi(config);

    let recordingId, mantecaTestId, mantecaCallId;
    let activeCalls = [];

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

            await sleep(SLEEP_TIME_S * 2);
            const { status: pauseStatus } =
                await recordingsApi.updateCallRecordingState(BW_ACCOUNT_ID, mantecaCallId, pauseRecording);
            expect(pauseStatus).toEqual(200);

            await sleep(SLEEP_TIME_S * 2);
            const { status: startStatus } =
                await recordingsApi.updateCallRecordingState(BW_ACCOUNT_ID, mantecaCallId, startRecording);
            expect(startStatus).toEqual(200);

            await sleep(SLEEP_TIME_S * 2);
            const { status: completeStatus } =
                await callsApi.updateCall(BW_ACCOUNT_ID, mantecaCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);

            let retries = 0;
            let recordingComplete = false;
            try {
                while (!recordingComplete && retries < MAX_RETRIES) {
                    const { callRecorded } = await getMantecaTestStatus(mantecaTestId);
                    recordingComplete = callRecorded;
                    retries++;
                    await sleep(SLEEP_TIME_S);
                }
            } catch (e) {
                console.log(e);
            }

            expect(recordingComplete).toBe(true);
        });
    });

    describe('listAccountCallRecordings', () => {
        test('should list account call recordings', async () => {
            const { status, data } = await recordingsApi.listAccountCallRecordings(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].accountId).toEqual(BW_ACCOUNT_ID);
        });
    });

    describe('listCallRecordings', () => {
        test('should list call recordings', async () => {
            const { status, data } = await recordingsApi.listCallRecordings(BW_ACCOUNT_ID, mantecaCallId);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].applicationId).toEqual(MANTECA_APPLICATION_ID);
            expect(data[0].accountId).toEqual(BW_ACCOUNT_ID);
            expect(data[0].callId).toEqual(mantecaCallId);
            expect(data[0].recordingId).toHaveLength(47);
            expect(['partial', 'complete']).toContain(data[0].status);

            recordingId = data[0].recordingId;
        });
    });
    
    describe('getCallRecording', () => {
        test('should get call recording', async () => {
            const { status, data } = await recordingsApi.getCallRecording(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data.applicationId).toEqual(MANTECA_APPLICATION_ID);
            expect(data.accountId).toEqual(BW_ACCOUNT_ID);
            expect(data.callId).toEqual(mantecaCallId);
            expect(data.recordingId).toEqual(recordingId);
            expect(['partial', 'complete']).toContain(data.status);
        });
    });

    describe('downloadCallRecording', () => {
        test('should download call recording', async () => {
            const { status, data } = await recordingsApi.downloadCallRecording(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data).toBeDefined();
        });
    });

    describe('transcribeCallRecording', () => {
        test('should create a transcription request', async () => {
            const transcribeRecording = {
                callbackUrl: `${MANTECA_BASE_URL}/transcriptions`,
                tag: mantecaTestId
            };
            const { status } =
                await recordingsApi.transcribeCallRecording(BW_ACCOUNT_ID, mantecaCallId, recordingId, transcribeRecording);

            expect(status).toEqual(204);

            let retries = 0;
            let transcriptionComplete = false;
            await sleep(SLEEP_TIME_S * 10);
            try {
                while (!transcriptionComplete && retries < MAX_RETRIES) {
                    const { callTranscribed } = await getMantecaTestStatus(mantecaTestId);
                    transcriptionComplete = callTranscribed;
                    retries++;
                    await sleep(SLEEP_TIME_S);
                }
            } catch (e) {
                console.log(e);
            }

            expect(transcriptionComplete).toBe(true);
        });
    });

    describe('getCallTranscription', () => {
        test('should get call transcription', async () => {
            const { status, data } = await recordingsApi.getCallTranscription(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(200);
            expect(data.transcripts).toBeInstanceOf(Array);
            expect(data.transcripts[0].text).toBeDefined();
            expect(data.transcripts[0].confidence).toBeDefined();
        });
    });

    describe('deleteCallTranscription', () => {
        test('should delete call transcription', async () => {
            const { status, data } = await recordingsApi.deleteCallTranscription(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecordingMedia', () => {
        test('should delete recording media', async () => {
            const { status, data } = await recordingsApi.deleteRecordingMedia(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });

    describe('deleteRecording', () => {
        test('should delete recording', async () => {
            const { status, data } = await recordingsApi.deleteRecording(BW_ACCOUNT_ID, mantecaCallId, recordingId);

            expect(status).toEqual(204);
        });
    });
});

const { CallsApi } = require('../../api/calls-api');
const { TranscriptionsApi } = require('../../api/transcriptions-api');
const { Configuration } = require('../../configuration');
const { RecordingStateEnum, CallStateEnum } = require('../../models');
const { setupManteca, createMantecaCall, cleanupCalls, getMantecaTestStatus, sleep } = require('../callUtils');

describe('TranscriptionsApi', () => {
    jest.setTimeout(240000);
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const transcriptionsApi = new TranscriptionsApi(config);

    let transcriptionId, mantecaTestId, mantecaCallId;
    let activeCalls = [];

    beforeAll(async () => {
        mantecaTestId = await setupManteca('CALL');
        mantecaCallId = await createMantecaCall(callsApi, mantecaTestId, '/bxml/idle');
        activeCalls.push(mantecaCallId);
    });

    afterAll(async () => {
        await cleanupCalls(activeCalls, callsApi);
    });

    describe('createCallTranscription', () => {
        test('should create call transcription', async () => {
            await sleep(SLEEP_TIME_S);

            const startTranscriptionBxml =
                `<?xml version="1.0" encoding="UTF-8"?><Response><StartTranscription name="${mantecaCallId}" tracks="inbound"></StartTranscription><Pause duration="6"/></Response>`;
            const { status: startStatus } =
                await callsApi.updateCallBxml(BW_ACCOUNT_ID, mantecaCallId, startTranscriptionBxml);
            expect(startStatus).toEqual(204);
            await sleep(SLEEP_TIME_S);

            const stopTranscriptionBxml =
                `<?xml version="1.0" encoding="UTF-8"?><Response><StopTranscription name="${mantecaCallId}"></StopTranscription></Response>`;
            const { status: stopStatus } =
                await callsApi.updateCallBxml(BW_ACCOUNT_ID, mantecaCallId, stopTranscriptionBxml);
            expect(stopStatus).toEqual(204);
            await sleep(SLEEP_TIME_S);

            const { status: completeStatus } =
                await callsApi.updateCall(BW_ACCOUNT_ID, mantecaCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);
        });
    });

    describe('listCallTranscriptions', () => {
        test('should list call transcriptions', async () => {
            await sleep(SLEEP_TIME_S);

            const { status, data } =
                await transcriptionsApi.listRealTimeTranscriptions(BW_ACCOUNT_ID, mantecaCallId);
            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(typeof data[0].transcriptionId).toBe('string');
            expect(typeof data[0].transcriptionUrl).toBe('string');
            transcriptionId = data[0].transcriptionId;
        });
    });

    describe('getCallTranscription', () => {
        test('should get call transcription', async () => {
            const { status, data } =
                await transcriptionsApi.getRealTimeTranscription(BW_ACCOUNT_ID, mantecaCallId, transcriptionId);
            expect(status).toEqual(200);
            expect(data.accountId).toEqual(BW_ACCOUNT_ID);
            expect(data.callId).toEqual(mantecaCallId);
            expect(data.transcriptionId).toEqual(transcriptionId);
            expect(data.tracks).toBeInstanceOf(Array);
            expect(data.tracks[0].track).toEqual('inbound');
            expect(typeof data.tracks[0].confidence).toBe('number');
        });
    });

    describe('deleteCallTranscription', () => {
        test('should delete call transcription', async () => {
            const { status } =
                await transcriptionsApi.deleteRealTimeTranscription(BW_ACCOUNT_ID, mantecaCallId, transcriptionId);
            expect(status).toEqual(200); // This is a bug in the API, it should return 204. VAPI-1863 should fix this.
        });
    });
});

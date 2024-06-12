//@ts-nocheck
import { CallsApi, TranscriptionsApi } from "../../api";
import { Configuration } from "../../configuration";
import { CallStateEnum } from "../../models";
import { cleanupCalls, createMantecaCall, setupManteca, sleep } from "../callUtils";

describe('TranscriptionsApi', () => {
    jest.setTimeout(240000);
    const config = new Configuration({username: globalThis.BW_USERNAME, password: globalThis.BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const transcriptionsApi = new TranscriptionsApi(config);

    let transcriptionId: string, mantecaTestId: string, mantecaCallId: string;
    let activeCalls: string[] = [];

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
            await sleep(globalThis.SLEEP_TIME_S);

            const startTranscriptionBxml =
                `<?xml version="1.0" encoding="UTF-8"?><Response><StartTranscription name="${mantecaCallId}" tracks="inbound"></StartTranscription><Pause duration="6"/></Response>`;
            const { status: startStatus } =
                await callsApi.updateCallBxml(globalThis.BW_ACCOUNT_ID, mantecaCallId, startTranscriptionBxml);
            expect(startStatus).toEqual(204);
            await sleep(globalThis.SLEEP_TIME_S);

            const stopTranscriptionBxml =
                `<?xml version="1.0" encoding="UTF-8"?><Response><StopTranscription name="${mantecaCallId}"></StopTranscription></Response>`;
            const { status: stopStatus } =
                await callsApi.updateCallBxml(globalThis.BW_ACCOUNT_ID, mantecaCallId, stopTranscriptionBxml);
            expect(stopStatus).toEqual(204);
            await sleep(globalThis.SLEEP_TIME_S);

            const { status: completeStatus } =
                await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, mantecaCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);
        });
    });

    describe('listRealTimeTranscriptions', () => {
        test('should list call transcriptions', async () => {
            await sleep(globalThis.SLEEP_TIME_S * 20);

            const { status, data } =
                await transcriptionsApi.listRealTimeTranscriptions(globalThis.BW_ACCOUNT_ID, mantecaCallId);
            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].transcriptionId).toBeString();
            expect(data[0].transcriptionUrl).toBeString();
            transcriptionId = data[0].transcriptionId!;
        });
    });

    describe('getRealTimeTranscription', () => {
        test('should get call transcription', async () => {
            const { status, data } =
                await transcriptionsApi.getRealTimeTranscription(globalThis.BW_ACCOUNT_ID, mantecaCallId, transcriptionId);
            expect(status).toEqual(200);
            expect(data.accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data.callId).toEqual(mantecaCallId);
            expect(data.transcriptionId).toEqual(transcriptionId);
            expect(data.tracks).toBeInstanceOf(Array);
            expect(data.tracks![0].track).toEqual('inbound');
            expect(data.tracks![0].confidence).toBeNumber();
        });
    });

    describe('deleteRealTimeTranscription', () => {
        test('should delete call transcription', async () => {
            const { status } =
                await transcriptionsApi.deleteRealTimeTranscription(globalThis.BW_ACCOUNT_ID, mantecaCallId, transcriptionId);
            expect(status).toEqual(200); // This is a bug in the API, it should return 204. VAPI-1863 should fix this.
        });
    });
});

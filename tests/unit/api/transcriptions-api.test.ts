//@ts-nocheck
import { TranscriptionsApi } from "../../../api";
import { Configuration } from "../../../configuration";
import { CallTranscriptionDetectedLanguageEnum, CallTranscriptionTrackEnum } from "../../../models";

describe('TranscriptionsApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const transcriptionsApi = new TranscriptionsApi(config);

    const callId = 'c-1234';
    const transcriptionId = 't-1234';

    describe('listRealTimeTranscriptions', () => {
        test('should list call transcriptions', async () => {
            const { status, data } =
                await transcriptionsApi.listRealTimeTranscriptions(BW_ACCOUNT_ID, callId);
            
            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].transcriptionId).toBeString();
            expect(data[0].transcriptionUrl).toBeString();
            expect(data[0].transcriptionName).toBeString();
        });
    });

    describe('getRealTimeTranscription', () => {
        test('should get call transcription', async () => {
            const { status, data } =
                await transcriptionsApi.getRealTimeTranscription(BW_ACCOUNT_ID, callId, transcriptionId);
            
            expect(status).toEqual(200);
            expect(data.accountId).toHaveLength(7);
            expect(data.callId).toHaveLength(47);
            expect(data.transcriptionId).toBeString();
            expect(data.tracks).toBeInstanceOf(Array);
            expect(data.tracks![0].detectedLanguage).toBeOneOf([
                CallTranscriptionDetectedLanguageEnum.EnUs,
                CallTranscriptionDetectedLanguageEnum.EsUs,
                CallTranscriptionDetectedLanguageEnum.FrFr
            ]);
            expect(data.tracks![0].track).toBeOneOf([
                CallTranscriptionTrackEnum.Inbound,
                CallTranscriptionTrackEnum.Outbound
            ]);
            expect(data.tracks![0].transcript).toBeString();
            expect(data.tracks![0].confidence).toBeNumber();
        });
    });

    describe('deleteRealTimeTranscription', () => {
        test('should delete call transcription', async () => {
            const { status } =
                await transcriptionsApi.deleteRealTimeTranscription(BW_ACCOUNT_ID, callId, transcriptionId);
            expect(status).toEqual(200); // This is a bug in the API, it should return 204. VAPI-1863 should fix this.
        });
    });
});

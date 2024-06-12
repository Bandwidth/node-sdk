//@ts-nocheck
import { CallsApi, ConferencesApi } from '../../api';
import { Configuration } from '../../configuration';
import { ConferenceStateEnum, RedirectMethodEnum, FileFormatEnum, UpdateConference } from '../../models';
import { setupManteca, createMantecaCall, cleanupCalls, getMantecaTestStatus, sleep } from '../callUtils';

describe('ConferencesApi', () => {
    jest.setTimeout(125000);
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const conferencesApi = new ConferencesApi(config);

    let conferenceId: string, recordingId: string, mantecaTestId: string, mantecaCallId: string;
    let activeCalls: string[] = [];

    beforeAll(async () => {
        mantecaTestId = await setupManteca('conference');
        mantecaCallId = await createMantecaCall(callsApi, mantecaTestId, '/bxml/joinConferencePause');
        activeCalls.push(mantecaCallId);
    });

    afterAll(async () => {
        await cleanupCalls(activeCalls, callsApi);
    });

    describe('listConferences', () => {
        test('should list conferences', async () => {
            await sleep(SLEEP_TIME_S);
            const { status, data } = await conferencesApi.listConferences(BW_ACCOUNT_ID, mantecaTestId);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].id).toHaveLength(50);

            conferenceId = data[0].id!;
        });
    });

    describe('getConference', () => {
        test('should get a conference', async () => {
            const { status, data } = await conferencesApi.getConference(BW_ACCOUNT_ID, conferenceId);
    
            expect(status).toEqual(200);
            expect(data.id).toEqual(conferenceId);
            expect(data.name).toEqual(mantecaTestId);
            expect(data.tag).toEqual(mantecaTestId);
        });
    });

    describe('getConferenceMember', () => {
        test('should get conference member', async () => {
            const { status, data } = await conferencesApi.getConferenceMember(BW_ACCOUNT_ID, conferenceId, mantecaCallId);
    
            expect(status).toEqual(200);
            expect(data.conferenceId).toEqual(conferenceId);
            expect(data.callId).toEqual(mantecaCallId);
        });
    });

    describe('updateConferenceMember', () => {
        test('should update conference member', async () => {
            const updateConferenceMember = { mute: false };

            const { status } =
                await conferencesApi.updateConferenceMember(BW_ACCOUNT_ID, conferenceId, mantecaCallId, updateConferenceMember);
    
            expect(status).toEqual(204);
        });
    });

    describe('updateConference', () => {
        test('should update conference', async () => {
            const updateConferenceBody: UpdateConference = {
                status: ConferenceStateEnum.Active,
                redirectUrl: `${MANTECA_BASE_URL}/bxml/pause`,
                redirectMethod: RedirectMethodEnum.Post,
                username: 'username',
                password: 'password',
                redirectFallbackUrl: `${MANTECA_BASE_URL}/bxml/pause`,
                redirectFallbackMethod: RedirectMethodEnum.Post,
                fallbackUsername: 'username',
                fallbackPassword: 'password'
            };

            const { status } =
                await conferencesApi.updateConference(BW_ACCOUNT_ID, conferenceId, updateConferenceBody);
    
            expect(status).toEqual(204);
        });
    });

    describe('updateConferenceBxml', () => {
        test('should update conference bxml', async () => {
            const updateBxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><StartRecording/><SpeakSentence locale="en_US" gender="female" voice="susan">This should be a conference recording.</SpeakSentence><StopRecording/></Bxml>';

            const { status } =
                await conferencesApi.updateConferenceBxml(BW_ACCOUNT_ID, conferenceId, updateBxml);
    
            expect(status).toEqual(204);

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

    describe('listConferenceRecordings', () => {
        test('should list conference recordings', async () => {
            const { status, data } = await conferencesApi.listConferenceRecordings(BW_ACCOUNT_ID, conferenceId);
    
            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].conferenceId).toEqual(conferenceId);
            expect(data[0].accountId).toEqual(BW_ACCOUNT_ID);
            expect(data[0].name).toEqual(mantecaTestId);
            expect(data[0].status).toBeOneOf(['partial', 'complete']);
            expect(data[0].recordingId).toHaveLength(47);
            expect(data[0].fileFormat).toEqual(FileFormatEnum.Wav);

            recordingId = data[0].recordingId!;
        });
    });

    describe('getConferenceRecording', () => {
        test('should get conference recording', async () => {
            const { status, data } = await conferencesApi.getConferenceRecording(BW_ACCOUNT_ID, conferenceId, recordingId);
    
            expect(status).toEqual(200);
            expect(data.conferenceId).toEqual(conferenceId);
            expect(data.accountId).toEqual(BW_ACCOUNT_ID);
            expect(data.name).toEqual(mantecaTestId);
            expect(data.status).toBeOneOf(['partial', 'complete']);
            expect(data.recordingId).toEqual(recordingId);
            expect(data.fileFormat).toEqual(FileFormatEnum.Wav);
        });
    });

    describe('downloadConferenceRecording', () => {
        test('should download conference recording', async () => {
            const { status, data } = await conferencesApi.downloadConferenceRecording(BW_ACCOUNT_ID, conferenceId, recordingId);

            expect(status).toEqual(200);
            expect(data).toBeDefined();
        });
    });

});

const { CallsApi } = require('../../api/calls-api');
const { ConferencesApi } = require('../../api/conferences-api');
const { Configuration } = require('../../configuration');
const { ConferenceStateEnum, RedirectMethodEnum, FileFormatEnum } = require('../../models');
const { setupManteca, createMantecaCall, cleanupCalls, getMantecaTestStatus, sleep } = require('../callUtils');
const fs = require('fs');

describe('ConferencesApi', () => {
    jest.setTimeout(125000);
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const callsApi = new CallsApi(config);
    const conferencesApi = new ConferencesApi(config);

    let conferenceId, recordingId, mantecaTestId, mantecaCallId;
    let activeCalls = [];

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

            conferenceId = data[0].id;
        });
    });

    describe('getConference', () => {
        test('should get a conference', async () => {
            try {
                const { status, data } = await conferencesApi.getConference(BW_ACCOUNT_ID, conferenceId);
        
                expect(status).toEqual(200);
                expect(data.id).toEqual(conferenceId);
                expect(data.name).toEqual(mantecaTestId);
                expect(data.tag).toEqual(mantecaTestId);
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

    describe('getConferenceMember', () => {
        test('should get conference member', async () => {
            try {
                const { status, data } = await conferencesApi.getConferenceMember(BW_ACCOUNT_ID, conferenceId, mantecaCallId);
        
                expect(status).toEqual(200);
                expect(data.conferenceId).toEqual(conferenceId);
                expect(data.callId).toEqual(mantecaCallId);
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

    describe('updateConferenceMember', () => {
        test('should update conference member', async () => {
            const updateConferenceMember = { mute: false }

            try {
                const { status } =
                    await conferencesApi.updateConferenceMember(BW_ACCOUNT_ID, conferenceId, mantecaCallId, updateConferenceMember);
        
                expect(status).toEqual(204);
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

    describe('updateConference', () => {
        test('should update conference', async () => {
            const updateConferenceBody = {
                status: ConferenceStateEnum.Active,
                redirectUrl: `${MANTECA_BASE_URL}/bxml/pause`,
                redirectMethod: RedirectMethodEnum.Post,
                username: 'username',
                password: 'password',
                redirectFallback_url: `${MANTECA_BASE_URL}/bxml/pause`,
                redirectFallback_method: RedirectMethodEnum.Post,
                fallbackUsername: 'username',
                fallbackPassword: 'password'
            }

            try {
                const { status } =
                    await conferencesApi.updateConference(BW_ACCOUNT_ID, conferenceId, updateConferenceBody);
        
                expect(status).toEqual(204);
            } catch (e) {
                console.log(e);
                throw e;
            }
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
            try {
                const { status, data } = await conferencesApi.listConferenceRecordings(BW_ACCOUNT_ID, conferenceId);
        
                expect(status).toEqual(200);
                expect(data).toBeInstanceOf(Array);
                expect(data[0].conferenceId).toEqual(conferenceId);
                expect(data[0].accountId).toEqual(BW_ACCOUNT_ID);
                expect(data[0].name).toEqual(mantecaTestId);
                expect(['partial', 'complete']).toContain(data[0].status);
                expect(data[0].recordingId).toHaveLength(47);
                expect(data[0].fileFormat).toEqual(FileFormatEnum.Wav);

                recordingId = data[0].recordingId;
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

    describe('getConferenceRecording', () => {
        test('should get conference recording', async () => {
            try {
                const { status, data } = await conferencesApi.getConferenceRecording(BW_ACCOUNT_ID, conferenceId, recordingId);
        
                expect(status).toEqual(200);
                expect(data.conferenceId).toEqual(conferenceId);
                expect(data.accountId).toEqual(BW_ACCOUNT_ID);
                expect(data.name).toEqual(mantecaTestId);
                expect(['partial', 'complete']).toContain(data.status);
                expect(data.recordingId).toEqual(recordingId);
                expect(data.fileFormat).toEqual(FileFormatEnum.Wav);
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

    describe('downloadConferenceRecording', () => {
        test('should download conference recording', async () => {
            try {
                const { status, data } = await conferencesApi.downloadConferenceRecording(BW_ACCOUNT_ID, conferenceId, recordingId);
    
                expect(status).toEqual(200);
                expect(data).toBeDefined();
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    });

});

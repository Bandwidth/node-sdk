//@ts-nocheck
import { ConferencesApi } from '../../../api';
import { Configuration } from '../../../configuration';
import {
    ConferenceStateEnum,
    RedirectMethodEnum,
    FileFormatEnum,
    UpdateConference,
    CallbackMethodEnum
} from '../../../models';

describe('ConferencesApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const conferencesApi = new ConferencesApi(config);

    const callId = 'c-1234';
    const conferenceId = 'c-4321';
    const recordingId = 'r-1234';
    
    describe('listConferences', () => {
        test('should list conferences', async () => {
            const { status, data } = await conferencesApi.listConferences(BW_ACCOUNT_ID, conferenceId);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].id).toHaveLength(50);
            expect(data[0].name).toBeString();
            expect(data[0].createdTime).toBeDateString();
            expect(data[0].completedTime).toBeDateString();
            expect(data[0].conferenceEventUrl).toStartWith('http');
            expect(data[0].conferenceEventMethod).toBeOneOf([CallbackMethodEnum.Post, CallbackMethodEnum.Get]);
            expect(data[0].tag).toBeString();
        });
    });

    describe('getConference', () => {
        test('should get a conference', async () => {
            const { status, data } = await conferencesApi.getConference(BW_ACCOUNT_ID, conferenceId);
    
            expect(status).toEqual(200);
            expect(data.id).toHaveLength(50);
            expect(data.name).toBeString();
            expect(data.createdTime).toBeDateString();
            expect(data.completedTime).toBeDateString();
            expect(data.conferenceEventUrl).toStartWith('http');
            expect(data.conferenceEventMethod).toBeOneOf([CallbackMethodEnum.Post, CallbackMethodEnum.Get]);
            expect(data.tag).toBeString();
        });
    });

    describe('getConferenceMember', () => {
        test('should get conference member', async () => {
            const { status, data } = await conferencesApi.getConferenceMember(BW_ACCOUNT_ID, conferenceId, callId);
    
            expect(status).toEqual(200);
            expect(data.callId).toHaveLength(47);
            expect(data.conferenceId).toHaveLength(50);
            expect(data.memberUrl).toStartWith('http');
            expect(data.mute).toBeBoolean();
            expect(data.hold).toBeBoolean();
            expect(data.callIdsToCoach).toBeArray();
        });
    });

    describe('updateConferenceMember', () => {
        test('should update conference member', async () => {
            const updateConferenceMember = { mute: false };

            const { status } =
                await conferencesApi.updateConferenceMember(BW_ACCOUNT_ID, conferenceId, callId, updateConferenceMember);
    
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
        });
    });

    describe('listConferenceRecordings', () => {
        test('should list conference recordings', async () => {
            const { status, data } = await conferencesApi.listConferenceRecordings(BW_ACCOUNT_ID, conferenceId);
    
            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].accountId).toHaveLength(7);
            expect(data[0].conferenceId).toHaveLength(50);
            expect(data[0].name).toBeString();
            expect(data[0].recordingId).toHaveLength(47);
            expect(data[0].duration).toStartWith('PT');
            expect(data[0].channels).toBeNumber();
            expect(data[0].startTime).toBeDateString();
            expect(data[0].endTime).toBeDateString();
            expect(data[0].fileFormat).toBeOneOf([FileFormatEnum.Wav, FileFormatEnum.Mp3]);
            expect(data[0].status).toBeString();
            expect(data[0].mediaUrl).toStartWith('http');
        });
    });

    describe('getConferenceRecording', () => {
        test('should get conference recording', async () => {
            const { status, data } = await conferencesApi.getConferenceRecording(BW_ACCOUNT_ID, conferenceId, recordingId);
    
            expect(status).toEqual(200);
            expect(data.accountId).toHaveLength(7);
            expect(data.conferenceId).toHaveLength(50);
            expect(data.name).toBeString();
            expect(data.recordingId).toHaveLength(47);
            expect(data.duration).toStartWith('PT');
            expect(data.channels).toBeNumber();
            expect(data.startTime).toBeDateString();
            expect(data.endTime).toBeDateString();
            expect(data.fileFormat).toBeOneOf([FileFormatEnum.Wav, FileFormatEnum.Mp3]);
            expect(data.status).toBeString();
            expect(data.mediaUrl).toStartWith('http');
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

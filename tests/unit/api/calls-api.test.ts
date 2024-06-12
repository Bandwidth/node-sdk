//@ts-nocheck
import { CallsApi } from '../../../api';
import { Configuration } from '../../../configuration';
import {
    CallbackMethodEnum,
    CallDirectionEnum,
    CallStateEnum,
    CreateCall,
    MachineDetectionConfiguration,
    UpdateCall
} from '../../../models';

describe('CallsApi', () => {
    const config = new Configuration({
        username: globalThis.BW_USERNAME,
        password: globalThis.BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const callsApi = new CallsApi(config);

    const callId = 'c-1234';
    const displayName = 'NodeJS SDK';
    const answerMethod = CallbackMethodEnum.Post;
    const answerUrl = `${globalThis.BASE_CALLBACK_URL}/callbacks/answer`;
    const disconnectMethod = CallbackMethodEnum.Get;
    const disconnectUrl = `${globalThis.BASE_CALLBACK_URL}/callbacks/disconnect`;
    const callTimeout = 30.0;
    const callbackTimeout = 15.0;

    describe('createCall', () => {
        test('should create a call', async () => {
            const amdConfig: MachineDetectionConfiguration = {
                mode: 'async',
                detectionTimeout: 5.0,
                silenceTimeout: 5.0,
                speechThreshold: 5.0,
                speechEndThreshold: 5.0,
                delayResult: true,
                callbackUrl: globalThis.BASE_CALLBACK_URL + '/machineDetection',
                callbackMethod: CallbackMethodEnum.Post
            };

            const callBody: CreateCall = {
                applicationId: globalThis.BW_VOICE_APPLICATION_ID,
                to: globalThis.USER_NUMBER,
                from: globalThis.BW_NUMBER,
                privacy: false,
                displayName: displayName,
                answerUrl: answerUrl,
                answerMethod: answerMethod,
                disconnectUrl: disconnectUrl,
                disconnectMethod: disconnectMethod,
                machineDetection: amdConfig,
                callTimeout: callTimeout,
                callbackTimeout: callbackTimeout
            };

            const { status, data } = await callsApi.createCall(globalThis.BW_ACCOUNT_ID, callBody);

            expect(status).toEqual(201);
            expect(data.applicationId).toHaveLength(36);
            expect(data.accountId).toHaveLength(7);
            expect(data.callId).toHaveLength(47);
            expect(data.to).toHaveLength(12);
            expect(data.from).toHaveLength(12);
            expect(data.enqueuedTime).toBeDateString();
            expect(data.callUrl).toStartWith('http');
            expect(data.callTimeout).toBePositive();
            expect(data.callbackTimeout).toBePositive();
            expect(data.tag).toBeString();
            expect(data.answerMethod).toBeOneOf([CallbackMethodEnum.Post, CallbackMethodEnum.Get]);
            expect(data.answerUrl).toStartWith('http');
            expect(data.answerFallbackMethod).toBeOneOf([CallbackMethodEnum.Post, CallbackMethodEnum.Get]);
            expect(data.answerFallbackUrl).toStartWith('http');
            expect(data.disconnectMethod).toBeOneOf([CallbackMethodEnum.Post, CallbackMethodEnum.Get]);
            expect(data.disconnectUrl).toStartWith('http');
            expect(data.username).toBeString();
            expect(data.password).toBeString();
            expect(data.fallbackUsername).toBeString();
            expect(data.fallbackPassword).toBeString();
            expect(data.priority).toBePositive();
        });
    });

    describe('getCall', () => {
        test('should return a call', async () => {
            const { status, data } = await callsApi.getCallState(globalThis.BW_ACCOUNT_ID, callId);

            expect(status).toEqual(200);
            expect(data.applicationId).toHaveLength(36);
            expect(data.accountId).toHaveLength(7);
            expect(data.callId).toHaveLength(47);
            expect(data.parentCallId).toHaveLength(47);
            expect(data.to).toHaveLength(12);
            expect(data.from).toHaveLength(12);
            expect(data.direction).toBeOneOf([CallDirectionEnum.Inbound, CallDirectionEnum.Outbound]);
            expect(data.state).toBeString();
            expect(data.stirShaken).toBeObject();
            expect(data.identity).toBeString();
            expect(data.enqueuedTime).toBeDateString();
            expect(data.startTime).toBeDateString();
            expect(data.answerTime).toBeDateString();
            expect(data.endTime).toBeDateString();
            expect(data.disconnectCause).toBeString();
            expect(data.errorMessage).toBeDefined();
            expect(data.errorId).toBeDefined();
            expect(data.lastUpdate).toBeDateString();
        });
    });
    
    describe('listCalls', () => {
        test('should return an array of calls', async () => {
            const { status, data } = await callsApi.listCalls(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].applicationId).toHaveLength(36);
            expect(data[0].accountId).toHaveLength(7);
            expect(data[0].callId).toHaveLength(47);
            expect(data[0].parentCallId).toHaveLength(47);
            expect(data[0].to).toHaveLength(12);
            expect(data[0].from).toHaveLength(12);
            expect(data[0].direction).toBeOneOf([CallDirectionEnum.Inbound, CallDirectionEnum.Outbound]);
            expect(data[0].state).toBeString();
            expect(data[0].stirShaken).toBeObject();
            expect(data[0].identity).toBeString();
            expect(data[0].enqueuedTime).toBeDateString();
            expect(data[0].startTime).toBeDateString();
            expect(data[0].answerTime).toBeDateString();
            expect(data[0].endTime).toBeDateString();
            expect(data[0].disconnectCause).toBeString();
            expect(data[0].errorMessage).toBeDefined();
            expect(data[0].errorId).toBeDefined();
            expect(data[0].lastUpdate).toBeDateString();
        });
    });

    describe('updateCall', () => {
        test('should update a call', async () => {
            const updateCallBody: UpdateCall = {
                state: CallStateEnum.Active,
                redirectUrl: `${globalThis.MANTECA_BASE_URL}/bxml/pause`
            };

            const { status } = await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, callId, updateCallBody);
            expect(status).toEqual(200);
        });
    });

    describe('updateCallBxml', () => {
        test('should update a call with bxml', async () => {
            const updateBxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><SpeakSentence locale="en_US" gender="female" voice="susan">This is a test bxml response</SpeakSentence><Pause duration="3"/></Bxml>';

            const { status } = await callsApi.updateCallBxml(globalThis.BW_ACCOUNT_ID, callId, updateBxml);
            expect(status).toEqual(204);
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            const callBodyBad: CreateCall = {
                applicationId: globalThis.BW_VOICE_APPLICATION_ID,
                to: '+1invalid',
                from: globalThis.BW_NUMBER,
                answerUrl: answerUrl,
            };

            try {
                await callsApi.createCall(globalThis.BW_ACCOUNT_ID, callBodyBad);
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            // const configBad = new Configuration({username: globalThis.UNAUTHORIZED_USERNAME, password: globalThis.UNAUTHORIZED_PASSWORD});
            const configBad = new Configuration({
                username: globalThis.BW_USERNAME,
                password: globalThis.BW_PASSWORD,
                basePath: 'http://127.0.0.1:4010'
            });
            const callsApiBad = new CallsApi(configBad);

            try {
                await callsApiBad.getCallState(globalThis.BW_ACCOUNT_ID, callId);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });

        test('403', async () => {
            // const configBad = new Configuration({username: globalThis.FORBIDDEN_USERNAME, password: globalThis.FORBIDDEN_PASSWORD});
            const configBad = new Configuration({
                username: globalThis.BW_USERNAME,
                password: globalThis.BW_PASSWORD,
                basePath: 'http://127.0.0.1:4010'
            });
            const callsApiBad = new CallsApi(configBad);

            try {
                await callsApiBad.getCallState(globalThis.BW_ACCOUNT_ID, callId);
            } catch (e) {
                expect(e.response.status).toEqual(403);
            }
        });

        test('404', async () => {
            try {
                await callsApi.getCallState(globalThis.BW_ACCOUNT_ID, 'does-not-exist');
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
        });
    });

});

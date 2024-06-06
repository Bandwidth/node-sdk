//@ts-nocheck
import { CallsApi } from '../../api';
import { Configuration } from '../../configuration';
import {
    CallbackMethodEnum,
    CallDirectionEnum,
    CallStateEnum,
    CreateCall,
    MachineDetectionConfiguration,
    UpdateCall
} from '../../models';
import { createMantecaCall, sleep, cleanupCalls } from '../callUtils';

describe('CallsApi', () => {
    jest.setTimeout(45000);
    const config = new Configuration({username: globalThis.BW_USERNAME, password: globalThis.BW_PASSWORD});
    const callsApi = new CallsApi(config);

    const displayName = 'NodeJS SDK';
    const answerMethod = CallbackMethodEnum.Post;
    const answerUrl = `${globalThis.BASE_CALLBACK_URL}/callbacks/answer`;
    const answerFallbackMethod = CallbackMethodEnum.Post;
    const disconnectMethod = CallbackMethodEnum.Get;
    const disconnectUrl = `${globalThis.BASE_CALLBACK_URL}/callbacks/disconnect`;
    const priority = 5;
    const direction = CallDirectionEnum.Outbound;
    const callTimeout = 30.0;
    const callbackTimeout = 15.0;

    let callId: string;
    let activeCalls: string[] = [];

    afterAll(async () => {
        await cleanupCalls(activeCalls, callsApi);
    });

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
            expect(data.applicationId).toEqual(globalThis.BW_VOICE_APPLICATION_ID);
            expect(data.accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data.callId).toHaveLength(47);
            expect(data.to).toEqual(globalThis.USER_NUMBER);
            expect(data.from).toEqual(globalThis.BW_NUMBER);
            expect(data.callTimeout).toEqual(callTimeout);
            expect(data.callbackTimeout).toEqual(callbackTimeout);
            expect(data.answerMethod).toEqual(answerMethod);
            expect(data.answerUrl).toEqual(answerUrl);
            expect(data.answerFallbackMethod).toEqual(answerFallbackMethod);
            expect(data.disconnectMethod).toEqual(disconnectMethod);
            expect(data.disconnectUrl).toEqual(disconnectUrl);
            expect(data.priority).toEqual(priority);

            callId = data.callId;
            activeCalls.push(callId);
        });
    });

    describe('getCall', () => {
        test('should return a call', async () => {
            await sleep(40); // wait 40s for voice API to update call status
            const { status, data } = await callsApi.getCallState(globalThis.BW_ACCOUNT_ID, callId);

            expect(status).toEqual(200);
            expect(data.accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data.applicationId).toEqual(globalThis.BW_VOICE_APPLICATION_ID);
            expect(data.callId).toHaveLength(47);
            expect(data.to).toEqual(globalThis.USER_NUMBER);
            expect(data.from).toEqual(globalThis.BW_NUMBER);
            expect(data.direction).toEqual(direction);
        });
    });
    
    describe('getCalls', () => {
        test('should return an array of calls', async () => {
            const { status, data } = await callsApi.listCalls(globalThis.BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
            expect(data[0].accountId).toEqual(globalThis.BW_ACCOUNT_ID);
            expect(data[0].applicationId).toHaveLength(36);
            expect(data[0].callId).toHaveLength(47);
        });
    });

    describe('updateCall', () => {
        test('should update a call', async () => {
            const updateCallBody: UpdateCall = {
                state: CallStateEnum.Active,
                redirectUrl: `${globalThis.MANTECA_BASE_URL}/bxml/pause`
            };

            const updateCallId = await createMantecaCall(callsApi);
            activeCalls.push(updateCallId);
            await sleep(globalThis.SLEEP_TIME_S);

            const { status: updateStatus } =
                await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, updateCallId, updateCallBody);
            expect(updateStatus).toEqual(200);
            await sleep(globalThis.SLEEP_TIME_S);

            const { status: completeStatus } =
                await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);
        });
    });

    describe('updateCallBxml', () => {
        test('should update a call with bxml', async () => {
            const updateBxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><SpeakSentence locale="en_US" gender="female" voice="susan">This is a test bxml response</SpeakSentence><Pause duration="3"/></Bxml>';

            const updateCallId = await createMantecaCall(callsApi);
            activeCalls.push(updateCallId);
            await sleep(globalThis.SLEEP_TIME_S);

            const { status: updateStatus } =
                await callsApi.updateCallBxml(globalThis.BW_ACCOUNT_ID, updateCallId, updateBxml);
            expect(updateStatus).toEqual(204);
            await sleep(globalThis.SLEEP_TIME_S);

            const { status: completeStatus } =
                await callsApi.updateCall(globalThis.BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
            expect(completeStatus).toEqual(200);
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            const callBodyBad: CreateCall = {
                applicationId: globalThis.BW_VOICE_APPLICATION_ID,
                to: '+1invalid',
                from: globalThis.BW_NUMBER,
                answerUrl: answerUrl
            };

            try {
                await callsApi.createCall(globalThis.BW_ACCOUNT_ID, callBodyBad);
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('401', async () => {
            const configBad = new Configuration({username: globalThis.UNAUTHORIZED_USERNAME, password: globalThis.UNAUTHORIZED_PASSWORD});
            const callsApiBad = new CallsApi(configBad);

            try {
                await callsApiBad.getCallState(globalThis.BW_ACCOUNT_ID, callId);
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });

        test('403', async () => {
            const configBad = new Configuration({username: globalThis.FORBIDDEN_USERNAME, password: globalThis.FORBIDDEN_PASSWORD});
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

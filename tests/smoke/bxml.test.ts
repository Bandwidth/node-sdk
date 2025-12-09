// @ts-nocheck
import { CallsApi } from '../../api';
import { Configuration } from '../../configuration';
import { Bxml, CallStateEnum } from '../../models';
import {
    BridgeAttributes,
    ConferenceAttributes,
    ForwardAttributes,
    GatherAttributes,
    RecordAttributes,
    RedirectAttributes,
    RingAttributes,
    SendDtmfAttributes,
    SpeakSentenceAttributes,
    StartGatherAttributes,
    StartRecordingAttributes,
    StartStreamAttributes,
    StartTranscriptionAttributes,
    StopStreamAttributes,
    StopTranscriptionAttributes,
    TransferAttributes
} from '../../models/bxml/verbs';
import { sleep, createMantecaCall, cleanupCalls } from '../callUtils';

describe('BXML Integration Tests', () => {
    jest.setTimeout(20000);
    
    const config = new Configuration({
        clientId: BW_CLIENT_ID,
        clientSecret: BW_CLIENT_SECRET
    });
    const callsApi = new CallsApi(config);
    let activeCalls: string[] = [];
    
    afterAll(async () => {
        await cleanupCalls(activeCalls, callsApi);
    });
    
    test('test one-off verbs', async () => {
        const updateCallId = await createMantecaCall(callsApi);
        const bridgeCallId = await createMantecaCall(callsApi);
        activeCalls.push(updateCallId, bridgeCallId);
        await sleep(SLEEP_TIME_S);

        const conferenceAttributes: ConferenceAttributes = {
            mute: true,
            hold: true,
            callIdsToCoach: updateCallId,
            conferenceEventUrl: 'https://initial.com',
            conferenceEventMethod: 'POST',
            conferenceEventFallbackUrl: 'https://initial.com',
            conferenceEventFallbackMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag',
            callbackTimeout: 1.1
        };

        const gatherAttributes: GatherAttributes = {
            gatherUrl: 'https://initial.com',
            gatherMethod: 'POST',
            gatherFallbackUrl: 'https://initial.com',
            gatherFallbackMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag',
            terminatingDigits: '5',
            maxDigits: 1,
            interDigitTimeout: 1.1,
            firstDigitTimeout: 1.1,
            repeatCount: 1
        };

        const speakSentenceAttributes: SpeakSentenceAttributes = {
            voice: 'julie',
            gender: 'female',
            locale: 'en_US'
        };

        const recordAttributes: RecordAttributes = {
            recordCompleteUrl: 'https://initial.com',
            recordCompleteMethod: 'POST',
            recordCompleteFallbackUrl: 'https://initial.com',
            recordCompleteFallbackMethod: 'POST',
            recordingAvailableUrl: 'https://initial.com',
            recordingAvailableMethod: 'POST',
            transcribe: true,
            transcriptionAvailableUrl: 'https://initial.com',
            transcriptionAvailableMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag',
            terminatingDigits: '#',
            maxDuration: 2,
            silenceTimeout: 2,
            fileFormat: 'wav'
        };

        const sendDtmfAttributes: SendDtmfAttributes = {
            toneDuration: 50,
            toneInterval: 50
        };

        const ringAttributes: RingAttributes = {
            duration: 5.1,
            answerCall: true
        };

        const bridgeAttributes: BridgeAttributes = {
            bridgeCompleteUrl: 'https://initial.com',
            bridgeCompleteMethod: 'POST',
            bridgeCompleteFallbackUrl: 'https://initial.com',
            bridgeCompleteFallbackMethod: 'POST',
            bridgeTargetCompleteUrl: 'https://initial.com',
            bridgeTargetCompleteMethod: 'POST',
            bridgeTargetCompleteFallbackUrl: 'https://initial.com',
            bridgeTargetCompleteFallbackMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag'
        };

        const transferAttributes: TransferAttributes = {
            transferCallerId: '+19195551234',
            transferCallerDisplayName: 'initialDisplayName',
            callTimeout: 5,
            transferCompleteUrl: 'https://initial.com',
            transferCompleteMethod: 'POST',
            transferCompleteFallbackUrl: 'https://initial.com',
            transferCompleteFallbackMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag',
            diversionTreatment: 'propagate',
            diversionReason: 'user-busy'
        };
    
        const phoneNumber = new Bxml.PhoneNumber('+19195551234');
        const sipUri = new Bxml.SipUri('sip:1-999-123-4567@voip-provider.example.net');

        const conference = new Bxml.Conference('my-conference', conferenceAttributes);
        const gather = new Bxml.Gather(gatherAttributes);
        const speakSentence = new Bxml.SpeakSentence('<lang xml:lang="es-MX">Hola</lang>nodejs speak sentence <emphasis>SSML test</emphasis>', speakSentenceAttributes);
        const nestedGather = new Bxml.Gather(gatherAttributes, [speakSentence]);
        const pause = new Bxml.Pause({ duration: 2 });
        const playAudio = new Bxml.PlayAudio('https://www.example.com/file.wav', { username: 'initialUsername', password: 'initialPassword' });
        const record = new Bxml.Record(recordAttributes);
        const sendDtmf = new Bxml.SendDtmf('1234', sendDtmfAttributes);
        const tag = new Bxml.Tag('testTag');
        const ring = new Bxml.Ring(ringAttributes);
        const hangup = new Bxml.Hangup();
        const bridge = new Bxml.Bridge(bridgeCallId, bridgeAttributes);
        const transfer = new Bxml.Transfer(transferAttributes, [phoneNumber, sipUri]);

        const bxml = new Bxml.Response([tag, conference, speakSentence, gather, sendDtmf, nestedGather, pause, record, playAudio, sendDtmf, ring, bridge, transfer, hangup]);

        const { status: updateStatus } =
            await callsApi.updateCallBxml(BW_ACCOUNT_ID, updateCallId, bxml.toBxml());
        expect(updateStatus).toEqual(204);
        await sleep(SLEEP_TIME_S);

        const { status: completeStatus } =
            await callsApi.updateCall(BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
        expect(completeStatus).toEqual(200);
    });

    test('test start and stop verbs', async () => {
        const updateCallId = await createMantecaCall(callsApi);
        activeCalls.push(updateCallId);
        await sleep(SLEEP_TIME_S);

        const startGatherAttributes: StartGatherAttributes = {
            dtmfUrl: 'https://initial.com',
            dtmfMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            tag: 'initialTag'
        };

        const startRecordingAttributes: StartRecordingAttributes = {
            recordingAvailableUrl: 'https://initial.com',
            recordingAvailableMethod: 'POST',
            transcribe: true,
            transcriptionAvailableUrl: 'https://initial.com',
            transcriptionAvailableMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            tag: 'initialTag',
            fileFormat: 'wav',
            multiChannel: true
        };

        const startStreamAttributes: StartStreamAttributes = {
            name: 'initialName',
            tracks: 'inbound',
            destination: 'wss://initial.com',
            streamEventUrl: 'https://initial.com',
            streamEventMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword'
        };

        const startTranscriptionAttributes: StartTranscriptionAttributes = {
            name: 'initialName',
            tracks: 'inbound',
            transcriptionEventUrl: 'https://initial.com',
            transcriptionEventMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            destination: 'wss://initial.com',
            stabilized: true
        };

        const stopStreamAttributes: StopStreamAttributes = {
            name: 'initialName',
            wait: true
        };

        const stopTranscriptionAttributes: StopTranscriptionAttributes = {
            name: 'initialName'
        };
    
        const customParam1 = new Bxml.CustomParam({ name: 'customParamName1', value: 'customParamValue1' });
        const streamParam1 = new Bxml.StreamParam({ name: 'streamParamName1', value: 'streamParamValue1' });

        const startGather = new Bxml.StartGather(startGatherAttributes);
        const startRecording = new Bxml.StartRecording(startRecordingAttributes);
        const pauseRecording = new Bxml.PauseRecording();
        const resumeRecording = new Bxml.ResumeRecording();
        const startStream = new Bxml.StartStream(startStreamAttributes, [streamParam1]);
        const startTranscription = new Bxml.StartTranscription(startTranscriptionAttributes, [customParam1]);
        const stopGather = new Bxml.StopGather();
        const stopRecording = new Bxml.StopRecording();
        const stopStream = new Bxml.StopStream(stopStreamAttributes);
        const stopTranscription = new Bxml.StopTranscription(stopTranscriptionAttributes);

        const bxml = new Bxml.Bxml([startGather, stopGather, startRecording, pauseRecording, resumeRecording, stopRecording, startStream, stopStream, startTranscription, stopTranscription]);
        
        const { status: updateStatus } =
            await callsApi.updateCallBxml(BW_ACCOUNT_ID, updateCallId, bxml.toBxml());
        expect(updateStatus).toEqual(204);
        await sleep(SLEEP_TIME_S);

        const { status: completeStatus } =
            await callsApi.updateCall(BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
        expect(completeStatus).toEqual(200);
    });

    test('test forward', async () => {
        const updateCallId = await createMantecaCall(callsApi);
        activeCalls.push(updateCallId);
        await sleep(SLEEP_TIME_S);

        const forwardAttributes: ForwardAttributes = {
            to: '+19195551234',
            from: '+19195554321',
            callTimeout: 5,
            diversionTreatment: 'propagate',
            diversionReason: 'user-busy',
            uui: '93d6f3c0be5845960b744fa28015d8ede84bd1a4;encoding=base64,asdf;encoding=jwt'
        };

        const forward = new Bxml.Forward(forwardAttributes);

        const bxml = new Bxml.Response([forward]);

        const { status: updateStatus } =
            await callsApi.updateCallBxml(BW_ACCOUNT_ID, updateCallId, bxml.toBxml());
        expect(updateStatus).toEqual(204);
        await sleep(SLEEP_TIME_S);

        const { status: completeStatus } =
            await callsApi.updateCall(BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
        expect(completeStatus).toEqual(200);

    });

    test('test redirect', async () => {
        const updateCallId = await createMantecaCall(callsApi);
        activeCalls.push(updateCallId);
        await sleep(SLEEP_TIME_S);

        const redirectAttributes: RedirectAttributes = {
            redirectUrl: 'https://initial.com',
            redirectMethod: 'POST',
            redirectFallbackUrl: 'https://initial.com',
            redirectFallbackMethod: 'POST',
            username: 'initialUsername',
            password: 'initialPassword',
            fallbackUsername: 'initialFallbackUsername',
            fallbackPassword: 'initialFallbackPassword',
            tag: 'initialTag'
        };

        const redirect = new Bxml.Redirect(redirectAttributes);

        const bxml = new Bxml.Response([redirect]);

        const { status: updateStatus } =
            await callsApi.updateCallBxml(BW_ACCOUNT_ID, updateCallId, bxml.toBxml());
        expect(updateStatus).toEqual(204);
        await sleep(SLEEP_TIME_S);

        const { status: completeStatus } =
            await callsApi.updateCall(BW_ACCOUNT_ID, updateCallId, { state: CallStateEnum.Completed });
        expect(completeStatus).toEqual(200);
    });
});

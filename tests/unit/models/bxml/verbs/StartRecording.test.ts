import { Verb } from '../../../../../models/bxml/Verb';
import { StartRecording, StartRecordingAttributes } from '../../../../../models/bxml/verbs/StartRecording';

describe('StartRecording', () => {
    const attributes: StartRecordingAttributes = {
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

    const expected = '<StartRecording recordingAvailableUrl="https://initial.com" recordingAvailableMethod="POST" transcribe="true" transcriptionAvailableUrl="https://initial.com" transcriptionAvailableMethod="POST" username="initialUsername" password="initialPassword" tag="initialTag" fileFormat="wav" multiChannel="true"/>';

    test('should create a StartRecording Verb', () => {
        const startRecording = new StartRecording(attributes);

        expect(startRecording).toBeInstanceOf(StartRecording);
        expect(startRecording).toBeInstanceOf(Verb);
        expect(startRecording.toBxml()).toBe(expected);
    });
});

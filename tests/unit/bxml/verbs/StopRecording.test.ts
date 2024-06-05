import { Verb } from '../../../../models/bxml/Verb';
import { StopRecording } from '../../../../models/bxml/verbs/StopRecording';

describe('StopRecording', () => {
    const expected = '<StopRecording/>';

    test('should create a StopRecording Verb', () => {
        const stopRecording = new StopRecording();

        expect(stopRecording).toBeInstanceOf(StopRecording);
        expect(stopRecording).toBeInstanceOf(Verb);
        expect(stopRecording.toBxml()).toBe(expected);
    });
});

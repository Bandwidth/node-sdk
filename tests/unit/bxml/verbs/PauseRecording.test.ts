import { Verb } from '../../../../models/bxml/Verb';
import { PauseRecording } from '../../../../models/bxml/verbs/PauseRecording';

describe('PauseRecording', () => {
    const expected = '<PauseRecording/>';

    test('should create a PauseRecording Verb', () => {
        const pauseRecording = new PauseRecording();

        expect(pauseRecording).toBeInstanceOf(PauseRecording);
        expect(pauseRecording).toBeInstanceOf(Verb);
        expect(pauseRecording.toBxml()).toBe(expected);
    });
});

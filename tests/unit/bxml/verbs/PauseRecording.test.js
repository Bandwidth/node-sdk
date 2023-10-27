const { Verb } = require('../../../../models/bxml/Verb');
const { PauseRecording } = require('../../../../models/bxml/verbs/PauseRecording');

describe('PauseRecording', () => {
    const expected = '<PauseRecording/>';

    test('should create a PauseRecording Verb', () => {
        const pauseRecording = new PauseRecording();

        expect(pauseRecording).toBeInstanceOf(PauseRecording);
        expect(pauseRecording).toBeInstanceOf(Verb);
        expect(pauseRecording.toBxml()).toBe(expected);
    });
});

import { Verb } from '../../../../../models/bxml/Verb';
import { StopTranscription, StopTranscriptionAttributes } from '../../../../../models/bxml/verbs/StopTranscription';

describe('StopTranscription', () => {
    const attributes: StopTranscriptionAttributes = {
        name: 'initialName'
    };

    const expected = '<StopTranscription name="initialName"/>';

    test('should create a StopTranscription Verb', () => {
        const stopTranscription = new StopTranscription(attributes);

        expect(stopTranscription).toBeInstanceOf(StopTranscription);
        expect(stopTranscription).toBeInstanceOf(Verb);
        expect(stopTranscription.toBxml()).toBe(expected);
    });
});

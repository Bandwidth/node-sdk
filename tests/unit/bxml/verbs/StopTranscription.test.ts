import { Verb } from '../../../../models/bxml/Verb';
import { StopTranscription } from '../../../../models/bxml/verbs/StopTranscription';

describe('StopTranscription', () => {
    const attributes = {
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

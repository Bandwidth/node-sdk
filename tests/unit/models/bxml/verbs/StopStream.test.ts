import { Verb } from '../../../../../models/bxml/Verb';
import { StopStream, StopStreamAttributes } from '../../../../../models/bxml/verbs/StopStream';

describe('StopStream', () => {
    const attributes: StopStreamAttributes = {
        name: 'initialName',
        wait: true
    };

    const expected = '<StopStream name="initialName" wait="true"/>';

    test('should create a StopStream Verb', () => {
        const stopStream = new StopStream(attributes);

        expect(stopStream).toBeInstanceOf(StopStream);
        expect(stopStream).toBeInstanceOf(Verb);
        expect(stopStream.toBxml()).toBe(expected);
    });
});

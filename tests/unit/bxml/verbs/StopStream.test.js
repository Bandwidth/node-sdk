const { Verb } = require('../../../../models/bxml/Verb');
const { StopStream } = require('../../../../models/bxml/verbs/StopStream');

describe('StopStream', () => {
    const attributes = {
        name: 'initialName'
    };

    const expected = '<StopStream name="initialName"/>';

    test('should create a StopStream Verb', () => {
        const stopStream = new StopStream(attributes);

        expect(stopStream).toBeInstanceOf(StopStream);
        expect(stopStream).toBeInstanceOf(Verb);
        expect(stopStream.toBxml()).toBe(expected);
    });
});

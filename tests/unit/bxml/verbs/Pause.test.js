const { Verb } = require('../../../../models/bxml/Verb');
const { Pause } = require('../../../../models/bxml/verbs/Pause');

describe('Pause', () => {
    const attributes = {
        duration: 5
    };

    const expected = '<Pause duration="5"/>';

    test('should create a Pause Verb', () => {
        const pause = new Pause(attributes);

        expect(pause).toBeInstanceOf(Pause);
        expect(pause).toBeInstanceOf(Verb);
        expect(pause.toBxml()).toBe(expected);
    });
});

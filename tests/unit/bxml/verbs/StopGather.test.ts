const { Verb } = require('../../../../models/bxml/Verb');
const { StopGather } = require('../../../../models/bxml/verbs/StopGather');

describe('StopGather', () => {
    const expected = '<StopGather/>';

    test('should create a StopGather Verb', () => {
        const stopGather = new StopGather();

        expect(stopGather).toBeInstanceOf(StopGather);
        expect(stopGather).toBeInstanceOf(Verb);
        expect(stopGather.toBxml()).toBe(expected);
    });
});

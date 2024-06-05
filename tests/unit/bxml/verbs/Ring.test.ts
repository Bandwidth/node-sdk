const { Verb } = require('../../../../models/bxml/Verb');
const { Ring } = require('../../../../models/bxml/verbs/Ring');

describe('Ring', () => {
    const attributes = {
        duration: 5.1,
        answerCall: true
    };

    const expected = '<Ring duration="5.1" answerCall="true"/>';

    test('should create a Ring Verb', () => {
        const ring = new Ring(attributes);

        expect(ring).toBeInstanceOf(Ring);
        expect(ring).toBeInstanceOf(Verb);
        expect(ring.toBxml()).toBe(expected);
    });
});

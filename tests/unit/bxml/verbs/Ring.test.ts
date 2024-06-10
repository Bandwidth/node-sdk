import { Verb } from '../../../../models/bxml/Verb';
import { Ring, RingAttributes } from '../../../../models/bxml/verbs/Ring';

describe('Ring', () => {
    const attributes: RingAttributes = {
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

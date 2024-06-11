import { Verb } from '../../../../../models/bxml/Verb';
import { Hangup } from '../../../../../models/bxml/verbs/Hangup';

describe('Hangup', () => {
    const expected = '<Hangup/>';

    test('should create a Hangup Verb', () => {
        const hangup = new Hangup();

        expect(hangup).toBeInstanceOf(Hangup);
        expect(hangup).toBeInstanceOf(Verb);
        expect(hangup.toBxml()).toBe(expected);
    });
});

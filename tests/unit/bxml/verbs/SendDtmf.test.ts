import { Verb } from '../../../../models/bxml/Verb';
import { SendDtmf } from '../../../../models/bxml/verbs/SendDtmf';

describe('SendDtmf', () => {
    const attributes = {
        toneDuration: 5,
        toneInterval: 5
    };

    const expected = '<SendDtmf toneDuration="5" toneInterval="5">1234</SendDtmf>';

    test('should create a SendDtmf Verb', () => {
        const sendDtmf = new SendDtmf('1234', attributes);

        expect(sendDtmf).toBeInstanceOf(SendDtmf);
        expect(sendDtmf).toBeInstanceOf(Verb);
        expect(sendDtmf.toBxml()).toBe(expected);
    });
});

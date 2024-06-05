import { Verb } from '../../../../models/bxml/Verb';
import { PhoneNumber, PhoneNumberAttributes } from '../../../../models/bxml/verbs/PhoneNumber';

describe('PhoneNumber', () => {
    const attributes: PhoneNumberAttributes = {
        transferAnswerUrl: 'https://initial.com',
        transferAnswerMethod: 'POST',
        transferAnswerFallbackUrl: 'https://initial.com',
        transferAnswerFallbackMethod: 'POST',
        transferDisconnectUrl: 'https://initial.com',
        transferDisconnectMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag'
    };

    const expected = '<PhoneNumber transferAnswerUrl="https://initial.com" transferAnswerMethod="POST" transferAnswerFallbackUrl="https://initial.com" transferAnswerFallbackMethod="POST" transferDisconnectUrl="https://initial.com" transferDisconnectMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag">+19195551234</PhoneNumber>';

    test('should create a PhoneNumber Verb', () => {
        const phoneNumber = new PhoneNumber('+19195551234', attributes);

        expect(phoneNumber).toBeInstanceOf(PhoneNumber);
        expect(phoneNumber).toBeInstanceOf(Verb);
        expect(phoneNumber.toBxml()).toBe(expected);
    });
});

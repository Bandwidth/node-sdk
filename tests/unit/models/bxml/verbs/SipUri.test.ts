import { Verb } from '../../../../../models/bxml/Verb';
import { SipUri, SipUriAttributes } from '../../../../../models/bxml/verbs/SipUri';

describe('SipUri', () => {
    const attributes: SipUriAttributes = {
        uui: 'abc123',
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

    const expected = '<SipUri uui="abc123" transferAnswerUrl="https://initial.com" transferAnswerMethod="POST" transferAnswerFallbackUrl="https://initial.com" transferAnswerFallbackMethod="POST" transferDisconnectUrl="https://initial.com" transferDisconnectMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag">sip:1-999-123-4567@voip-provider.example.net</SipUri>';

    test('should create a SipUri Verb', () => {
        const sipUri = new SipUri('sip:1-999-123-4567@voip-provider.example.net', attributes);

        expect(sipUri).toBeInstanceOf(SipUri);
        expect(sipUri).toBeInstanceOf(Verb);
        expect(sipUri.toBxml()).toBe(expected);
    });
});

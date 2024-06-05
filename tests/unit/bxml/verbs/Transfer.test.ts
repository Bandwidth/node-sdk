const { Verb } = require('../../../../models/bxml/Verb');
const { PhoneNumber } = require('../../../../models/bxml/verbs/PhoneNumber');
const { SipUri } = require('../../../../models/bxml/verbs/SipUri');
const { Transfer } = require('../../../../models/bxml/verbs/Transfer');

describe('Transfer', () => {
    const attributes = {
        transferCallerId: '+19195551234',
        transferCallerDisplayName: 'initialDisplayName',
        callTimeout: 5,
        transferCompleteUrl: 'https://initial.com',
        transferCompleteMethod: 'POST',
        transferCompleteFallbackUrl: 'https://initial.com',
        transferCompleteFallbackMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag',
        diversionTreatment: 'propagate',
        diversionReason: 'user-busy'
    };

    const phoneNumber = new PhoneNumber('+19195551234');
    const sipUri = new SipUri('sip:1-999-123-4567@voip-provider.example.net');

    test('should create a Transfer Verb', () => {
        const transfer = new Transfer(attributes);
        const expected = '<Transfer transferCallerId="+19195551234" transferCallerDisplayName="initialDisplayName" callTimeout="5" transferCompleteUrl="https://initial.com" transferCompleteMethod="POST" transferCompleteFallbackUrl="https://initial.com" transferCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" diversionTreatment="propagate" diversionReason="user-busy"/>';

        expect(transfer).toBeInstanceOf(Transfer);
        expect(transfer).toBeInstanceOf(Verb);
        expect(transfer.toBxml()).toBe(expected);
    });

    test('should create a Transfer Verb with nested PhoneNumber and SipUri', () => {
        let transfer = new Transfer(attributes, phoneNumber);
        const expected = '<Transfer transferCallerId="+19195551234" transferCallerDisplayName="initialDisplayName" callTimeout="5" transferCompleteUrl="https://initial.com" transferCompleteMethod="POST" transferCompleteFallbackUrl="https://initial.com" transferCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" diversionTreatment="propagate" diversionReason="user-busy"><PhoneNumber>+19195551234</PhoneNumber></Transfer>';
        const expectedSingle = '<Transfer transferCallerId="+19195551234" transferCallerDisplayName="initialDisplayName" callTimeout="5" transferCompleteUrl="https://initial.com" transferCompleteMethod="POST" transferCompleteFallbackUrl="https://initial.com" transferCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" diversionTreatment="propagate" diversionReason="user-busy"><PhoneNumber>+19195551234</PhoneNumber><SipUri>sip:1-999-123-4567@voip-provider.example.net</SipUri></Transfer>';
        const expectedMultiple = '<Transfer transferCallerId="+19195551234" transferCallerDisplayName="initialDisplayName" callTimeout="5" transferCompleteUrl="https://initial.com" transferCompleteMethod="POST" transferCompleteFallbackUrl="https://initial.com" transferCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" diversionTreatment="propagate" diversionReason="user-busy"><PhoneNumber>+19195551234</PhoneNumber><SipUri>sip:1-999-123-4567@voip-provider.example.net</SipUri><SipUri>sip:1-999-123-4567@voip-provider.example.net</SipUri><PhoneNumber>+19195551234</PhoneNumber></Transfer>';

        expect(transfer).toBeInstanceOf(Transfer);
        expect(transfer).toBeInstanceOf(Verb);
        expect(transfer.toBxml()).toBe(expected);

        transfer.addTransferRecipients(sipUri);
        expect(transfer.toBxml()).toBe(expectedSingle);

        transfer.addTransferRecipients([sipUri, phoneNumber]);
        expect(transfer.toBxml()).toBe(expectedMultiple);
    });

    test('should test the addTransferRecipients method  method when no verbs are initially nested', () => {
        const transfer = new Transfer(attributes);
        const expected = '<Transfer transferCallerId="+19195551234" transferCallerDisplayName="initialDisplayName" callTimeout="5" transferCompleteUrl="https://initial.com" transferCompleteMethod="POST" transferCompleteFallbackUrl="https://initial.com" transferCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" diversionTreatment="propagate" diversionReason="user-busy"><PhoneNumber>+19195551234</PhoneNumber></Transfer>';

        transfer.addTransferRecipients(phoneNumber);
        expect(transfer.toBxml()).toBe(expected);
    });
});

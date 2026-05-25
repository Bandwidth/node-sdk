import { Refer, ReferAttributes } from '../../../../../models/bxml/verbs/Refer';
import { SipUri } from '../../../../../models/bxml/verbs/SipUri';

describe('Refer', () => {
    test('should generate Refer XML with SipUri and all attributes', () => {
        const attributes: ReferAttributes = {
            referCompleteUrl: 'https://example.com/handleRefer',
            referCompleteMethod: 'POST',
            tag: 'my-tag',
        };
        const sipUri = new SipUri('sip:alice@atlanta.example.com');
        const refer = new Refer(attributes, sipUri);

        const xml = refer.toBxml();
        expect(xml).toContain('<Refer');
        expect(xml).toContain('referCompleteUrl="https://example.com/handleRefer"');
        expect(xml).toContain('referCompleteMethod="POST"');
        expect(xml).toContain('tag="my-tag"');
        expect(xml).toContain('<SipUri>sip:alice@atlanta.example.com</SipUri>');
        expect(xml).toContain('</Refer>');
    });

    test('should generate Refer XML with no attributes', () => {
        const sipUri = new SipUri('sip:bob@biloxi.example.com');
        const refer = new Refer(undefined, sipUri);

        const xml = refer.toBxml();
        expect(xml).toContain('<Refer>');
        expect(xml).toContain('<SipUri>sip:bob@biloxi.example.com</SipUri>');
    });

    test('setSipUri should replace the nested SipUri', () => {
        const sipUri1 = new SipUri('sip:alice@atlanta.example.com');
        const sipUri2 = new SipUri('sip:bob@biloxi.example.com');
        const refer = new Refer({}, sipUri1);

        refer.setSipUri(sipUri2);
        const xml = refer.toBxml();
        expect(xml).not.toContain('alice');
        expect(xml).toContain('sip:bob@biloxi.example.com');
    });
});


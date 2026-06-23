import { Refer, ReferAttributes } from '../../../../../models/bxml/verbs/Refer';
import { ReferSipUri } from '../../../../../models/bxml/verbs/ReferSipUri';

describe('Refer', () => {
    test('should generate Refer XML with SipUri and all attributes', () => {
        const attributes: ReferAttributes = {
            referCompleteUrl: 'https://example.com/handleRefer',
            referCompleteMethod: 'POST',
            tag: 'my-tag',
        };
        const sipUri = new ReferSipUri('sip:alice@atlanta.example.com');
        const refer = new Refer(sipUri, attributes);

        const xml = refer.toBxml();
        expect(xml).toContain('<Refer');
        expect(xml).toContain('referCompleteUrl="https://example.com/handleRefer"');
        expect(xml).toContain('referCompleteMethod="POST"');
        expect(xml).toContain('tag="my-tag"');
        expect(xml).toContain('<SipUri>sip:alice@atlanta.example.com</SipUri>');
        expect(xml).toContain('</Refer>');
    });

    test('should generate Refer XML with no attributes', () => {
        const sipUri = new ReferSipUri('sip:bob@biloxi.example.com');
        const refer = new Refer(sipUri);

        const xml = refer.toBxml();
        expect(xml).toContain('<Refer>');
        expect(xml).toContain('<SipUri>sip:bob@biloxi.example.com</SipUri>');
    });

    test('setSipUri should replace the nested SipUri', () => {
        const sipUri1 = new ReferSipUri('sip:alice@atlanta.example.com');
        const sipUri2 = new ReferSipUri('sip:bob@biloxi.example.com');
        const refer = new Refer(sipUri1);

        refer.setSipUri(sipUri2);
        const xml = refer.toBxml();
        expect(xml).not.toContain('alice');
        expect(xml).toContain('sip:bob@biloxi.example.com');
    });
});

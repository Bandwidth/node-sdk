import { Verb } from '../../../../../models/bxml/Verb';
import { SipUri } from '../../../../../models/bxml/verbs/SipUri';
import { Refer, ReferAttributes } from '../../../../../models/bxml/verbs/Refer';

describe('Refer', () => {
    const attributes: ReferAttributes = {
        referCompleteUrl: 'https://initial.com',
        referCompleteMethod: 'POST',
        tag: 'initialTag'
    };

    const sipUri = new SipUri('sip:alice@atlanta.example.com');
    const newSipUri = new SipUri('sip:bob@biloxi.example.com');

    test('should create a Refer Verb', () => {
        const refer = new Refer(attributes);
        const expected = '<Refer referCompleteUrl="https://initial.com" referCompleteMethod="POST" tag="initialTag"/>';

        expect(refer).toBeInstanceOf(Refer);
        expect(refer).toBeInstanceOf(Verb);
        expect(refer.toBxml()).toBe(expected);
    });

    test('should create a Refer Verb with a nested SipUri', () => {
        const refer = new Refer(attributes, sipUri);
        const expected = '<Refer referCompleteUrl="https://initial.com" referCompleteMethod="POST" tag="initialTag"><SipUri>sip:alice@atlanta.example.com</SipUri></Refer>';

        expect(refer).toBeInstanceOf(Refer);
        expect(refer).toBeInstanceOf(Verb);
        expect(refer.toBxml()).toBe(expected);
    });

    test('should test the setSipUri method', () => {
        const refer = new Refer(attributes, sipUri);
        const expected = '<Refer referCompleteUrl="https://initial.com" referCompleteMethod="POST" tag="initialTag"><SipUri>sip:bob@biloxi.example.com</SipUri></Refer>';

        refer.setSipUri(newSipUri);
        expect(refer.toBxml()).toBe(expected);
    });
});

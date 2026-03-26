import { Verb } from '../../../../../models/bxml/Verb';
import { Endpoint, EndpointAttributes } from '../../../../../models/bxml/verbs/Endpoint';

describe('Endpoint', () => {
    const attributes: EndpointAttributes = {
        endpointId: 'ep-123456'
    };

    const expected = '<Endpoint endpointId="ep-123456">ep-123456</Endpoint>';
    const expectedNoAttributes = '<Endpoint>ep-123456</Endpoint>';

    test('should create an Endpoint Verb with attributes', () => {
        const endpoint = new Endpoint('ep-123456', attributes);

        expect(endpoint).toBeInstanceOf(Endpoint);
        expect(endpoint).toBeInstanceOf(Verb);
        expect(endpoint.toBxml()).toBe(expected);
    });

    test('should create an Endpoint Verb without attributes', () => {
        const endpoint = new Endpoint('ep-123456');

        expect(endpoint).toBeInstanceOf(Endpoint);
        expect(endpoint).toBeInstanceOf(Verb);
        expect(endpoint.toBxml()).toBe(expectedNoAttributes);
    });
});

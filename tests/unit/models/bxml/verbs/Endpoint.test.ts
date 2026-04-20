import { Verb } from '../../../../../models/bxml/Verb';
import { Endpoint } from '../../../../../models/bxml/verbs/Endpoint';

describe('Endpoint', () => {
    test('should create an Endpoint Verb', () => {
        const endpoint = new Endpoint('ep-123456');

        expect(endpoint).toBeInstanceOf(Endpoint);
        expect(endpoint).toBeInstanceOf(Verb);
        expect(endpoint.toBxml()).toBe('<Endpoint>ep-123456</Endpoint>');
    });
});

import { Verb } from '../../../../../models/bxml/Verb';
import { Connect, ConnectAttributes } from '../../../../../models/bxml/verbs/Connect';
import { Endpoint } from '../../../../../models/bxml/verbs/Endpoint';

describe('Connect', () => {
    const attributes: ConnectAttributes = {
        eventCallbackUrl: 'https://example.com/events'
    };

    const endpoint = new Endpoint('ep-123456');

    test('should create a Connect Verb', () => {
        const connect = new Connect(attributes);
        const expected = '<Connect eventCallbackUrl="https://example.com/events"/>';

        expect(connect).toBeInstanceOf(Connect);
        expect(connect).toBeInstanceOf(Verb);
        expect(connect.toBxml()).toBe(expected);
    });

    test('should create a Connect Verb with nested Endpoint', () => {
        const connect = new Connect(attributes, endpoint);
        const expected = '<Connect eventCallbackUrl="https://example.com/events"><Endpoint>ep-123456</Endpoint></Connect>';

        expect(connect).toBeInstanceOf(Connect);
        expect(connect).toBeInstanceOf(Verb);
        expect(connect.toBxml()).toBe(expected);
    });

    test('should create a Connect Verb with multiple nested Endpoints', () => {
        const endpoint2 = new Endpoint('ep-789012');
        const connect = new Connect(attributes, [endpoint, endpoint2]);
        const expected = '<Connect eventCallbackUrl="https://example.com/events"><Endpoint>ep-123456</Endpoint><Endpoint>ep-789012</Endpoint></Connect>';

        expect(connect).toBeInstanceOf(Connect);
        expect(connect).toBeInstanceOf(Verb);
        expect(connect.toBxml()).toBe(expected);
    });

    test('should test the addEndpoints method when no verbs are initially nested', () => {
        const connect = new Connect(attributes);
        const expected = '<Connect eventCallbackUrl="https://example.com/events"><Endpoint>ep-123456</Endpoint></Connect>';

        connect.addEndpoints(endpoint);
        expect(connect.toBxml()).toBe(expected);
    });
});

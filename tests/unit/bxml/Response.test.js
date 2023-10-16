const { Response } = require('../../../models/bxml/Response');
const { Root } = require('../../../models/bxml/Root');

describe('Bxml', () => {
    test('should create a bxml object', () => {
        const response = new Response();
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response/>';

        expect(response).toBeInstanceOf(Response);
        expect(response).toBeInstanceOf(Root);
        expect(response.toBxml()).toBe(expected);
    });
});

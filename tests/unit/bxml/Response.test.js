const { Response } = require('../../../models/bxml/Response');
const { Root } = require('../../../models/bxml/Root');

describe('Bxml', () => {
    test('should create a bxml object', () => {
        const bxml = new Response();

        expect(bxml).toBeInstanceOf(Response);
        expect(bxml).toBeInstanceOf(Root);
        expect(bxml.toBxml()).toBe('<?xml version="1.0" encoding="UTF-8"?><Response/>');
    });
});

const { Bxml } = require('../../../models/bxml/Bxml');
const { Root } = require('../../../models/bxml/Root');

describe('Bxml', () => {
    test('should create a bxml object', () => {
        const bxml = new Bxml();
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml/>';

        expect(bxml).toBeInstanceOf(Bxml);
        expect(bxml).toBeInstanceOf(Root);
        expect(bxml.toBxml()).toBe(expected);
    });
});

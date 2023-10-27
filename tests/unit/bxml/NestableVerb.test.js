const { Verb } = require('../../../models/bxml/Verb');
const { NestableVerb } = require('../../../models/bxml/NestableVerb');

describe('NestableVerb', () => {
    test('should create a nestable verb', () => {
        const verb = new NestableVerb('Test');
        const expected = '<Test/>';

        expect(verb).toBeInstanceOf(NestableVerb);
        expect(verb).toBeInstanceOf(Verb);
        expect(verb.toBxml()).toBe(expected);
    });
});

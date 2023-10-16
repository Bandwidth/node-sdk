const { Verb } = require('../../../models/bxml/Verb');

describe('Verb', () => {
    test('should create a verb', () => {
        const verb = new Verb('Test');

        expect(verb).toBeInstanceOf(Verb);
        expect(verb.toBxml()).toBe('<Test/>');
    });
});

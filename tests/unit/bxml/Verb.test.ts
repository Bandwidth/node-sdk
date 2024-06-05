import { Verb } from '../../../models/bxml/Verb';

describe('Verb', () => {
    test('should create a verb', () => {
        const verb = new Verb('Test');
        const expected = '<Test/>';

        expect(verb).toBeInstanceOf(Verb);
        expect(verb.toBxml()).toBe(expected);
    });
});

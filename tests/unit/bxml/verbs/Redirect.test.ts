const { Verb } = require('../../../../models/bxml/Verb');
const { Redirect } = require('../../../../models/bxml/verbs/Redirect');

describe('Redirect', () => {
    const attributes = {
        redirectUrl: 'https://initial.com',
        redirectMethod: 'POST',
        redirectFallbackUrl: 'https://initial.com',
        redirectFallbackMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag'
    };

    const expected = '<Redirect redirectUrl="https://initial.com" redirectMethod="POST" redirectFallbackUrl="https://initial.com" redirectFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag"/>';

    test('should create a Redirect Verb', () => {
        const redirect = new Redirect(attributes);

        expect(redirect).toBeInstanceOf(Redirect);
        expect(redirect).toBeInstanceOf(Verb);
        expect(redirect.toBxml()).toBe(expected);
    });
});

import { Verb } from '../../../../models/bxml/Verb';
import { Redirect, RedirectAttributes } from '../../../../models/bxml/verbs/Redirect';

describe('Redirect', () => {
    const attributes: RedirectAttributes = {
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

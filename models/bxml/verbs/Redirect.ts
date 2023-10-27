import { Verb } from '../Verb';

interface RedirectAttributes {
    redirectUrl: string;
    redirectMethod?: string;
    redirectFallbackUrl?: string;
    redirectFallbackMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
}

/**
 * @export
 * @class Redirect
 * @extends {Verb}
 * Represents a Redirect verb
 */
export class Redirect extends Verb {
    attributes: RedirectAttributes;

    /**
     * Creates an instance of Redirect
     * @param {RedirectAttributes} attributes The attributes to add to the element
     */
    constructor(attributes?: RedirectAttributes) {
        super('Redirect', undefined, attributes);
    }
}

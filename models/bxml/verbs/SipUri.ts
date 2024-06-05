import { Verb } from '../Verb';

export interface SipUriAttributes {
    uui?: string;
    transferAnswerUrl?: string;
    transferAnswerMethod?: string;
    transferAnswerFallbackUrl?: string;
    transferAnswerFallbackMethod?: string;
    transferDisconnectUrl?: string;
    transferDisconnectMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
}

/**
 * @export
 * @class SipUri
 * @extends {Verb}
 * Represents a SipUri verb
 */
export class SipUri extends Verb {
    uri: string;
    attributes: SipUriAttributes;

    /**
     * Creates an instance of SipUri
     * @param {string} uri The sip uri to transfer to
     * @param {SipUriAttributes} attributes The attributes to add to the element
     */
    constructor(uri: string, attributes?: SipUriAttributes) {
        super('SipUri', uri, attributes);
    }
}

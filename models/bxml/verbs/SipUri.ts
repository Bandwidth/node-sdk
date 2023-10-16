import { Verb } from '../Verb';

interface SipUriAttributes {
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
     * @param uri [string] The sip uri to transfer to
     * @param attributes [SipUriAttributes] The attributes to add to the element
     */
    constructor(uri: string, attributes?: SipUriAttributes) {
        super('SipUri', uri, attributes);
    }
}

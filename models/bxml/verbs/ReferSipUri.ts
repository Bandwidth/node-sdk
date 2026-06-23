import { Verb } from '../Verb';

/**
 * @export
 * @class ReferSipUri
 * @extends {Verb}
 * Represents a SipUri child element scoped to the Refer verb.
 * Unlike the Transfer-scoped SipUri, this accepts only a URI — no
 * transferAnswerUrl, uui, username/password, or other Transfer attributes.
 */
export class ReferSipUri extends Verb {
    uri: string;

    /**
     * Creates an instance of ReferSipUri
     * @param {string} uri The SIP URI to refer to (must start with sip:)
     */
    constructor(uri: string) {
        super('SipUri', uri);
    }
}


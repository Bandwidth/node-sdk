import { NestableVerb } from '../NestableVerb';
import { SipUri } from './SipUri';

export interface ReferAttributes {
    referCompleteUrl?: string;
    referCompleteMethod?: string;
    tag?: string;
}

/**
 * @export
 * @class Refer
 * @extends {NestableVerb}
 * Represents a Refer BXML verb.
 * NOTE: On success the call is terminated - the remote SIP endpoint redirects away from Bandwidth.
 * Recovery BXML in referCompleteUrl only makes sense for failure handling.
 */
export class Refer extends NestableVerb {
    attributes: ReferAttributes;

    /**
     * Creates an instance of Refer
     * @param {SipUri} sipUri The SipUri child element (required - spec mandates exactly one)
     * @param {ReferAttributes} attributes The attributes to add to the element
     */
    constructor(sipUri: SipUri, attributes?: ReferAttributes) {
        super('Refer', undefined, attributes, [sipUri]);
    }

    /**
     * Set the SipUri for this Refer verb
     * @param {SipUri} sipUri The SipUri to refer to
     */
    setSipUri(sipUri: SipUri): void {
        // Replaces the single required SipUri child - <Refer> allows exactly one.
        this.nestedVerbs = [sipUri];
    }
}

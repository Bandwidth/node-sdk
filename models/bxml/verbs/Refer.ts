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
 * NOTE: On success the call is terminated — the remote SIP endpoint redirects away from Bandwidth.
 * Recovery BXML in referCompleteUrl only makes sense for failure handling.
 */
export class Refer extends NestableVerb {
    attributes: ReferAttributes;

    /**
     * Creates an instance of Refer
     * @param {ReferAttributes} attributes The attributes to add to the element
     * @param {SipUri} sipUri The SipUri child element (required for a valid Refer)
     */
    constructor(attributes?: ReferAttributes, sipUri?: SipUri) {
        super('Refer', undefined, attributes, sipUri ? [sipUri] : undefined);
    }

    /**
     * Set the SipUri for this Refer verb
     * @param {SipUri} sipUri The SipUri to refer to
     */
    setSipUri(sipUri: SipUri): void {
        this.nestedVerbs = [sipUri];
    }
}


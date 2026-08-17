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
 * Represents a Refer verb.
 */
export class Refer extends NestableVerb {
    attributes: ReferAttributes;

    /**
     * Creates an instance of Refer
     * @param {ReferAttributes} attributes The attributes to add to the element
     * @param {SipUri} sipUri The SipUri to refer to
     */
    constructor(attributes?: ReferAttributes, sipUri?: SipUri) {
        super('Refer', undefined, attributes, sipUri);
    }

    /**
     * Set the SipUri for this Refer verb
     * @param {SipUri} sipUri The SipUri to refer to
     */
    setSipUri(sipUri: SipUri): void {
        this.nestedVerbs = [sipUri];
    }
}

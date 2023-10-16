import { Verb } from '../Verb';

interface ForwardAttributes {
    to: string;
    from?: string;
    callTimeout?: number;
    diversionTreatment?: string;
    diversionReason?: string;
    uui?: string;
}

/**
 * @export
 * @class Forward
 * @extends {Verb}
 * Represents a Forward verb
 */
export class Forward extends Verb {
    attributes: ForwardAttributes;

    /**
     * Creates an instance of Forward
     * @param {ForwardAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: ForwardAttributes) {
        super('Forward', undefined, attributes);
    }
}

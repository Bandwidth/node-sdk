import { Verb } from '../Verb';

interface SendDtmfAttributes {
    toneDuration?: number;
    toneInterval?: number;
}

/**
 * @export
 * @class SendDtmf
 * @extends {Verb}
 * Represents a SendDtmf verb
 */
export class SendDtmf extends Verb {
    digits: string;
    attributes: SendDtmfAttributes;

    /**
     * Creates an instance of SendDtmf
     * @param {string} digits The digits to send
     * @param {SendDtmfAttributes} attributes The attributes to add to the element
     */
    constructor(digits: string, attributes?: SendDtmfAttributes) {
        super('SendDtmf', digits, attributes);
    }
}

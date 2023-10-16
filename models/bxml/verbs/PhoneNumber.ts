import { Verb } from '../Verb';

interface PhoneNumberAttributes {
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
 * @class PhoneNumber
 * @extends {Verb}
 * Represents a PhoneNumber verb
 */
export class PhoneNumber extends Verb {
    number: string;
    attributes: PhoneNumberAttributes;

    /**
     * Creates an instance of PhoneNumber
     * @param number [string] The phone number to transfer to
     * @param attributes [PhoneNumberAttributes] The attributes to add to the element
     */
    constructor(number: string, attributes?: PhoneNumberAttributes) {
        super('PhoneNumber', number, attributes);
    }
}

import { Verb } from '../Verb';

interface SpeakSentenceAttributes {
    voice?: string;
    gender?: string;
    locale?: string;
}

/**
 * @export
 * @class SpeakSentence
 * @extends {Verb}
 * Represents a SpeakSentence verb
*/
export class SpeakSentence extends Verb {
    text: string;
    attributes: SpeakSentenceAttributes;

    /**
     * Creates an instance of SpeakSentence
     * @param {string} text The text to speak
     * @param {SpeakSentenceAttributes} attributes The attributes to add to the element
     */
    constructor(text: string, attributes?: SpeakSentenceAttributes) {
        super('SpeakSentence', text, attributes);
    }
}

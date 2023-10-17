import { Verb } from '../Verb';
import { XMLWriterOptions } from 'xmlbuilder2/lib/interfaces';
import { SSML_REGEX } from '../Root';

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

    /**
     * Return BXML representation of this element
     * @param options XML Serialization options
     */
    toBxml(options?: XMLWriterOptions): string {
        return this.generateXml().toString(options).replace(SSML_REGEX, '<$1>');
    }
}

import { create } from 'xmlbuilder2';
import { XMLBuilder, XMLWriterOptions } from 'xmlbuilder2/lib/interfaces';
import { Verb } from './Verb';

export const SSML_REGEX = /&lt;([a-zA-Z\/\/].*?)&gt;/g;

/**
 * @export
 * @class Root
 * @extends {Verb}
 * Root class for BXML and Response Tags
 */
export class Root {
    name: string;
    nestedVerbs?: Verb[];

    /**
     * Creates an instance of Root
     * @param name [string] Name of the XML element
     * @param nestedVerbs [Verb | Array<Verb>] Nested Verb or Array of Nested Verbs
     */
    constructor(name: string, nestedVerbs?: Verb | Verb[]) {
        this.name = name;
        if (nestedVerbs) {
            if (nestedVerbs instanceof Array) {
                this.nestedVerbs = nestedVerbs;
            } else {
                this.nestedVerbs = [nestedVerbs];
            }
        } else {
            this.nestedVerbs = [];
        }
    }

    /**
     * Generate an XML element for the verb
     */
    generateXml(): XMLBuilder {
        const xml = create({ version: '1.0', encoding: 'UTF-8' }).ele(this.name);
        this.nestedVerbs?.forEach((verb) => { xml.import(verb.generateXml()); });
        return xml;
    }

    /**
     * Add a verb or verbs to the root element
     * @param {Verb | Verb[]} verbs The verb or verbs to add
     */
    addVerbs(verbs: Verb | Verb[]): void {
        this.nestedVerbs = this.nestedVerbs.concat(verbs);
    }

    /**
     * Return BXML representation of this element
     * @param options XML Serialization options
     */
    toBxml(options?: XMLWriterOptions): string {
        return this.generateXml().end(options).replace(SSML_REGEX, '<$1>');
    }
}

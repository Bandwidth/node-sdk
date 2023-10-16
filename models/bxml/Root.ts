import { create } from 'xmlbuilder2';
import { XMLBuilder, XMLWriterOptions } from 'xmlbuilder2/lib/interfaces';
import { Verb } from './Verb';

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
     * @param nestedVerbs [Array<Verb>] Array of nested verbs
     */
    constructor(name: string, nestedVerbs?: Verb[]) {
        this.name = name;
        this.nestedVerbs = nestedVerbs;
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
     * Return BXML representation of this element
     * @param options XML Serialization options
     */
    toBxml(options?: XMLWriterOptions): string {
        return this.generateXml().end(options);
    }
}

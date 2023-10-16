import { create } from 'xmlbuilder2';
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';
import { Verb } from './Verb';

/**
 * @export
 * @class NestableVerb
 * @extends {Verb}
 * Base class for all BXML verbs that can contain other verbs
 */
export class NestableVerb extends Verb {
    name: string;
    content: string;
    attributes: object;
    nestedVerbs?: Verb[];

    /**
     * Creates an instance of NestableVerb
     * @param name [string] Name of the XML element
     * @param content [string] Content of the XML element
     * @param attributes [object] Attributes of the XML element
     * @param nestedVerbs [Array<Verb>] Array of nested verbs
     */
    constructor(name: string, content?: string, attributes?: object, nestedVerbs?: Verb[]) {
        super(name, content, attributes);
        this.nestedVerbs = nestedVerbs;
    }

    /**
     * Generate an XML element for the verb
     */
    generateXml(): XMLBuilder {
        const xml = create().ele(this.name, this.attributes).txt(this.content);
        this.nestedVerbs?.forEach((verb) => { xml.import(verb.generateXml()); });
        return xml;
    }
}

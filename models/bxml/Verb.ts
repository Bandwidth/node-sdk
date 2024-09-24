import { create } from 'xmlbuilder2';
import { XMLBuilder, XMLWriterOptions } from 'xmlbuilder2/lib/interfaces';

/**
 * @export
 * @class Verb
 * Base class for all BXML verbs
 */
export class Verb {
    name: string;
    content: string;
    attributes: object;

    /**
     * Creates an instance of Verb
     * @param name [string] Name of the XML element
     * @param content [string] Content of the XML element
     * @param attributes [object] Attributes of the XML element
     */
    constructor(name: string, content?: string, attributes?: object) {
        this.name = name;
        this.content = content ?? '';
        this.attributes = attributes ?? {};
    }

    /**
     * Generate an XML element for the verb
     */
    generateXml(): XMLBuilder {
        const xml = create().ele(this.name, this.attributes).txt(this.content);
        return xml;
    }

    /**
     * Return BXML representation of this element
     * @param options XML Serialization options
     */
    toBxml(options?: XMLWriterOptions): string {
        return this.generateXml().toString(options);
    }
}

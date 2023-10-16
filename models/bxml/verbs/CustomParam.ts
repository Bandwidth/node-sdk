import { Verb } from '../Verb';

interface CustomParamAttributes {
    name: string;
    value: string;
}

/**
 * @export
 * @class CustomParam
 * @extends {Verb}
 * Represents a CustomParam verb
 */

export class CustomParam extends Verb {
    attributes: CustomParamAttributes;

    /**
     * Creates an instance of CustomParam
     * @param attributes [CustomParamAttributes] The attributes to add to the element
     */
    constructor(attributes: CustomParamAttributes) {
        super('CustomParam', undefined , attributes);
    }
}

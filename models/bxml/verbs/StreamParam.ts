import { Verb } from '../Verb';

export interface StreamParamAttributes {
    name: string;
    value: string;
}

/**
 * @export
 * @class StreamParam
 * @extends {Verb}
 * Represents a StreamParam verb
 */
export class StreamParam extends Verb {
    attributes: StreamParamAttributes;

    /**
     * Creates an instance of StreamParam
     * @param {StreamParamAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: StreamParamAttributes) {
        super('StreamParam', undefined , attributes);
    }
}

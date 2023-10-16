import { Verb } from '../Verb';

interface RingAttributes {
    duration?: number;
    answerCall?: boolean;
}

/**
 * @export
 * @class Ring
 * @extends {Verb}
 * Represents a Ring verb
 */
export class Ring extends Verb {
    attributes: RingAttributes;

    /**
     * Creates an instance of Ring
     * @param attributes [RingAttributes] The attributes to add to the element
     */
    constructor(attributes: RingAttributes) {
        super('Ring', undefined, attributes);
    }
}

import { Verb } from '../Verb';

interface PauseAttributes {
    duration?: number;
}

/**
 * @export
 * @class Pause
 * @extends {Verb}
 * Represents a Pause verb
 */
export class Pause extends Verb {
    attributes: PauseAttributes;

    /**
     * Creates an instance of Pause
     * @param {PauseAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: PauseAttributes) {
        super('Pause', undefined, attributes);
    }
}

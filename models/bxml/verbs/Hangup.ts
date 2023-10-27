import { Verb } from '../Verb';

/**
 * @export
 * @class Hangup
 * @extends {Verb}
 * Represents a Hangup verb
 */
export class Hangup extends Verb {
    /**
     * Creates an instance of Hangup
     */
    constructor() {
        super('Hangup');
    }
}

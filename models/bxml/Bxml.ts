import { Root } from './Root';
import { Verb } from './Verb';

/**
 * @export
 * @class Bxml
 * @extends {Root}
 * Top Level Bxml element to contain all other BXML verbs
 */
export class Bxml extends Root {
    name: string;
    nestedVerbs?: Verb[];

    /**
     * Creates an instance of Bxml
     * @param nestedVerbs [Array<Verb>] Array of nested verbs
     */
    constructor(nestedVerbs?: Verb[]) {
        super('Bxml', nestedVerbs)
    }
}

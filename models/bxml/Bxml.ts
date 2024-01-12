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
     * @param nestedVerbs [Verb | Array<Verb>] Nested Verb or Array of Nested Verbs
     */
    constructor(nestedVerbs?: Verb | Verb[]) {
        super('Bxml', nestedVerbs)
    }
}

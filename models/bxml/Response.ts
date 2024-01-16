import { Root } from './Root';
import { Verb } from './Verb';

/**
 * @export
 * @class Response
 * @extends {Root}
 * Top Level Response element to contain all other BXML verbs
 */
export class Response extends Root {
    name: string;
    nestedVerbs?: Verb[];

    /**
     * Creates an instance of Response
     * @param nestedVerbs [Verb | Array<Verb>] Nested Verb or Array of Nested Verbs
     */
    constructor(nestedVerbs?: Verb | Verb[]) {
        super('Response', nestedVerbs)
    }
}

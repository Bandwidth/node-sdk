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
     * @param nestedVerbs [Array<Verb>] Array of nested verbs
     */
    constructor(nestedVerbs?: Verb[]) {
        super('Response', nestedVerbs)
    }
}

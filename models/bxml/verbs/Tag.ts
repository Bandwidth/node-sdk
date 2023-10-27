import { Verb } from '../Verb';

/**
 * @export
 * @class Tag
 * @extends {Verb}
 * Represents a Tag verb
 */
export class Tag extends Verb {
    content: string;

    /**
     * @param {string} content The content of the tag
     * Creates an instance of Tag
     */
    constructor(content: string) {
        super('Tag', content);
    }
}

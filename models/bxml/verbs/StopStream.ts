import { Verb } from '../Verb';

export interface StopStreamAttributes {
    name: string;
    wait?: boolean;
}

/**
 * @export
 * @class StopStream
 * @extends {Verb}
 * Represents a StopStream verb
 */
export class StopStream extends Verb {
    attributes: StopStreamAttributes;

    /**
     * Creates an instance of StopStream
     * @param {StopStreamAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: StopStreamAttributes) {
        super('StopStream', undefined , attributes);
    }
}

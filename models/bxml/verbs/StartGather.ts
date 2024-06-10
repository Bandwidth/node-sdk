import { Verb } from '../Verb';

export interface StartGatherAttributes {
    dtmfUrl: string;
    dtmfMethod?: string;
    username?: string;
    password?: string;
    tag?: string;
}

/**
 * @export
 * @class StartGather
 * @extends {Verb}
 * Represents a StartGather verb
 */
export class StartGather extends Verb {
    attributes: StartGatherAttributes;

    /**
     * Creates an instance of StartGather
     * @param {StartGatherAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: StartGatherAttributes) {
        super('StartGather', undefined, attributes);
    }
}

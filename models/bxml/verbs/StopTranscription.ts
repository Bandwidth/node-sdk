import { Verb } from '../Verb';

export interface StopTranscriptionAttributes {
    name: string;
}

/**
 * @export
 * @class StopTranscription
 * @extends {Verb}
 * Represents a StopTranscription verb
 */
export class StopTranscription extends Verb {
    attributes: StopTranscriptionAttributes;

    /**
     * Creates an instance of StopTranscription
     * @param {StopTranscriptionAttributes} attributes The attributes to add to the element
     */
    constructor(attributes: StopTranscriptionAttributes) {
        super('StopTranscription', undefined , attributes);
    }
}

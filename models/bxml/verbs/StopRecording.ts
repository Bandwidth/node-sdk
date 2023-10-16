import { Verb } from '../Verb';

/**
 * @export
 * @class StopRecording
 * @extends {Verb}
 * Represents a StopRecording verb
 */
export class StopRecording extends Verb {
    /**
     * Creates an instance of StopRecording
     */
    constructor() {
        super('StopRecording');
    }
}

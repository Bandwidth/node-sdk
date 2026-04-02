import { Verb } from '../Verb';

/**
 * @export
 * @class Endpoint
 * @extends {Verb}
 * Represents an Endpoint verb
 */
export class Endpoint extends Verb {
    /**
     * Creates an instance of Endpoint
     * @param {string} endpointId The endpoint ID to connect to
     */
    constructor(endpointId: string) {
        super('Endpoint', endpointId);
    }
}

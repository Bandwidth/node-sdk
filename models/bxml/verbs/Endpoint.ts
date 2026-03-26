import { Verb } from '../Verb';

export interface EndpointAttributes {
    endpointId?: string;
}

/**
 * @export
 * @class Endpoint
 * @extends {Verb}
 * Represents an Endpoint verb
 */
export class Endpoint extends Verb {
    attributes: EndpointAttributes;

    /**
     * Creates an instance of Endpoint
     * @param {string} endpointId The endpoint ID to connect to
     * @param {EndpointAttributes} attributes The attributes to add to the element
     */
    constructor(endpointId: string, attributes?: EndpointAttributes) {
        super('Endpoint', endpointId, attributes);
    }
}

import { NestableVerb } from '../NestableVerb';
import { Endpoint } from './Endpoint';

export interface ConnectAttributes {
    eventCallbackUrl?: string;
}

/**
 * @export
 * @class Connect
 * @extends {NestableVerb}
 * Represents a Connect verb
 */
export class Connect extends NestableVerb {
    attributes: ConnectAttributes;

    /**
     * Creates an instance of Connect
     * @param {ConnectAttributes} attributes The attributes to add to the element
     * @param {Endpoint | Endpoint[]} endpoints The endpoint or endpoints to connect to
     */
    constructor(attributes?: ConnectAttributes, endpoints?: Endpoint | Endpoint[]) {
        super('Connect', undefined, attributes, endpoints);
    }

    /**
     * Add an endpoint or endpoints to the connect
     * @param {Endpoint | Endpoint[]} endpoints The endpoint or endpoints to add
     */
    addEndpoints(endpoints: Endpoint | Endpoint[]): void {
        this.nestedVerbs = this.nestedVerbs.concat(endpoints);
    }
}

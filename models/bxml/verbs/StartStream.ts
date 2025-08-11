import { NestableVerb } from '../NestableVerb';
import { StreamParam } from './StreamParam';

export interface StartStreamAttributes {
    name?: string;
    mode?: string;
    tracks?: string;
    destination?: string;
    destinationUsername?: string;
    destinationPassword?: string;
    streamEventUrl?: string;
    streamEventMethod?: string;
    username?: string;
    password?: string;
}

/**
 * @export
 * @class StartStream
 * @extends {NestableVerb}
 * Represents a StartStream verb
 */
export class StartStream extends NestableVerb {
    attributes: StartStreamAttributes;

    /**
     * Creates an instance of StartStream
     * @param {StartStreamAttributes} attributes The attributes to add to the element
     * @param {StreamParam | StreamParam[]} streamParams The stream params to add to the element
     */
    constructor(attributes?: StartStreamAttributes, streamParams?: StreamParam | StreamParam[]) {
        super('StartStream', undefined, attributes, streamParams);
    }

    /**
     * Add a stream param or params to the StartStream
     * @param {StreamParam | StreamParam[]} streamParams The stream param or params to add
     */
    addStreamParams(streamParams: StreamParam | StreamParam[]): void {
        this.nestedVerbs = this.nestedVerbs.concat(streamParams);
    }
}

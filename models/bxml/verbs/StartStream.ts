import { NestableVerb } from '../NestableVerb';
import { StreamParam } from './StreamParam';

interface StartStreamAttributes {
    name?: string;
    tracks?: string;
    destination?: string;
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
     * @param {StreamParam[]} streamParams The stream params to add to the element
     */
    constructor(attributes?: StartStreamAttributes, streamParams?: StreamParam[]) {
        super('StartStream', undefined, attributes, streamParams);
    }

    /**
     * Add a stream param to the StartStream
     * @param {StreamParam} streamParam The stream param to add
     */
    addStreamParam(streamParam: StreamParam | StreamParam[]): void {
        this.nestedVerbs = this.nestedVerbs.concat(streamParam);
    }
}

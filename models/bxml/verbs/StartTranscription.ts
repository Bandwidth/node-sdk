import { NestableVerb } from '../NestableVerb';
import { CustomParam } from './CustomParam';

interface StartTranscriptionAttributes {
    name?: string;
    tracks?: string;
    transcriptionEventUrl?: string;
    transcriptionEventMethod?: string;
    username?: string;
    password?: string
    destination?: string;
    stabilized?: boolean;
}

/**
 * @export
 * @class StartTranscription
 * @extends {NestableVerb}
 * Represents a StartTranscription verb
 */
export class StartTranscription extends NestableVerb {
    attributes: StartTranscriptionAttributes;

    /**
     * Creates an instance of StartTranscription
     * @param {StartTranscriptionAttributes} attributes The attributes to add to the element
     * @param {CustomParam[]} customParams The custom params to add to the element
     */
    constructor(attributes?: StartTranscriptionAttributes, customParams?: CustomParam[]) {
        super('StartTranscription', undefined, attributes, customParams);
    }

    /**
     * Add a custom param to the StartTranscription
     * @param {CustomParam} customParam The custom param to add
     */
    addCustomParam(customParam: CustomParam | CustomParam[]): void {
        this.nestedVerbs = this.nestedVerbs.concat(customParam);
    }
}

import { Verb } from '../Verb';

export interface BridgeAttributes {
    bridgeCompleteUrl?: string;
    bridgeCompleteMethod?: string;
    bridgeCompleteFallbackUrl?: string;
    bridgeCompleteFallbackMethod?: string;
    bridgeTargetCompleteUrl?: string;
    bridgeTargetCompleteMethod?: string;
    bridgeTargetCompleteFallbackUrl?: string;
    bridgeTargetCompleteFallbackMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
}


/**
 * @export
 * @class Bridge
 * @extends {Verb}
 * Represents a Bridge verb
 */
export class Bridge extends Verb {
    targetCall: string;
    attributes: BridgeAttributes;

    /**
     * Creates an instance of Bridge
     * @param {string} targetCall The callId of the call to be bridged
     * @param {BridgeAttributes} attributes The attributes to add to the element
     */
    constructor(targetCall: string, attributes?: BridgeAttributes) {
        super('Bridge', targetCall, attributes);
    }
}


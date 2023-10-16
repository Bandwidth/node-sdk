import { NestableVerb } from '../NestableVerb';
import { PlayAudio } from './PlayAudio';
import { SpeakSentence } from './SpeakSentence';

type AudioVerbs = Array<PlayAudio | SpeakSentence>;

interface GatherAttributes {
    gatherUrl?: string;
    gatherMethod?: string;
    gatherFallbackUrl?: string;
    gatherFallbackMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
    terminatingDigits?: string;
    maxDigits?: number;
    interDigitTimeout?: number;
    firstDigitTimeout?: number;
    repeat_count?: number;
}

/**
 * @export
 * @class Gather
 * @extends {NestableVerbVerb}
 * Represents a Gather verb
 */
export class Gather extends NestableVerb {
    audioVerbs: AudioVerbs;
    attributes: GatherAttributes;

    /**
     * Creates an instance of Gather
     * @param {AudioVerbs} audioVerbs The audio verbs to be played
     * @param {GatherAttributes} attributes The attributes to add to the element
     */
    constructor(attributes?: GatherAttributes, audioVerbs?: AudioVerbs) {
        super('Gather', undefined, attributes, audioVerbs);
    }

    /**
     * Add an audio verb to the gather
     * @param {AudioVerbs} audioVerb The audio verb or verbs to add
     */
    addAudioVerb(audioVerb: PlayAudio | SpeakSentence | AudioVerbs): void {
        this.audioVerbs = this.audioVerbs.concat(audioVerb);
    }
}

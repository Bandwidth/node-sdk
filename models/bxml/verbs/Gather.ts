import { NestableVerb } from '../NestableVerb';
import { PlayAudio } from './PlayAudio';
import { SpeakSentence } from './SpeakSentence';
import { SSML_REGEX } from '../Root';
import { XMLWriterOptions } from 'xmlbuilder2/lib/interfaces';

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
    repeatCount?: number;
}

/**
 * @export
 * @class Gather
 * @extends {NestableVerbVerb}
 * Represents a Gather verb
 */
export class Gather extends NestableVerb {
    attributes: GatherAttributes;

    /**
     * Creates an instance of Gather
     * @param {GatherAttributes} attributes The attributes to add to the element
     * @param {PlayAudio | SpeakSentence | AudioVerbs} audioVerbs The audio verbs to be played
     */
    constructor(attributes?: GatherAttributes, audioVerbs?: PlayAudio | SpeakSentence | AudioVerbs) {
        super('Gather', undefined, attributes, audioVerbs);
    }

    /**
     * Return BXML representation of this element
     * @param options XML Serialization options
     */
    toBxml(options?: XMLWriterOptions): string {
        return this.generateXml().toString(options).replace(SSML_REGEX, '<$1>');
    }

    /**
     * Add an audio verb or verbs to the gather
     * @param {PlayAudio | SpeakSentence | AudioVerbs} audioVerbs The audio verb or verbs to add
     */
    addAudioVerbs(audioVerbs: PlayAudio | SpeakSentence | AudioVerbs): void {
        this.nestedVerbs = this.nestedVerbs.concat(audioVerbs);
    }
}

import { Verb } from '../Verb';

interface PlayAudioAttributes {
    username?: string;
    password?: string;
}

/**
 * @export
 * @class PlayAudio
 * @extends {Verb}
 * Represents a PlayAudio verb
 */
export class PlayAudio extends Verb {
    audioUri: string;
    attributes: PlayAudioAttributes;

    /**
     * Creates an instance of PlayAudio
     * @param audioUri [string] The URL of the audio to play
     * @param attributes [PlayAudioAttributes] The attributes to add to the element
     */
    constructor(audioUri: string, attributes?: PlayAudioAttributes) {
        super('PlayAudio', audioUri, attributes);
    }
}
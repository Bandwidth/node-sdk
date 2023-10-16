import { Verb } from '../Verb';

interface StartRecordingAttributes {
    recordingAvailableUrl?: string;
    recordingAvailableMethod?: string;
    transcribe?: boolean;
    transcriptionAvailableUrl?: string;
    transcriptionAvailableMethod?: string;
    username?: string;
    password?: string;
    tag?: string;
    fileFormat?: string;
    multiChannel?: boolean;
}

/**
 * @export
 * @class StartRecording
 * @extends {Verb}
 * Represents a StartRecording verb
 */
export class StartRecording extends Verb {
    attributes: StartRecordingAttributes;

    /**
     * Creates an instance of StartRecording
     * @param attributes [StartRecordingAttributes] The attributes to add to the element
     */
    constructor(attributes?: StartRecordingAttributes) {
        super('StartRecording', undefined, attributes);
    }
}

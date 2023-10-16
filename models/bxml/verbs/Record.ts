import { Verb } from '../Verb';

interface RecordAttributes {
    recordCompleteUrl?: string;
    recordCompleteMethod?: string;
    recordCompleteFallbackUrl?: string;
    recordCompleteFallbackMethod?: string;
    recordingAvailableUrl?: string;
    recordingAvailableMethod?: string;
    transcribe?: boolean;
    transcriptionAvailableUrl?: string;
    transcriptionAvailableMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
    terminatingDigits?: string;
    maxDuration?: number;
    silenceTimeout?: number;
    fileFormat?: string;
}

/**
 * @export
 * @class Record
 * @extends {Verb}
 * Represents a Record verb
 */
export class Record extends Verb {
    attributes: RecordAttributes;

    /**
     * Creates an instance of Record
     * @param attributes [RecordAttributes] The attributes to add to the element
     */
    constructor(attributes?: RecordAttributes) {
        super('Record', undefined, attributes);
    }
}

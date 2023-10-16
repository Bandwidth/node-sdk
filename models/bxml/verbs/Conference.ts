import { Verb } from '../Verb';

interface ConferenceAttributes {
    mute?: boolean;
    hold?: boolean;
    callIdsToCoach?: string;
    conferenceEventUrl?: string;
    conferenceEventMethod?: string;
    conferenceEventFallbackUrl?: string;
    conferenceEventFallbackMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
    callbackTimeout?: number;
}

/**
 * @export
 * @class Conference
 * @extends {Verb}
 * Represents a Conference verb
 */
export class Conference extends Verb {
    name: string;
    attributes: ConferenceAttributes;

    /**
     * Creates an instance of Conference
     * @param name [string] Name of the conference
     * @param attributes [ConferenceAttributes] The attributes to add to the element
     */
    constructor(name: string, attributes?: ConferenceAttributes) {
        super('Conference', name, attributes);
    }
}

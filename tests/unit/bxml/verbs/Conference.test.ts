import { Verb } from '../../../../models/bxml/Verb';
import { Conference } from '../../../../models/bxml/verbs/Conference';

describe('Conference', () => {
    const attributes = {
        mute: true,
        hold: true,
        callIdsToCoach: 'initial',
        conferenceEventUrl: 'https://initial.com',
        conferenceEventMethod: 'POST',
        conferenceEventFallbackUrl: 'https://initial.com',
        conferenceEventFallbackMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag',
        callbackTimeout: 5.1
    };

    const expected = '<Conference mute="true" hold="true" callIdsToCoach="initial" conferenceEventUrl="https://initial.com" conferenceEventMethod="POST" conferenceEventFallbackUrl="https://initial.com" conferenceEventFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" callbackTimeout="5.1">conferenceName</Conference>';

    test('should create a Conference Verb', () => {
        const conference = new Conference('conferenceName', attributes);

        expect(conference).toBeInstanceOf(Conference);
        expect(conference).toBeInstanceOf(Verb);
        expect(conference.toBxml()).toBe(expected);
    });
});

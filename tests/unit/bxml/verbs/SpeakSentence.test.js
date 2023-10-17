const { Verb } = require('../../../../models/bxml/Verb');
const { SpeakSentence } = require('../../../../models/bxml/verbs/SpeakSentence');

describe('SpeakSentence', () => {
    const attributes = {
        voice: 'julie',
        gender: 'female',
        locale: 'en_US'
    };

    const expected = '<SpeakSentence voice="julie" gender="female" locale="en_US"><lang xml:lang="es-MX">Hola</lang>ruby speak sentence <emphasis>SSML test</emphasis></SpeakSentence>';

    test('should create a SpeakSentence Verb', () => {
        const speakSentence = new SpeakSentence('<lang xml:lang="es-MX">Hola</lang>ruby speak sentence <emphasis>SSML test</emphasis>', attributes);

        expect(speakSentence).toBeInstanceOf(SpeakSentence);
        expect(speakSentence).toBeInstanceOf(Verb);
        expect(speakSentence.toBxml()).toBe(expected);
    });
});

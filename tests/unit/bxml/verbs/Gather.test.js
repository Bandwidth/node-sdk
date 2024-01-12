const { Verb } = require('../../../../models/bxml/Verb');
const { Gather } = require('../../../../models/bxml/verbs/Gather');
const { PlayAudio } = require('../../../../models/bxml/verbs/PlayAudio');
const { SpeakSentence } = require('../../../../models/bxml/verbs/SpeakSentence');

describe('Gather', () => {
    const attributes = {
        gatherUrl: 'https://initial.com',
        gatherMethod: 'POST',
        gatherFallbackUrl: 'https://initial.com',
        gatherFallbackMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag',
        terminatingDigits: '5',
        maxDigits: 5,
        interDigitTimeout: 5,
        firstDigitTimeout: 5,
        repeatCount: 5
    };

    const playAudio = new PlayAudio('https://audio.url/audio1.wav');
    const speakSentence = new SpeakSentence('<lang xml:lang="es-MX">Hola</lang>nodejs speak sentence <emphasis>SSML test</emphasis>');
    
    test('should create a Gather Verb', () => {
        const gather = new Gather(attributes);
        const expected = '<Gather gatherUrl="https://initial.com" gatherMethod="POST" gatherFallbackUrl="https://initial.com" gatherFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDigits="5" interDigitTimeout="5" firstDigitTimeout="5" repeatCount="5"/>';

        expect(gather).toBeInstanceOf(Gather);
        expect(gather).toBeInstanceOf(Verb);
        expect(gather.toBxml()).toBe(expected);
    });

    test('should create a Gather Verb with nested PlayAudio and SpeakSentence', () => {
        let gather = new Gather(attributes, playAudio);
        const expected = '<Gather gatherUrl="https://initial.com" gatherMethod="POST" gatherFallbackUrl="https://initial.com" gatherFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDigits="5" interDigitTimeout="5" firstDigitTimeout="5" repeatCount="5"><PlayAudio>https://audio.url/audio1.wav</PlayAudio></Gather>';
        const expectedSingle = '<Gather gatherUrl="https://initial.com" gatherMethod="POST" gatherFallbackUrl="https://initial.com" gatherFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDigits="5" interDigitTimeout="5" firstDigitTimeout="5" repeatCount="5"><PlayAudio>https://audio.url/audio1.wav</PlayAudio><SpeakSentence><lang xml:lang="es-MX">Hola</lang>nodejs speak sentence <emphasis>SSML test</emphasis></SpeakSentence></Gather>';
        const expectedMultiple = '<Gather gatherUrl="https://initial.com" gatherMethod="POST" gatherFallbackUrl="https://initial.com" gatherFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDigits="5" interDigitTimeout="5" firstDigitTimeout="5" repeatCount="5"><PlayAudio>https://audio.url/audio1.wav</PlayAudio><SpeakSentence><lang xml:lang="es-MX">Hola</lang>nodejs speak sentence <emphasis>SSML test</emphasis></SpeakSentence><SpeakSentence><lang xml:lang="es-MX">Hola</lang>nodejs speak sentence <emphasis>SSML test</emphasis></SpeakSentence><PlayAudio>https://audio.url/audio1.wav</PlayAudio></Gather>';

        expect(gather).toBeInstanceOf(Gather);
        expect(gather).toBeInstanceOf(Verb);
        expect(gather.toBxml()).toBe(expected);

        gather.addAudioVerbs(speakSentence);
        expect(gather.toBxml()).toBe(expectedSingle);

        gather.addAudioVerbs([speakSentence, playAudio]);
        expect(gather.toBxml()).toBe(expectedMultiple);
    });

    test('should test the addAudioVerb method', () => {
        const gather = new Gather(attributes);
        const expected = '<Gather gatherUrl="https://initial.com" gatherMethod="POST" gatherFallbackUrl="https://initial.com" gatherFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDigits="5" interDigitTimeout="5" firstDigitTimeout="5" repeatCount="5"><PlayAudio>https://audio.url/audio1.wav</PlayAudio></Gather>';

        gather.addAudioVerbs(playAudio);
        expect(gather.toBxml()).toBe(expected);
    });
});

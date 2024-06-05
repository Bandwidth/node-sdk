const { Verb } = require('../../../../models/bxml/Verb');
const { PlayAudio } = require('../../../../models/bxml/verbs/PlayAudio');

describe('PlayAudio', () => {
    const attributes = {
        username: 'initialUsername',
        password: 'initialPassword'
    };

    const expected = '<PlayAudio username="initialUsername" password="initialPassword">https://audio.url/audio1.wav</PlayAudio>';

    test('should create a PlayAudio Verb', () => {
        const playAudio = new PlayAudio('https://audio.url/audio1.wav', attributes);

        expect(playAudio).toBeInstanceOf(PlayAudio);
        expect(playAudio).toBeInstanceOf(Verb);
        expect(playAudio.toBxml()).toBe(expected);
    });
});

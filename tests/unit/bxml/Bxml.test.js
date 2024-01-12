const { Bxml } = require('../../../models/bxml/Bxml');
const { PauseRecording } = require('../../../models/bxml/verbs/PauseRecording');
const { Root } = require('../../../models/bxml/Root');

describe('Bxml', () => {
    const pauseRecording = new PauseRecording();

    test('should create a bxml object', () => {
        const bxml = new Bxml();
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml/>';

        expect(bxml).toBeInstanceOf(Bxml);
        expect(bxml).toBeInstanceOf(Root);
        expect(bxml.toBxml()).toBe(expected);
    });

    test('should initialize with a single nested verb', () => {
        const bxml = new Bxml(pauseRecording);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml><PauseRecording/></Bxml>';

        expect(bxml.toBxml()).toBe(expected);
    });

    test('should initialize with multiple nested verbs', () => {
        const bxml = new Bxml([pauseRecording, pauseRecording]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml><PauseRecording/><PauseRecording/></Bxml>';

        expect(bxml.toBxml()).toBe(expected);
    });

    test('should add a single nested verb', () => {
        const bxml = new Bxml();
        bxml.addVerbs(pauseRecording);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml><PauseRecording/></Bxml>';

        expect(bxml.toBxml()).toBe(expected);
    });

    test('should add multiple nested verbs', () => {
        const bxml = new Bxml();
        bxml.addVerbs([pauseRecording, pauseRecording]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Bxml><PauseRecording/><PauseRecording/></Bxml>';

        expect(bxml.toBxml()).toBe(expected);
    });
});

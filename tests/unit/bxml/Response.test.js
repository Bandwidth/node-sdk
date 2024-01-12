const { Response } = require('../../../models/bxml/Response');
const { PauseRecording } = require('../../../models/bxml/verbs/PauseRecording');
const { Root } = require('../../../models/bxml/Root');

describe('Response', () => {
    const pauseRecording = new PauseRecording();

    test('should create a response object', () => {
        const response = new Response();
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response/>';

        expect(response).toBeInstanceOf(Response);
        expect(response).toBeInstanceOf(Root);
        expect(response.toBxml()).toBe(expected);
    });

    test('should initialize with a single nested verb', () => {
        const response = new Response(pauseRecording);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });

    test('should initialize with multiple nested verbs', () => {
        const response = new Response([pauseRecording, pauseRecording]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });

    test('should add a single nested verb', () => {
        const response = new Response();
        response.addVerbs(pauseRecording);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });

    test('should multiple nested verbs', () => {
        const response = new Response();
        response.addVerbs([pauseRecording, pauseRecording]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });
});

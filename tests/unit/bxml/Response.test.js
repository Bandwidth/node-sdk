const { Response } = require('../../../models/bxml/Response');
const { PauseRecording } = require('../../../models/bxml/verbs/PauseRecording');
const { Root } = require('../../../models/bxml/Root');

describe('Response', () => {
    test('should create a response object', () => {
        const response = new Response();
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response/>';

        expect(response).toBeInstanceOf(Response);
        expect(response).toBeInstanceOf(Root);
        expect(response.toBxml()).toBe(expected);
    });

    test('should add a single nested verb', () => {
        const response = new Response();
        const pauseRecording = new PauseRecording();
        response.addVerbs(pauseRecording);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });

    test('should multiple nested verbs', () => {
        const response = new Response();
        const pauseRecording1 = new PauseRecording();
        const pauseRecording2 = new PauseRecording();
        response.addVerbs([pauseRecording1, pauseRecording2]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });
});

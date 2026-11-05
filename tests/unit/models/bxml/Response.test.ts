import { Response } from '../../../../models/bxml/Response';
import { PauseRecording } from '../../../../models/bxml/verbs/PauseRecording';
import { Root } from '../../../../models/bxml/Root';
import { Redirect } from '../../../../models/bxml/verbs/Redirect';
import { SpeakSentence } from '../../../../models/bxml/verbs/SpeakSentence';

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

    test('should add multiple nested verbs', () => {
        const response = new Response();
        response.addVerbs([pauseRecording, pauseRecording]);
        const expected = '<?xml version="1.0" encoding="UTF-8"?><Response><PauseRecording/><PauseRecording/></Response>';

        expect(response.toBxml()).toBe(expected);
    });
    describe('SSML un-escaping', () => {
        test('should keep attribute values escaped in a Response', () => {
            const redirect = new Redirect({ redirectUrl: 'https://example.com/?info=<https://cert.example.com/cert.pem>' });
            const bxml = new Response(redirect).toBxml();

            expect(bxml).toContain('info=&lt;https://cert.example.com/cert.pem&gt;');
            expect(bxml).not.toContain('info=<https');
        });

        test('should un-escape SSML in SpeakSentence text but not in sibling attributes', () => {
            const redirect = new Redirect({ redirectUrl: 'https://example.com/?info=<https://cert.example.com/cert.pem>' });
            const speak = new SpeakSentence('hi <break time="1s"/> there');
            const bxml = new Response([redirect, speak]).toBxml();

            expect(bxml).toContain('info=&lt;https://cert.example.com/cert.pem&gt;');
            expect(bxml).toContain('hi <break time="1s"/> there');
        });
    });
});

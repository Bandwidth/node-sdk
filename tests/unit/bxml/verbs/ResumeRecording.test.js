const { Verb } = require('../../../../models/bxml/Verb');
const { ResumeRecording } = require('../../../../models/bxml/verbs/ResumeRecording');

describe('ResumeRecording', () => {
    const expected = '<ResumeRecording/>';

    test('should create a ResumeRecording Verb', () => {
        const resumeRecording = new ResumeRecording();

        expect(resumeRecording).toBeInstanceOf(ResumeRecording);
        expect(resumeRecording).toBeInstanceOf(Verb);
        expect(resumeRecording.toBxml()).toBe(expected);
    });
});

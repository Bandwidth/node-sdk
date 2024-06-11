import { Verb } from '../../../../../models/bxml/Verb';
import { Record, RecordAttributes } from '../../../../../models/bxml/verbs/Record';

describe('Record', () => {
    const attributes: RecordAttributes = {
        recordCompleteUrl: 'https://initial.com',
        recordCompleteMethod: 'POST',
        recordCompleteFallbackUrl: 'https://initial.com',
        recordCompleteFallbackMethod: 'POST',
        recordingAvailableUrl: 'https://initial.com',
        recordingAvailableMethod: 'POST',
        transcribe: true,
        transcriptionAvailableUrl: 'https://initial.com',
        transcriptionAvailableMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag',
        terminatingDigits: '5',
        maxDuration: 5,
        silenceTimeout: 5,
        fileFormat: 'wav'
    };

    const expected = '<Record recordCompleteUrl="https://initial.com" recordCompleteMethod="POST" recordCompleteFallbackUrl="https://initial.com" recordCompleteFallbackMethod="POST" recordingAvailableUrl="https://initial.com" recordingAvailableMethod="POST" transcribe="true" transcriptionAvailableUrl="https://initial.com" transcriptionAvailableMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag" terminatingDigits="5" maxDuration="5" silenceTimeout="5" fileFormat="wav"/>';

    test('should create a Record Verb', () => {
        const record = new Record(attributes);

        expect(record).toBeInstanceOf(Record);
        expect(record).toBeInstanceOf(Verb);
        expect(record.toBxml()).toBe(expected);
    });
});

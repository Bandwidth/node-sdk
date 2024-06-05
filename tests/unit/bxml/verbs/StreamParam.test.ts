import { Verb } from '../../../../models/bxml/Verb';
import { StreamParam } from '../../../../models/bxml/verbs/StreamParam';

describe('StreamParam', () => {
    const attributes = {
        name: 'initialName',
        value: 'initialValue'
    };

    const expected = '<StreamParam name="initialName" value="initialValue"/>';

    test('should create a StreamParam Verb', () => {
        const streamParam = new StreamParam(attributes);

        expect(streamParam).toBeInstanceOf(StreamParam);
        expect(streamParam).toBeInstanceOf(Verb);
        expect(streamParam.toBxml()).toBe(expected);
    });
});

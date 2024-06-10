import { Verb } from '../../../../models/bxml/Verb';
import { StartGather, StartGatherAttributes } from '../../../../models/bxml/verbs/StartGather';

describe('CustomParam', () => {
    const attributes: StartGatherAttributes = {
        dtmfUrl: 'https://initial.com',
        dtmfMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        tag: 'initialTag'
    };

    const expected = '<StartGather dtmfUrl="https://initial.com" dtmfMethod="POST" username="initialUsername" password="initialPassword" tag="initialTag"/>';

    test('should create a StartGather Verb', () => {
        const startGather = new StartGather(attributes);

        expect(startGather).toBeInstanceOf(StartGather);
        expect(startGather).toBeInstanceOf(Verb);
        expect(startGather.toBxml()).toBe(expected);
    });
});

const { Verb } = require('../../../../models/bxml/Verb');
const { StartStream } = require('../../../../models/bxml/verbs/StartStream');
const { StreamParam } = require('../../../../models/bxml/verbs/StreamParam');

describe('StartStream', () => {
    const attributes = {
        name: 'initialName',
        tracks: 'inbound',
        destination: 'https://initial.com',
        streamEventUrl: 'https://initial.com',
        streamEventMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword'
    };

    const streamParam1 = new StreamParam({ name: 'streamParamName1', value: 'streamParamValue1' });
    const streamParam2 = new StreamParam({ name: 'streamParamName2', value: 'streamParamValue2' });
    
    test('should create a StartStream Verb', () => {
        const startStream = new StartStream(attributes);
        const expected = '<StartStream name="initialName" tracks="inbound" destination="https://initial.com" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"/>';

        expect(startStream).toBeInstanceOf(StartStream);
        expect(startStream).toBeInstanceOf(Verb);
        expect(startStream.toBxml()).toBe(expected);
    });

    test('should create a StartStream Verb with nested StreamParams', () => {
        let startStream = new StartStream(attributes, [streamParam1]);
        const expected = '<StartStream name="initialName" tracks="inbound" destination="https://initial.com" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/></StartStream>';
        const expectedSingle = '<StartStream name="initialName" tracks="inbound" destination="https://initial.com" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/></StartStream>';
        const expectedMultiple = '<StartStream name="initialName" tracks="inbound" destination="https://initial.com" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/></StartStream>';

        expect(startStream).toBeInstanceOf(StartStream);
        expect(startStream).toBeInstanceOf(Verb);
        expect(startStream.toBxml()).toBe(expected);

        startStream.addStreamParam(streamParam2);
        expect(startStream.toBxml()).toBe(expectedSingle);

        startStream.addStreamParam([streamParam1, streamParam2]);
        expect(startStream.toBxml()).toBe(expectedMultiple);
    });

    test('should test the addStreamParam method', () => {
        const startStream = new StartStream(attributes);
        const expected = '<StartStream name="initialName" tracks="inbound" destination="https://initial.com" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/></StartStream>';

        startStream.addStreamParam(streamParam1);
        expect(startStream.toBxml()).toBe(expected);
    });
});

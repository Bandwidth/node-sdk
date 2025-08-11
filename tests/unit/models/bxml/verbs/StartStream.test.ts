import { Verb } from '../../../../../models/bxml/Verb';
import { StartStream, StartStreamAttributes } from '../../../../../models/bxml/verbs/StartStream';
import { StreamParam } from '../../../../../models/bxml/verbs/StreamParam';

describe('StartStream', () => {
    const attributes: StartStreamAttributes = {
        name: 'initialName',
        mode: 'unidirectional',
        tracks: 'inbound',
        destination: 'https://initial.com',
        destinationUsername: 'initialDestUsername',
        destinationPassword: 'initialDestPassword',
        streamEventUrl: 'https://initial.com',
        streamEventMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword'
    };

    const streamParam1 = new StreamParam({ name: 'streamParamName1', value: 'streamParamValue1' });
    const streamParam2 = new StreamParam({ name: 'streamParamName2', value: 'streamParamValue2' });
    
    test('should create a StartStream Verb', () => {
        const startStream = new StartStream(attributes);
        const expected = '<StartStream name="initialName" mode="unidirectional" tracks="inbound" destination="https://initial.com" destinationUsername="initialDestUsername" destinationPassword="initialDestPassword" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"/>';

        expect(startStream).toBeInstanceOf(StartStream);
        expect(startStream).toBeInstanceOf(Verb);
        expect(startStream.toBxml()).toBe(expected);
    });

    test('should create a StartStream Verb with nested StreamParams', () => {
        let startStream = new StartStream(attributes, streamParam1);
        const expected = '<StartStream name="initialName" mode="unidirectional" tracks="inbound" destination="https://initial.com" destinationUsername="initialDestUsername" destinationPassword="initialDestPassword" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/></StartStream>';
        const expectedSingle = '<StartStream name="initialName" mode="unidirectional" tracks="inbound" destination="https://initial.com" destinationUsername="initialDestUsername" destinationPassword="initialDestPassword" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/></StartStream>';
        const expectedMultiple = '<StartStream name="initialName" mode="unidirectional" tracks="inbound" destination="https://initial.com" destinationUsername="initialDestUsername" destinationPassword="initialDestPassword" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/><StreamParam name="streamParamName1" value="streamParamValue1"/><StreamParam name="streamParamName2" value="streamParamValue2"/></StartStream>';

        expect(startStream).toBeInstanceOf(StartStream);
        expect(startStream).toBeInstanceOf(Verb);
        expect(startStream.toBxml()).toBe(expected);

        startStream.addStreamParams(streamParam2);
        expect(startStream.toBxml()).toBe(expectedSingle);

        startStream.addStreamParams([streamParam1, streamParam2]);
        expect(startStream.toBxml()).toBe(expectedMultiple);
    });

    test('should test the addStreamParams method when no verbs are initially nested', () => {
        const startStream = new StartStream(attributes);
        const expected = '<StartStream name="initialName" mode="unidirectional" tracks="inbound" destination="https://initial.com" destinationUsername="initialDestUsername" destinationPassword="initialDestPassword" streamEventUrl="https://initial.com" streamEventMethod="POST" username="initialUsername" password="initialPassword"><StreamParam name="streamParamName1" value="streamParamValue1"/></StartStream>';

        startStream.addStreamParams(streamParam1);
        expect(startStream.toBxml()).toBe(expected);
    });
});

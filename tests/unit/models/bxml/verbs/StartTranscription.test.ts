import { Verb } from '../../../../../models/bxml/Verb';
import { StartTranscription, StartTranscriptionAttributes } from '../../../../../models/bxml/verbs/StartTranscription';
import { CustomParam } from '../../../../../models/bxml/verbs/CustomParam';

describe('StartTranscription', () => {
    const attributes: StartTranscriptionAttributes = {
        name: 'initialName',
        tracks: 'inbound',
        transcriptionEventUrl: 'https://initial.com',
        transcriptionEventMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        destination: 'https://initial.com',
        stabilized: true
    };

    const customParam1 = new CustomParam({ name: 'customParamName1', value: 'customParamValue1' });
    const customParam2 = new CustomParam({ name: 'customParamName2', value: 'customParamValue2' });
    
    test('should create a StartTranscription Verb', () => {
        const startTranscription = new StartTranscription(attributes);
        const expected = '<StartTranscription name="initialName" tracks="inbound" transcriptionEventUrl="https://initial.com" transcriptionEventMethod="POST" username="initialUsername" password="initialPassword" destination="https://initial.com" stabilized="true"/>';

        expect(startTranscription).toBeInstanceOf(StartTranscription);
        expect(startTranscription).toBeInstanceOf(Verb);
        expect(startTranscription.toBxml()).toBe(expected);
    });

    test('should create a StartTranscription Verb with nested CustomParam', () => {
        let startTranscription = new StartTranscription(attributes, customParam1);
        const expected = '<StartTranscription name="initialName" tracks="inbound" transcriptionEventUrl="https://initial.com" transcriptionEventMethod="POST" username="initialUsername" password="initialPassword" destination="https://initial.com" stabilized="true"><CustomParam name="customParamName1" value="customParamValue1"/></StartTranscription>';
        const expectedSingle = '<StartTranscription name="initialName" tracks="inbound" transcriptionEventUrl="https://initial.com" transcriptionEventMethod="POST" username="initialUsername" password="initialPassword" destination="https://initial.com" stabilized="true"><CustomParam name="customParamName1" value="customParamValue1"/><CustomParam name="customParamName2" value="customParamValue2"/></StartTranscription>';
        const expectedMultiple = '<StartTranscription name="initialName" tracks="inbound" transcriptionEventUrl="https://initial.com" transcriptionEventMethod="POST" username="initialUsername" password="initialPassword" destination="https://initial.com" stabilized="true"><CustomParam name="customParamName1" value="customParamValue1"/><CustomParam name="customParamName2" value="customParamValue2"/><CustomParam name="customParamName1" value="customParamValue1"/><CustomParam name="customParamName2" value="customParamValue2"/></StartTranscription>';

        expect(startTranscription).toBeInstanceOf(StartTranscription);
        expect(startTranscription).toBeInstanceOf(Verb);
        expect(startTranscription.toBxml()).toBe(expected);

        startTranscription.addCustomParams(customParam2);
        expect(startTranscription.toBxml()).toBe(expectedSingle);

        startTranscription.addCustomParams([customParam1, customParam2]);
        expect(startTranscription.toBxml()).toBe(expectedMultiple);
    });

    test('should test the addCustomParams method method when no verbs are initially nested', () => {
        const startTranscription = new StartTranscription(attributes);
        const expected = '<StartTranscription name="initialName" tracks="inbound" transcriptionEventUrl="https://initial.com" transcriptionEventMethod="POST" username="initialUsername" password="initialPassword" destination="https://initial.com" stabilized="true"><CustomParam name="customParamName1" value="customParamValue1"/></StartTranscription>';

        startTranscription.addCustomParams(customParam1);
        expect(startTranscription.toBxml()).toBe(expected);
    });
});

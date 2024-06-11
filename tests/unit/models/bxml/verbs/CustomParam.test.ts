import { Verb } from '../../../../../models/bxml/Verb';
import { CustomParam, CustomParamAttributes } from '../../../../../models/bxml/verbs/CustomParam';

describe('CustomParam', () => {
    const attributes: CustomParamAttributes = {
        name: 'initialName',
        value: 'initialValue'
    };

    const expected = '<CustomParam name="initialName" value="initialValue"/>';

    test('should create a CustomParam Verb', () => {
        const customParam = new CustomParam(attributes);

        expect(customParam).toBeInstanceOf(CustomParam);
        expect(customParam).toBeInstanceOf(Verb);
        expect(customParam.toBxml()).toBe(expected);
    });
});

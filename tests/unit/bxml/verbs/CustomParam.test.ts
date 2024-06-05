const { Verb } = require('../../../../models/bxml/Verb');
const { CustomParam } = require('../../../../models/bxml/verbs/CustomParam');

describe('CustomParam', () => {
    const attributes = {
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

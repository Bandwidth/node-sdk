const { CallbackMethodEnum } = require('../../models/callback-method-enum');

describe('CallbackMethodEnum', () => {
    test('should define the expected values', () => {
        expect(CallbackMethodEnum.Get).toBe('GET');
        expect(CallbackMethodEnum.Post).toBe('POST');
    });
});

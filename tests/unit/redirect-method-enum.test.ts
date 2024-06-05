const { RedirectMethodEnum } = require('../../models/redirect-method-enum');

describe('RedirectMethodEnum', () => {
    test('should define the expected values', () => {
        expect(RedirectMethodEnum.Get).toBe('GET');
        expect(RedirectMethodEnum.Post).toBe('POST');
    });
});

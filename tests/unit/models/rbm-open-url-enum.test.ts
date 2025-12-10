import { RbmOpenUrlEnum } from '../../../models/rbm-open-url-enum';

describe('RbmOpenUrlEnum', () => {
    test('should define the expected values', () => {
        expect(RbmOpenUrlEnum.Browser).toBe('BROWSER');
        expect(RbmOpenUrlEnum.Webview).toBe('WEBVIEW');
    });
});

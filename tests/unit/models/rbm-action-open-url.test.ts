import { RbmActionOpenUrl } from '../../../models/rbm-action-open-url';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';
import { RbmOpenUrlEnum } from '../../../models/rbm-open-url-enum';
import { RbmWebViewEnum } from '../../../models/rbm-web-view-enum';

describe('RbmActionOpenUrl', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmActionOpenUrl = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
            url: 'test-url',
            application: RbmOpenUrlEnum.Browser,
            webviewViewMode: RbmWebViewEnum.Full,
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
        expect(fixture.url).toBe('test-url');
        expect(fixture.application).toBe(RbmOpenUrlEnum.Browser);
        expect(fixture.webviewViewMode).toBe(RbmWebViewEnum.Full);
    });
});

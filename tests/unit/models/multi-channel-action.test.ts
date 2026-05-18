import { MultiChannelAction } from '../../../models/multi-channel-action';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';
import { RbmOpenUrlEnum } from '../../../models/rbm-open-url-enum';
import { RbmWebViewEnum } from '../../../models/rbm-web-view-enum';

describe('MultiChannelAction', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelAction = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
            phoneNumber: 'test-phoneNumber',
            latitude: 1.5,
            longitude: 1.5,
            label: 'test-label',
            title: 'test-title',
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            description: 'test-description',
            url: 'test-url',
            application: RbmOpenUrlEnum.Browser,
            webviewViewMode: RbmWebViewEnum.Full,
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.latitude).toBe(1.5);
        expect(fixture.longitude).toBe(1.5);
        expect(fixture.label).toBe('test-label');
        expect(fixture.title).toBe('test-title');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.description).toBe('test-description');
        expect(fixture.url).toBe('test-url');
        expect(fixture.application).toBe(RbmOpenUrlEnum.Browser);
        expect(fixture.webviewViewMode).toBe(RbmWebViewEnum.Full);
    });
});

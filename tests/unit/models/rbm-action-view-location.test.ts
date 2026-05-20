import { RbmActionViewLocation } from '../../../models/rbm-action-view-location';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';

describe('RbmActionViewLocation', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmActionViewLocation = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
            latitude: 1.5,
            longitude: 1.5,
            label: 'test-label',
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
        expect(fixture.latitude).toBe(1.5);
        expect(fixture.longitude).toBe(1.5);
        expect(fixture.label).toBe('test-label');
    });
});

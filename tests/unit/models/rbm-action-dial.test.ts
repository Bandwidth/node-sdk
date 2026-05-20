import { RbmActionDial } from '../../../models/rbm-action-dial';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';

describe('RbmActionDial', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmActionDial = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
            phoneNumber: 'test-phoneNumber',
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
        expect(fixture.phoneNumber).toBe('test-phoneNumber');
    });
});

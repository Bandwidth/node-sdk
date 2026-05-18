import { RbmActionBase } from '../../../models/rbm-action-base';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';

describe('RbmActionBase', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmActionBase = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
    });
});

import { RbmWebViewEnum } from '../../../models/rbm-web-view-enum';

describe('RbmWebViewEnum', () => {
    test('should define the expected values', () => {
        expect(RbmWebViewEnum.Full).toBe('FULL');
        expect(RbmWebViewEnum.Half).toBe('HALF');
        expect(RbmWebViewEnum.Tall).toBe('TALL');
    });
});

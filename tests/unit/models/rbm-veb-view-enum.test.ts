import { RbmVebViewEnum } from '../../../models/rbm-veb-view-enum';

describe('RbmVebViewEnum', () => {
    test('should define the expected values', () => {
        expect(RbmVebViewEnum.Full).toBe('FULL');
        expect(RbmVebViewEnum.Half).toBe('HALF');
        expect(RbmVebViewEnum.Tall).toBe('TALL');
    });
});

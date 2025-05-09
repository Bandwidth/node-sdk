import { RbmMediaHeightEnum } from '../../../models/rbm-media-height-enum';

describe('RbmMediaHeightEnum', () => {
    test('should define the expected values', () => {
        expect(RbmMediaHeightEnum.Short).toBe('SHORT');
        expect(RbmMediaHeightEnum.Medium).toBe('MEDIUM');
        expect(RbmMediaHeightEnum.Tall).toBe('TALL');
    });
});

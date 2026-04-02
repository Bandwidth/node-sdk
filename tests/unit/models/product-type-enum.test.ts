import { ProductTypeEnum } from '../../../models/product-type-enum';

describe('ProductTypeEnum', () => {
    test('should define the expected values', () => {
        expect(ProductTypeEnum.LocalA2P).toBe('LOCAL_A2P');
        expect(ProductTypeEnum.P2P).toBe('P2P');
        expect(ProductTypeEnum.ShortCodeReach).toBe('SHORT_CODE_REACH');
        expect(ProductTypeEnum.TollFree).toBe('TOLL_FREE');
        expect(ProductTypeEnum.HostedShortCode).toBe('HOSTED_SHORT_CODE');
        expect(ProductTypeEnum.AlphaNumeric).toBe('ALPHA_NUMERIC');
        expect(ProductTypeEnum.RbmMedia).toBe('RBM_MEDIA');
        expect(ProductTypeEnum.RbmRich).toBe('RBM_RICH');
        expect(ProductTypeEnum.RbmConversational).toBe('RBM_CONVERSATIONAL');
    });
});

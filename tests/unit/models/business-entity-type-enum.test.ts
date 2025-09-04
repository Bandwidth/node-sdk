import { BusinessEntityTypeEnum } from '../../../models/business-entity-type-enum';

describe('BusinessEntityTypeEnum', () => {
    test('should define the expected values', () => {
        expect(BusinessEntityTypeEnum.SoleProprietor).toBe('SOLE_PROPRIETOR');
        expect(BusinessEntityTypeEnum.PrivateProfit).toBe('PRIVATE_PROFIT');
        expect(BusinessEntityTypeEnum.PublicProfit).toBe('PUBLIC_PROFIT');
        expect(BusinessEntityTypeEnum.NonProfit).toBe('NON_PROFIT');
        expect(BusinessEntityTypeEnum.Government).toBe('GOVERNMENT');
    });
});

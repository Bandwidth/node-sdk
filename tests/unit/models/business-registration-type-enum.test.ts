import { BusinessRegistrationTypeEnum } from '../../../models/business-registration-type-enum';

describe('BusinessRegistrationTypeEnum', () => {
    test('should define the expected values', () => {
        expect(BusinessRegistrationTypeEnum.Ein).toBe('EIN');
        expect(BusinessRegistrationTypeEnum.Cbn).toBe('CBN');
        expect(BusinessRegistrationTypeEnum.Neq).toBe('NEQ');
        expect(BusinessRegistrationTypeEnum.ProvincialNumber).toBe('PROVINCIAL_NUMBER');
        expect(BusinessRegistrationTypeEnum.Crn).toBe('CRN');
        expect(BusinessRegistrationTypeEnum.Vat).toBe('VAT');
        expect(BusinessRegistrationTypeEnum.Acn).toBe('ACN');
        expect(BusinessRegistrationTypeEnum.Abn).toBe('ABN');
        expect(BusinessRegistrationTypeEnum.Brn).toBe('BRN');
        expect(BusinessRegistrationTypeEnum.Siren).toBe('SIREN');
        expect(BusinessRegistrationTypeEnum.Siret).toBe('SIRET');
        expect(BusinessRegistrationTypeEnum.Nzbn).toBe('NZBN');
        expect(BusinessRegistrationTypeEnum.UstIdnr).toBe('UST_IDNR');
        expect(BusinessRegistrationTypeEnum.Cif).toBe('CIF');
        expect(BusinessRegistrationTypeEnum.Nif).toBe('NIF');
        expect(BusinessRegistrationTypeEnum.Cnpj).toBe('CNPJ');
        expect(BusinessRegistrationTypeEnum.Uid).toBe('UID');
        expect(BusinessRegistrationTypeEnum.Other).toBe('OTHER');
    });
});

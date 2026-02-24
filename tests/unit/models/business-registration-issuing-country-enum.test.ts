import { BusinessRegistrationIssuingCountryEnum } from '../../../models/business-registration-issuing-country-enum';

describe('BusinessRegistrationIssuingCountryEnum', () => {
    test('should define the expected values', () => {
        expect(BusinessRegistrationIssuingCountryEnum.Usa).toBe('USA');
        expect(BusinessRegistrationIssuingCountryEnum.Can).toBe('CAN');
        expect(BusinessRegistrationIssuingCountryEnum.Hkg).toBe('HKG');
        expect(BusinessRegistrationIssuingCountryEnum.Gbr).toBe('GBR');
        expect(BusinessRegistrationIssuingCountryEnum.Irl).toBe('IRL');
        expect(BusinessRegistrationIssuingCountryEnum.Bra).toBe('BRA');
        expect(BusinessRegistrationIssuingCountryEnum.Nld).toBe('NLD');
        expect(BusinessRegistrationIssuingCountryEnum.Aus).toBe('AUS');
        expect(BusinessRegistrationIssuingCountryEnum.Fra).toBe('FRA');
        expect(BusinessRegistrationIssuingCountryEnum.Nzl).toBe('NZL');
        expect(BusinessRegistrationIssuingCountryEnum.Deu).toBe('DEU');
        expect(BusinessRegistrationIssuingCountryEnum.Esp).toBe('ESP');
        expect(BusinessRegistrationIssuingCountryEnum.Che).toBe('CHE');
    });
});

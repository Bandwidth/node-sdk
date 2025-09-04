import { BusinessRegistrationTypeEnum } from '../../../models/business-registration-type-enum';

describe('BusinessRegistrationTypeEnum', () => {
    test('should define the expected values', () => {
        expect(BusinessRegistrationTypeEnum.Ein).toBe('EIN');
        expect(BusinessRegistrationTypeEnum.Cbn).toBe('CBN');
    });
});

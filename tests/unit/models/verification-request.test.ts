import { VerificationRequest } from '../../../models/verification-request';
import { Address } from '../../../models/address';
import { Contact } from '../../../models/contact';
import { OptInWorkflow } from '../../../models/opt-in-workflow';
import { BusinessRegistrationTypeEnum } from '../../../models/business-registration-type-enum';
import { BusinessEntityTypeEnum } from '../../../models/business-entity-type-enum';

describe('VerificationRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: VerificationRequest = {
            businessAddress: {} as unknown as Address,
            businessContact: {} as unknown as Contact,
            messageVolume: 1.5,
            phoneNumbers: [],
            useCase: 'test-useCase',
            useCaseSummary: 'test-useCaseSummary',
            productionMessageContent: 'test-productionMessageContent',
            optInWorkflow: {} as unknown as OptInWorkflow,
            additionalInformation: 'test-additionalInformation',
            isvReseller: 'test-isvReseller',
            privacyPolicyUrl: 'test-privacyPolicyUrl',
            termsAndConditionsUrl: 'test-termsAndConditionsUrl',
            businessDba: 'test-businessDba',
            businessRegistrationNumber: 'test-businessRegistrationNumber',
            businessRegistrationType: BusinessRegistrationTypeEnum.Ein,
            businessRegistrationIssuingCountry: 'test-businessRegistrationIssuingCountry',
            businessEntityType: BusinessEntityTypeEnum.SoleProprietor,
            helpMessageResponse: 'test-helpMessageResponse',
            ageGatedContent: true,
            cvToken: 'test-cvToken',
        };

        expect(fixture.businessAddress).toBeDefined();
        expect(fixture.businessContact).toBeDefined();
        expect(fixture.messageVolume).toBe(1.5);
        expect(fixture.phoneNumbers).toEqual([]);
        expect(fixture.useCase).toBe('test-useCase');
        expect(fixture.useCaseSummary).toBe('test-useCaseSummary');
        expect(fixture.productionMessageContent).toBe('test-productionMessageContent');
        expect(fixture.optInWorkflow).toBeDefined();
        expect(fixture.additionalInformation).toBe('test-additionalInformation');
        expect(fixture.isvReseller).toBe('test-isvReseller');
        expect(fixture.privacyPolicyUrl).toBe('test-privacyPolicyUrl');
        expect(fixture.termsAndConditionsUrl).toBe('test-termsAndConditionsUrl');
        expect(fixture.businessDba).toBe('test-businessDba');
        expect(fixture.businessRegistrationNumber).toBe('test-businessRegistrationNumber');
        expect(fixture.businessRegistrationType).toBe(BusinessRegistrationTypeEnum.Ein);
        expect(fixture.businessRegistrationIssuingCountry).toBe('test-businessRegistrationIssuingCountry');
        expect(fixture.businessEntityType).toBe(BusinessEntityTypeEnum.SoleProprietor);
        expect(fixture.helpMessageResponse).toBe('test-helpMessageResponse');
        expect(fixture.ageGatedContent).toBe(true);
        expect(fixture.cvToken).toBe('test-cvToken');
    });
});

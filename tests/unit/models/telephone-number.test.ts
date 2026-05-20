import { TelephoneNumber } from '../../../models/telephone-number';

describe('TelephoneNumber', () => {
    test('should accept the expected shape', () => {
        const fixture: TelephoneNumber = {
            telephoneNumber: 'test-telephoneNumber',
        };

        expect(fixture.telephoneNumber).toBe('test-telephoneNumber');
    });
});

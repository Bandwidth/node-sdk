import { RbmLocationResponse } from '../../../models/rbm-location-response';

describe('RbmLocationResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmLocationResponse = {
            latitude: 1.5,
            longitude: 1.5,
        };

        expect(fixture.latitude).toBe(1.5);
        expect(fixture.longitude).toBe(1.5);
    });
});

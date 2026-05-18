import { LookupErrorResponse } from '../../../models/lookup-error-response';

describe('LookupErrorResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: LookupErrorResponse = {
            links: [],
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.errors).toEqual([]);
    });
});

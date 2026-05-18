import { AsyncLookupRequest } from '../../../models/async-lookup-request';

describe('AsyncLookupRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: AsyncLookupRequest = {
            phoneNumbers: [],
        };

        expect(fixture.phoneNumbers).toEqual([]);
    });
});

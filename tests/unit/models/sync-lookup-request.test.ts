import { SyncLookupRequest } from '../../../models/sync-lookup-request';

describe('SyncLookupRequest', () => {
    test('should accept the expected shape', () => {
        const fixture: SyncLookupRequest = {
            phoneNumbers: [],
            rcsAgent: 'test-rcsAgent',
        };

        expect(fixture.phoneNumbers).toEqual([]);
        expect(fixture.rcsAgent).toBe('test-rcsAgent');
    });
});

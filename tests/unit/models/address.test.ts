import { Address } from '../../../models/address';

describe('Address', () => {
    test('should accept the expected shape', () => {
        const fixture: Address = {
            name: 'test-name',
            addr1: 'test-addr1',
            addr2: 'test-addr2',
            city: 'test-city',
            state: 'test-state',
            zip: 'test-zip',
            url: 'test-url',
        };

        expect(fixture.name).toBe('test-name');
        expect(fixture.addr1).toBe('test-addr1');
        expect(fixture.addr2).toBe('test-addr2');
        expect(fixture.city).toBe('test-city');
        expect(fixture.state).toBe('test-state');
        expect(fixture.zip).toBe('test-zip');
        expect(fixture.url).toBe('test-url');
    });
});

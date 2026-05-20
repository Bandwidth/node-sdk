import { Link } from '../../../models/link';

describe('Link', () => {
    test('should accept the expected shape', () => {
        const fixture: Link = {
            rel: 'test-rel',
            href: 'test-href',
        };

        expect(fixture.rel).toBe('test-rel');
        expect(fixture.href).toBe('test-href');
    });
});

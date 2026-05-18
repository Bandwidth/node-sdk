import { LinkSchema } from '../../../models/link-schema';

describe('LinkSchema', () => {
    test('should accept the expected shape', () => {
        const fixture: LinkSchema = {
            href: 'test-href',
            rel: 'test-rel',
            method: 'test-method',
        };

        expect(fixture.href).toBe('test-href');
        expect(fixture.rel).toBe('test-rel');
        expect(fixture.method).toBe('test-method');
    });
});

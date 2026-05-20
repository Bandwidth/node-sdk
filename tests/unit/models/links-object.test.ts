import { LinksObject } from '../../../models/links-object';

describe('LinksObject', () => {
    test('should accept the expected shape', () => {
        const fixture: LinksObject = {
            first: 'test-first',
            next: 'test-next',
            previous: 'test-previous',
            last: 'test-last',
        };

        expect(fixture.first).toBe('test-first');
        expect(fixture.next).toBe('test-next');
        expect(fixture.previous).toBe('test-previous');
        expect(fixture.last).toBe('test-last');
    });
});

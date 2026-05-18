import { PageInfo } from '../../../models/page-info';

describe('PageInfo', () => {
    test('should accept the expected shape', () => {
        const fixture: PageInfo = {
            prevPage: 'test-prevPage',
            nextPage: 'test-nextPage',
            prevPageToken: 'test-prevPageToken',
            nextPageToken: 'test-nextPageToken',
        };

        expect(fixture.prevPage).toBe('test-prevPage');
        expect(fixture.nextPage).toBe('test-nextPage');
        expect(fixture.prevPageToken).toBe('test-prevPageToken');
        expect(fixture.nextPageToken).toBe('test-nextPageToken');
    });
});

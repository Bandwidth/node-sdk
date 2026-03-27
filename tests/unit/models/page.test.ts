import { Page } from '../../../models/page';

describe('Page', () => {
    test('should support full page shape', () => {
        const page: Page = {
            pageSize: 25,
            totalElements: 100,
            totalPages: 4,
            pageNumber: 1
        };

        expect(page.pageSize).toBe(25);
        expect(page.totalElements).toBe(100);
        expect(page.totalPages).toBe(4);
        expect(page.pageNumber).toBe(1);
    });
});

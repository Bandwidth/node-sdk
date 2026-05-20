import { MessagesList } from '../../../models/messages-list';
import { PageInfo } from '../../../models/page-info';

describe('MessagesList', () => {
    test('should accept the expected shape', () => {
        const fixture: MessagesList = {
            totalCount: 1.5,
            pageInfo: {} as unknown as PageInfo,
            messages: [],
        };

        expect(fixture.totalCount).toBe(1.5);
        expect(fixture.pageInfo).toBeDefined();
        expect(fixture.messages).toEqual([]);
    });
});

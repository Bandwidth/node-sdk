import { ListMessageDirectionEnum } from '../../models/list-message-direction-enum';

describe('ListMessageDirectionEnum', () => {
    test('should define the expected values', () => {
        expect(ListMessageDirectionEnum.Inbound).toBe('INBOUND');
        expect(ListMessageDirectionEnum.Outbound).toBe('OUTBOUND');
    });
});

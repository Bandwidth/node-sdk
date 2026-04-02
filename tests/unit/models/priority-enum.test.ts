import { PriorityEnum } from '../../../models/priority-enum';

describe('PriorityEnum', () => {
    test('should define the expected values', () => {
        expect(PriorityEnum.Default).toBe('default');
        expect(PriorityEnum.High).toBe('high');
        expect(Object.values(PriorityEnum)).toEqual(['default', 'high']);
    });
});

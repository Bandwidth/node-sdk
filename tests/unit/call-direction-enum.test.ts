import { CallDirectionEnum } from '../../models/call-direction-enum';

describe('CallDirectionEnum', () => {
    test('should define the expected values', () => {
        expect(CallDirectionEnum.Inbound).toBe('inbound');
        expect(CallDirectionEnum.Outbound).toBe('outbound');
    });
});

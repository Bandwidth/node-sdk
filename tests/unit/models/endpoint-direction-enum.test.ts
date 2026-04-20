import { EndpointDirectionEnum } from '../../../models/endpoint-direction-enum';

describe('EndpointDirectionEnum', () => {
    test('should define all expected enum values', () => {
        expect(EndpointDirectionEnum.Inbound).toBe('INBOUND');
        expect(EndpointDirectionEnum.Outbound).toBe('OUTBOUND');
        expect(EndpointDirectionEnum.Bidirectional).toBe('BIDIRECTIONAL');
        expect(Object.values(EndpointDirectionEnum)).toEqual([
            'INBOUND',
            'OUTBOUND',
            'BIDIRECTIONAL'
        ]);
    });
});

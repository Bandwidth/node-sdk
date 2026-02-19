import { EndpointDirectionEnum } from '../../../models/endpoint-direction-enum';

describe('EndpointDirectionEnum', () => {
    test('should define the expected values', () => {
        expect(EndpointDirectionEnum.Inbound).toBe('INBOUND');
        expect(EndpointDirectionEnum.Outbound).toBe('OUTBOUND');
        expect(EndpointDirectionEnum.Bidirectional).toBe('BIDIRECTIONAL');
    });
});

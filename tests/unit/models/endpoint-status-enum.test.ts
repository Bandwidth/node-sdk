import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';

describe('EndpointStatusEnum', () => {
    test('should define the expected values', () => {
        expect(EndpointStatusEnum.Connected).toBe('CONNECTED');
        expect(EndpointStatusEnum.Disconnected).toBe('DISCONNECTED');
    });
});

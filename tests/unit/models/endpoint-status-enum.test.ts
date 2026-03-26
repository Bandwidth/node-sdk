import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';

describe('EndpointStatusEnum', () => {
    test('should define all expected enum values', () => {
        expect(EndpointStatusEnum.Connected).toBe('CONNECTED');
        expect(EndpointStatusEnum.Disconnected).toBe('DISCONNECTED');
        expect(Object.values(EndpointStatusEnum)).toEqual([
            'CONNECTED',
            'DISCONNECTED'
        ]);
    });
});

import { EndpointEventTypeEnum } from '../../../models/endpoint-event-type-enum';

describe('EndpointEventTypeEnum', () => {
    test('should define all expected enum values', () => {
        expect(EndpointEventTypeEnum.DeviceConnected).toBe('DEVICE_CONNECTED');
        expect(EndpointEventTypeEnum.DeviceDisconnected).toBe('DEVICE_DISCONNECTED');
        expect(Object.values(EndpointEventTypeEnum)).toEqual([
            'DEVICE_CONNECTED',
            'DEVICE_DISCONNECTED'
        ]);
    });
});

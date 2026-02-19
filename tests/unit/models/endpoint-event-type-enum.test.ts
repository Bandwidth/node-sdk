import { EndpointEventTypeEnum } from '../../../models/endpoint-event-type-enum';

describe('EndpointEventTypeEnum', () => {
    test('should define the expected values', () => {
        expect(EndpointEventTypeEnum.DeviceConnected).toBe('DEVICE_CONNECTED');
        expect(EndpointEventTypeEnum.DeviceDisconnected).toBe('DEVICE_DISCONNECTED');
    });
});

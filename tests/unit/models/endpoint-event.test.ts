import { EndpointEvent } from '../../../models/endpoint-event';
import { EndpointEventTypeEnum } from '../../../models/endpoint-event-type-enum';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';

describe('EndpointEvent', () => {
    test('should create an endpoint event with all fields', () => {
        const device: Device = {
            deviceId: 'dev-1',
            deviceName: 'Chrome Browser',
            status: DeviceStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:31:00Z'
        };

        const event: EndpointEvent = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'test-event',
            eventTime: '2024-02-18T10:35:00Z',
            eventType: EndpointEventTypeEnum.DeviceConnected,
            device
        };

        expect(event.endpointId).toBe('ep-123456');
        expect(event.type).toBe(EndpointTypeEnum.Webrtc);
        expect(event.status).toBe(EndpointStatusEnum.Connected);
        expect(event.creationTimestamp).toBe('2024-02-18T10:30:00Z');
        expect(event.expirationTimestamp).toBe('2024-02-19T10:30:00Z');
        expect(event.tag).toBe('test-event');
        expect(event.eventTime).toBe('2024-02-18T10:35:00Z');
        expect(event.eventType).toBe(EndpointEventTypeEnum.DeviceConnected);
        expect(event.device?.deviceId).toBe('dev-1');
        expect(event.device?.deviceName).toBe('Chrome Browser');
        expect(event.device?.status).toBe(DeviceStatusEnum.Connected);
        expect(event.device?.creationTimestamp).toBe('2024-02-18T10:31:00Z');
    });
});

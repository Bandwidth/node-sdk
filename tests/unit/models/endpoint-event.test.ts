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
        expect(event.type).toBe('WEBRTC');
        expect(event.status).toBe('CONNECTED');
        expect(new Date(event.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(event.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(event.tag).toBe('test-event');
        expect(new Date(event.eventTime).toISOString()).toBe('2024-02-18T10:35:00.000Z');
        expect(event.eventType).toBe(EndpointEventTypeEnum.DeviceConnected);
        expect(event.device?.deviceId).toBe('dev-1');
        expect(event.device?.deviceName).toBe('Chrome Browser');
        expect(event.device?.status).toBe(DeviceStatusEnum.Connected);
        expect(event.device?.creationTimestamp).toBe('2024-02-18T10:31:00Z');
    });
});

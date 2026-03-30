import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';
import { Endpoint } from '../../../models/endpoint';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('Endpoint', () => {
    test('should support endpoint with all fields', () => {
        const devices: Device[] = [
            {
                deviceId: 'dev-1',
                deviceName: 'Chrome Browser',
                status: DeviceStatusEnum.Connected,
                creationTimestamp: '2024-02-18T10:31:00Z'
            },
            {
                deviceId: 'dev-2',
                status: DeviceStatusEnum.Disconnected,
                creationTimestamp: '2024-02-18T10:32:00Z'
            }
        ];

        const endpoint: Endpoint = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'endpoint-tag',
            devices
        };

        expect(endpoint.endpointId).toBe('ep-123456');
        expect(endpoint.type).toBe(EndpointTypeEnum.Webrtc);
        expect(endpoint.status).toBe(EndpointStatusEnum.Connected);
        expect(new Date(endpoint.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(endpoint.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(endpoint.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(endpoint.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(endpoint.tag).toBe('endpoint-tag');
        expect(endpoint.devices).toHaveLength(2);
        expect(endpoint.devices![0].deviceId).toBe('dev-1');
        expect(endpoint.devices![0].deviceName).toBe('Chrome Browser');
        expect(endpoint.devices![0].status).toBe(DeviceStatusEnum.Connected);
        expect(endpoint.devices![0].creationTimestamp).toBe('2024-02-18T10:31:00Z');
        expect(endpoint.devices![1].deviceId).toBe('dev-2');
        expect(endpoint.devices![1].status).toBe(DeviceStatusEnum.Disconnected);
        expect(endpoint.devices![1].creationTimestamp).toBe('2024-02-18T10:32:00Z');
    });
});

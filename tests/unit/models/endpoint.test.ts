import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';
import { Endpoint } from '../../../models/endpoint';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('Endpoint', () => {
    test('should support endpoint with devices', () => {
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
        expect(new Date(endpoint.creationTimestamp).toString()).not.toBe('Invalid Date');
        expect(new Date(endpoint.expirationTimestamp).toString()).not.toBe('Invalid Date');
        expect(endpoint.devices).toHaveLength(2);
        expect(endpoint.devices![0].deviceId).toBe('dev-1');
        expect(endpoint.devices![0].status).toBe(DeviceStatusEnum.Connected);
        expect(endpoint.devices![1].status).toBe(DeviceStatusEnum.Disconnected);
    });
});

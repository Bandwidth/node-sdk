import { CreateEndpointResponseData } from '../../../models/create-endpoint-response-data';
import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('CreateEndpointResponseData', () => {
    test('should include all endpoint fields and token', () => {
        const devices: Device[] = [
            {
                deviceId: 'dev-1',
                deviceName: 'Chrome Browser',
                status: DeviceStatusEnum.Connected,
                creationTimestamp: '2024-02-18T10:31:00Z'
            }
        ];

        const responseData: CreateEndpointResponseData = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            token: 'xxxxx.yyyyy.zzzzz',
            tag: 'endpoint-tag',
            devices
        };

        expect(responseData.endpointId).toBe('ep-123456');
        expect(responseData.type).toBe(EndpointTypeEnum.Webrtc);
        expect(responseData.status).toBe(EndpointStatusEnum.Connected);
        expect(new Date(responseData.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(responseData.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(responseData.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(responseData.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(responseData.token).toBe('xxxxx.yyyyy.zzzzz');
        expect(responseData.tag).toBe('endpoint-tag');
        expect(responseData.devices).toHaveLength(1);
        expect(responseData.devices![0].deviceId).toBe('dev-1');
        expect(responseData.devices![0].deviceName).toBe('Chrome Browser');
        expect(responseData.devices![0].status).toBe(DeviceStatusEnum.Connected);
        expect(responseData.devices![0].creationTimestamp).toBe('2024-02-18T10:31:00Z');
    });
});

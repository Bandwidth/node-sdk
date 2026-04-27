import { EndpointResponse } from '../../../models/endpoint-response';
import { Endpoint } from '../../../models/endpoint';
import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { BrtcLink } from '../../../models/brtc-link';
import { BrtcError } from '../../../models/brtc-error';
import { BrtcErrorSource } from '../../../models/brtc-error-source';

describe('EndpointResponse', () => {
    test('should create an endpoint response with all fields', () => {
        const link: BrtcLink = {
            href: 'http://api.example.com/endpoints/ep-123456',
            rel: 'self',
            method: 'GET'
        };

        const devices: Device[] = [
            {
                deviceId: 'dev-1',
                deviceName: 'Chrome Browser',
                status: DeviceStatusEnum.Connected,
                creationTimestamp: '2024-02-18T10:31:00Z'
            }
        ];

        const endpoint: Endpoint = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'test-endpoint',
            devices
        };

        const source: BrtcErrorSource = {
            parameter: 'endpointId',
            field: 'id',
            header: 'Authorization',
            reference: '/endpoints/ep-123456'
        };

        const error: BrtcError = {
            id: 'err-400',
            type: 'validation-error',
            description: 'Invalid endpoint configuration',
            code: '400',
            source
        };

        const response: EndpointResponse = {
            links: [link],
            data: endpoint,
            errors: [error]
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].href).toBe('http://api.example.com/endpoints/ep-123456');
        expect(response.links[0].rel).toBe('self');
        expect(response.links[0].method).toBe('GET');
        expect(response.data.endpointId).toBe('ep-123456');
        expect(response.data.type).toBe(EndpointTypeEnum.Webrtc);
        expect(response.data.status).toBe(EndpointStatusEnum.Connected);
        expect(new Date(response.data.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(response.data.expirationTimestamp).getFullYear()).toBe(2024);
        expect(response.data.tag).toBe('test-endpoint');
        expect(response.data.devices).toHaveLength(1);
        expect(response.data.devices![0].deviceId).toBe('dev-1');
        expect(response.data.devices![0].deviceName).toBe('Chrome Browser');
        expect(response.data.devices![0].status).toBe(DeviceStatusEnum.Connected);
        expect(response.data.devices![0].creationTimestamp).toBe('2024-02-18T10:31:00Z');
        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].id).toBe('err-400');
        expect(response.errors[0].type).toBe('validation-error');
        expect(response.errors[0].description).toBe('Invalid endpoint configuration');
        expect(response.errors[0].code).toBe('400');
        expect(response.errors[0].source?.parameter).toBe('endpointId');
        expect(response.errors[0].source?.field).toBe('id');
        expect(response.errors[0].source?.header).toBe('Authorization');
        expect(response.errors[0].source?.reference).toBe('/endpoints/ep-123456');
    });
});

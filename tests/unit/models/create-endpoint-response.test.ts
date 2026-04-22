import { CreateEndpointResponse } from '../../../models/create-endpoint-response';
import { CreateEndpointResponseData } from '../../../models/create-endpoint-response-data';
import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { BrtcLink } from '../../../models/brtc-link';
import { BrtcError } from '../../../models/brtc-error';
import { BrtcErrorSource } from '../../../models/brtc-error-source';

describe('CreateEndpointResponse', () => {
    test('should create an endpoint response with all fields', () => {
        const link: BrtcLink = {
            href: 'http://api.example.com/endpoints/ep-123456',
            rel: 'self',
            method: 'POST'
        };

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
            tag: 'webrtc-endpoint',
            devices
        };

        const source: BrtcErrorSource = {
            parameter: 'endpointId',
            field: 'id',
            header: 'Authorization',
            reference: '/endpoints'
        };

        const error: BrtcError = {
            id: 'err-400',
            type: 'validation-error',
            description: 'Missing required field: endpointId',
            code: '400',
            source
        };

        const response: CreateEndpointResponse = {
            links: [link],
            data: responseData,
            errors: [error]
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].href).toBe('http://api.example.com/endpoints/ep-123456');
        expect(response.links[0].rel).toBe('self');
        expect(response.links[0].method).toBe('POST');
        expect(response.data.endpointId).toBe('ep-123456');
        expect(response.data.type).toBe('WEBRTC');
        expect(response.data.status).toBe('CONNECTED');
        expect(response.data.token).toBe('xxxxx.yyyyy.zzzzz');
        expect(response.data.tag).toBe('webrtc-endpoint');
        expect(new Date(response.data.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(response.data.expirationTimestamp).getFullYear()).toBe(2024);
        expect(response.data.devices).toHaveLength(1);
        expect(response.data.devices![0].deviceId).toBe('dev-1');
        expect(response.data.devices![0].deviceName).toBe('Chrome Browser');
        expect(response.data.devices![0].status).toBe(DeviceStatusEnum.Connected);
        expect(response.data.devices![0].creationTimestamp).toBe('2024-02-18T10:31:00Z');
        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].id).toBe('err-400');
        expect(response.errors[0].type).toBe('validation-error');
        expect(response.errors[0].description).toContain('endpointId');
        expect(response.errors[0].code).toBe('400');
        expect(response.errors[0].source?.parameter).toBe('endpointId');
        expect(response.errors[0].source?.field).toBe('id');
        expect(response.errors[0].source?.header).toBe('Authorization');
        expect(response.errors[0].source?.reference).toBe('/endpoints');
    });
});

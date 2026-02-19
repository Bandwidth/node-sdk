import { CreateEndpointResponse } from '../../../models/create-endpoint-response';
import { CreateEndpointResponseData } from '../../../models/create-endpoint-response-data';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { Link } from '../../../models/link';
import { ModelError } from '../../../models/model-error';

describe('CreateEndpointResponse', () => {
    test('should create an endpoint response with successful data', () => {
        const link: Link = {
            rel: 'self',
            href: 'http://api.example.com/endpoints/ep-123456'
        };

        const responseData: CreateEndpointResponseData = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            token: 'xxxxx.yyyyy.zzzzz',
            tag: 'webrtc-endpoint'
        };

        const response: CreateEndpointResponse = {
            links: [link],
            data: responseData,
            errors: []
        };

        expect(response.links).toHaveLength(1);
        expect(response.data.endpointId).toBe('ep-123456');
        expect(response.data.type).toBe('WEBRTC');
        expect(response.data.status).toBe('CONNECTED');
        expect(response.data.token).toBe('xxxxx.yyyyy.zzzzz');
        expect(response.errors).toHaveLength(0);
    });

    test('should create an endpoint response with error', () => {
        const link: Link = {
            rel: 'documentation',
            href: 'http://api.example.com/docs/endpoints'
        };

        const responseData: CreateEndpointResponseData = {
            endpointId: '',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Disconnected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            token: 'invalid.token.value'
        };

        const error: ModelError = {
            code: 400,
            description: 'Missing required field: endpointId'
        };

        const response: CreateEndpointResponse = {
            links: [link],
            data: responseData,
            errors: [error]
        };

        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].description).toContain('endpointId');
    });
});

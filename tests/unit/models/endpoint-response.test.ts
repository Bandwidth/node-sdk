import { EndpointResponse } from '../../../models/endpoint-response';
import { Endpoints } from '../../../models/endpoints';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { Link } from '../../../models/link';
import { ModelError } from '../../../models/model-error';

describe('EndpointResponse', () => {
    test('should create an endpoint response with links and data', () => {
        const link: Link = {
            rel: 'self',
            href: 'http://api.example.com/endpoints/ep-123456'
        };

        const endpoint: Endpoints = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z'
        };

        const response: EndpointResponse = {
            links: [link],
            data: endpoint,
            errors: []
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].rel).toBe('self');
        expect(response.data.endpointId).toBe('ep-123456');
        expect(response.errors).toHaveLength(0);
    });

    test('should create an endpoint response with errors', () => {
        const link: Link = {
            rel: 'self',
            href: 'http://api.example.com/endpoints'
        };

        const endpoint: Endpoints = {
            endpointId: 'ep-789012',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Disconnected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z'
        };

        const error: ModelError = {
            code: 400,
            description: 'Invalid endpoint configuration'
        };

        const response: EndpointResponse = {
            links: [link],
            data: endpoint,
            errors: [error]
        };

        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].code).toBe(400);
        expect(response.errors[0].description).toBe('Invalid endpoint configuration');
    });
});

import { Endpoints } from '../../../models/endpoints';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('Endpoints', () => {
    test('should create an endpoints object with all required properties', () => {
        const endpoint: Endpoints = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z'
        };

        expect(endpoint.endpointId).toBe('ep-123456');
        expect(endpoint.type).toBe('WEBRTC');
        expect(endpoint.status).toBe('CONNECTED');
        expect(typeof endpoint.creationTimestamp).toBe('string');
        expect(typeof endpoint.expirationTimestamp).toBe('string');
    });

    test('should create an endpoints object with optional tag property', () => {
        const endpoint: Endpoints = {
            endpointId: 'ep-789012',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Disconnected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'test-endpoint'
        };

        expect(endpoint.tag).toBe('test-endpoint');
    });

    test('should allow endpoint with disconnected status', () => {
        const endpoint: Endpoints = {
            endpointId: 'ep-345678',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Disconnected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z'
        };

        expect(endpoint.status).toBe('DISCONNECTED');
    });
});

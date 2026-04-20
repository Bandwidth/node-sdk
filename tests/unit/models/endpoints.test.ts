import { Endpoints } from '../../../models/endpoints';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('Endpoints', () => {
    test('should create an endpoints object with all fields', () => {
        const endpoint: Endpoints = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'test-endpoint'
        };

        expect(endpoint.endpointId).toBe('ep-123456');
        expect(endpoint.type).toBe('WEBRTC');
        expect(endpoint.status).toBe('CONNECTED');
        expect(new Date(endpoint.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(endpoint.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(endpoint.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(endpoint.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(endpoint.tag).toBe('test-endpoint');
    });
});

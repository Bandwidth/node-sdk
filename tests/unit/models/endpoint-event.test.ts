import { EndpointEvent } from '../../../models/endpoint-event';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('EndpointEvent', () => {
    test('should create an endpoint event with all fields', () => {
        const event: EndpointEvent = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'test-event'
        };

        expect(event.endpointId).toBe('ep-123456');
        expect(event.type).toBe('WEBRTC');
        expect(event.status).toBe('CONNECTED');
        expect(new Date(event.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(event.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(event.tag).toBe('test-event');
    });
});

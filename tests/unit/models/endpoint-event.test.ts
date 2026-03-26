import { EndpointEvent } from '../../../models/endpoint-event';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('EndpointEvent', () => {
    test('should match endpoint event shape', () => {
        const event: EndpointEvent = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Disconnected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            tag: 'event-tag'
        };

        expect(event.endpointId).toBe('ep-123456');
        expect(event.type).toBe(EndpointTypeEnum.Webrtc);
        expect(event.status).toBe(EndpointStatusEnum.Disconnected);
        expect(new Date(event.creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(event.expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(event.expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(event.tag).toBe('event-tag');
    });
});

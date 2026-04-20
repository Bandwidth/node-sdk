import { ListEndpointsResponse } from '../../../models/list-endpoints-response';
import { Endpoints } from '../../../models/endpoints';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';
import { Link } from '../../../models/link';
import { Page } from '../../../models/page';
import { ModelError } from '../../../models/model-error';

describe('ListEndpointsResponse', () => {
    test('should create a list endpoints response with all fields', () => {
        const link: Link = {
            rel: 'self',
            href: 'http://api.example.com/endpoints?page=1'
        };

        const page: Page = {
            pageSize: 10,
            pageNumber: 1,
            totalPages: 5,
            totalElements: 47
        };

        const endpoints: Endpoints[] = [
            {
                endpointId: 'ep-001',
                type: EndpointTypeEnum.Webrtc,
                status: EndpointStatusEnum.Connected,
                creationTimestamp: '2024-02-18T10:30:00Z',
                expirationTimestamp: '2024-02-19T10:30:00Z',
                tag: 'primary-endpoint'
            },
            {
                endpointId: 'ep-002',
                type: EndpointTypeEnum.Webrtc,
                status: EndpointStatusEnum.Disconnected,
                creationTimestamp: '2024-02-18T10:30:00Z',
                expirationTimestamp: '2024-02-19T10:30:00Z'
            }
        ];

        const error: ModelError = {
            code: 500,
            description: 'Internal server error'
        };

        const response: ListEndpointsResponse = {
            links: [link],
            page: page,
            data: endpoints,
            errors: [error]
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].rel).toBe('self');
        expect(response.links[0].href).toBe('http://api.example.com/endpoints?page=1');
        expect(response.page).toBeDefined();
        expect(response.page?.pageSize).toBe(10);
        expect(response.page?.pageNumber).toBe(1);
        expect(response.page?.totalPages).toBe(5);
        expect(response.page?.totalElements).toBe(47);
        expect(response.data).toHaveLength(2);
        expect(response.data[0].endpointId).toBe('ep-001');
        expect(response.data[0].tag).toBe('primary-endpoint');
        expect(response.data[1].endpointId).toBe('ep-002');
        expect(response.data[1].type).toBe(EndpointTypeEnum.Webrtc);
        expect(response.data[1].status).toBe(EndpointStatusEnum.Disconnected);
        expect(new Date(response.data[1].creationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(response.data[1].creationTimestamp).toISOString()).toBe('2024-02-18T10:30:00.000Z');
        expect(new Date(response.data[1].expirationTimestamp).getFullYear()).toBe(2024);
        expect(new Date(response.data[1].expirationTimestamp).toISOString()).toBe('2024-02-19T10:30:00.000Z');
        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].code).toBe(500);
        expect(response.errors[0].description).toBe('Internal server error');
    });
});

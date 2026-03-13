import { CreateEndpointResponseData } from '../../../models/create-endpoint-response-data';
import { EndpointStatusEnum } from '../../../models/endpoint-status-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('CreateEndpointResponseData', () => {
    test('should include endpoint fields and token', () => {
        const responseData: CreateEndpointResponseData = {
            endpointId: 'ep-123456',
            type: EndpointTypeEnum.Webrtc,
            status: EndpointStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z',
            expirationTimestamp: '2024-02-19T10:30:00Z',
            token: 'xxxxx.yyyyy.zzzzz',
            tag: 'endpoint-tag'
        };

        expect(responseData.endpointId).toBe('ep-123456');
        expect(responseData.type).toBe(EndpointTypeEnum.Webrtc);
        expect(responseData.status).toBe(EndpointStatusEnum.Connected);
        expect(new Date(responseData.creationTimestamp).toString()).not.toBe('Invalid Date');
        expect(new Date(responseData.expirationTimestamp).toString()).not.toBe('Invalid Date');
        expect(responseData.token).toBe('xxxxx.yyyyy.zzzzz');
        expect(responseData.tag).toBe('endpoint-tag');
    });
});

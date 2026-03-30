//@ts-nocheck
import { EndpointsApi } from '../../../api';
import { Configuration } from '../../../configuration';
import { CreateWebRtcConnectionRequest, EndpointDirectionEnum, EndpointStatusEnum, EndpointTypeEnum } from '../../../models';

describe('EndpointsApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const endpointsApi = new EndpointsApi(config);

    const accountId = '9900000';
    const endpointId = 'ep-123456';

    describe('createEndpoint', () => {
        test('should create endpoint', async () => {
            const createEndpointBody: CreateWebRtcConnectionRequest = {
                type: EndpointTypeEnum.Webrtc,
                direction: EndpointDirectionEnum.Bidirectional
            };

            const { status, data } = await endpointsApi.createEndpoint(accountId, createEndpointBody);

            expect(status).toEqual(201);
            expect(data.links).toBeInstanceOf(Array);
            expect(data.links.length).toBeGreaterThan(0);
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();

            expect(data.data.endpointId).toBeString();
            expect(data.data.type).toBeOneOf(Object.values(EndpointTypeEnum));
            expect(data.data.status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(data.data.creationTimestamp).toBeDateString();
            expect(data.data.expirationTimestamp).toBeDateString();
            expect(data.data.token).toBeString();

            expect(data.errors).toBeInstanceOf(Array);
            expect(data.errors).toHaveLength(0);
        });
    });

    describe('listEndpoints', () => {
        test('should list endpoints', async () => {
            const { status, data } = await endpointsApi.listEndpoints(accountId, EndpointTypeEnum.Webrtc, EndpointStatusEnum.Connected, undefined, 10);

            expect(status).toEqual(200);
            expect(data.links).toBeInstanceOf(Array);
            expect(data.links.length).toBeGreaterThan(0);
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();
            expect(data.data).toBeInstanceOf(Array);
            expect(data.page).toBeDefined();
            expect(data.page.pageSize).toBeNumber();
            expect(data.page.pageNumber).toBeNumber();
            expect(data.page.totalPages).toBeNumber();
            expect(data.page.totalElements).toBeNumber();
            expect(data.errors).toBeInstanceOf(Array);

            expect(data.data.length).toBeGreaterThan(0);
            expect(data.data[0].endpointId).toBeString();
            expect(data.data[0].type).toBeOneOf(Object.values(EndpointTypeEnum));
            expect(data.data[0].status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(data.data[0].creationTimestamp).toBeDateString();
            expect(data.data[0].expirationTimestamp).toBeDateString();
        });
    });

    describe('getEndpoint', () => {
        test('should get endpoint', async () => {
            const { status, data } = await endpointsApi.getEndpoint(accountId, endpointId);

            expect(status).toEqual(200);
            expect(data.links).toBeInstanceOf(Array);
            expect(data.links.length).toBeGreaterThan(0);
            expect(data.links[0].rel).toBeString();
            expect(data.links[0].href).toBeString();

            expect(data.data.endpointId).toBeString();
            expect(data.data.type).toBeOneOf(Object.values(EndpointTypeEnum));
            expect(data.data.status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(data.data.creationTimestamp).toBeDateString();
            expect(data.data.expirationTimestamp).toBeDateString();

            expect(data.errors).toBeInstanceOf(Array);
            expect(data.errors).toHaveLength(0);
        });
    });

    describe('deleteEndpoint', () => {
        test('should delete endpoint', async () => {
            const { status } = await endpointsApi.deleteEndpoint(accountId, endpointId);

            expect(status).toEqual(204);
        });
    });
});

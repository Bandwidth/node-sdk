//@ts-nocheck
import { EndpointsApi } from '../../api';
import { Configuration } from '../../configuration';
import { CreateWebRtcConnectionRequest, EndpointDirectionEnum, EndpointStatusEnum, EndpointTypeEnum } from '../../models';

describe('EndpointsApi', () => {
    const config = new Configuration({
        clientId: BW_CLIENT_ID,
        clientSecret: BW_CLIENT_SECRET
    });
    const endpointsApi = new EndpointsApi(config);

    let endpointId: string;

    describe('endpoint lifecycle', () => {
        test('should create a new endpoint', async () => {
            const endpointBody: CreateWebRtcConnectionRequest = {
                type: EndpointTypeEnum.Webrtc,
                direction: EndpointDirectionEnum.Bidirectional
            };

            const { status, data } = await endpointsApi.createEndpoint(BW_ACCOUNT_ID, endpointBody);

            expect(status).toEqual(201);
            expect(data.links).toBeInstanceOf(Array);

            expect(data.data).toBeDefined();
            expect(data.data.endpointId).toBeDefined();
            expect(data.data.endpointId).toBeString();
            expect(data.data.token).toBeDefined();
            expect(data.data.token).toBeString();
            expect(data.data.type).toEqual(EndpointTypeEnum.Webrtc);
            expect(data.data.status).toBeDefined();
            expect(data.data.status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(data.data.creationTimestamp).toBeDefined();
            expect(data.data.creationTimestamp).toBeDateString();
            expect(data.data.expirationTimestamp).toBeDefined();
            expect(data.data.expirationTimestamp).toBeDateString();
            expect(data.errors).toBeInstanceOf(Array);
            expect(data.errors).toHaveLength(0);

            endpointId = data.data.endpointId;
        });

        test('should list endpoints for the account', async () => {
            const { status, data } = await endpointsApi.listEndpoints(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.links).toBeInstanceOf(Array);
            expect(data.data).toBeDefined();
            expect(data.data).toBeInstanceOf(Array);
            expect(data.page).toBeDefined();
            expect(data.page.totalElements).toBeDefined();
            expect(data.errors).toBeInstanceOf(Array);

            const createdEndpoint = data.data.find((item) => item.endpointId === endpointId);
            expect(createdEndpoint).toBeDefined();
            expect(createdEndpoint!.type).toEqual(EndpointTypeEnum.Webrtc);
            expect(createdEndpoint!.status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(createdEndpoint!.creationTimestamp).toBeDateString();
            expect(createdEndpoint!.expirationTimestamp).toBeDateString();
        });

        test('should list endpoints filtered by type', async () => {
            const { status, data } = await endpointsApi.listEndpoints(BW_ACCOUNT_ID, EndpointTypeEnum.Webrtc);

            expect(status).toEqual(200);
            expect(data.data).toBeInstanceOf(Array);
            expect(data.errors).toBeInstanceOf(Array);
            if (data.data.length > 0) {
                expect(data.data.every((item) => item.type === EndpointTypeEnum.Webrtc)).toEqual(true);
            }
        });

        test('should retrieve details of a specific endpoint', async () => {
            const { status, data } = await endpointsApi.getEndpoint(BW_ACCOUNT_ID, endpointId);

            expect(status).toEqual(200);
            expect(data.links).toBeInstanceOf(Array);
            expect(data.errors).toBeInstanceOf(Array);
            expect(data.errors).toHaveLength(0);
            expect(data.data.endpointId).toEqual(endpointId);
            expect(data.data.type).toEqual(EndpointTypeEnum.Webrtc);
            expect(data.data.status).toBeDefined();
            expect(data.data.status).toBeOneOf(Object.values(EndpointStatusEnum));
            expect(data.data.creationTimestamp).toBeDefined();
            expect(data.data.creationTimestamp).toBeDateString();
            expect(data.data.expirationTimestamp).toBeDefined();
            expect(data.data.expirationTimestamp).toBeDateString();
        });

        // TODO: Re-enable once we implement the updateEndpointBxml endpoint in the endpoint service
        // test('should update endpoint BXML', async () => {
        //     const bxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><SpeakSentence>Test endpoint BXML</SpeakSentence></Bxml>';
        //     const { status } = await endpointsApi.updateEndpointBxml(BW_ACCOUNT_ID, endpointId, bxml);
        //     expect(status).toEqual(204);
        // });

        // test('should update endpoint BXML with different content', async () => {
        //     const bxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><Pause duration="2"/></Bxml>';
        //     const { status } = await endpointsApi.updateEndpointBxml(BW_ACCOUNT_ID, endpointId, bxml);
        //     expect(status).toEqual(204);
        // });

        test('should delete an endpoint', async () => {
            const { status } = await endpointsApi.deleteEndpoint(BW_ACCOUNT_ID, endpointId);

            expect(status).toEqual(204);
        });
    });

    describe('HTTP Errors', () => {
        test('401 - Unauthorized with invalid credentials', async () => {
            const configBad = new Configuration({
                clientId: 'invalid-client-id',
                clientSecret: 'invalid-client-secret'
            });
            const endpointsApiBad = new EndpointsApi(configBad);

            try {
                await endpointsApiBad.listEndpoints(BW_ACCOUNT_ID);
                fail('Expected error to be thrown');
            } catch (e) {
                expect(e.response.status).toEqual(401);
            }
        });

        test('404 - Not Found with invalid account', async () => {
            const configBad = new Configuration({
                clientId: BW_CLIENT_ID,
                clientSecret: BW_CLIENT_SECRET
            });
            const endpointsApiBad = new EndpointsApi(configBad);

            try {
                await endpointsApiBad.listEndpoints('invalid-account-id');
                fail('Expected error to be thrown');
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
        });

        test('404 - Not Found for non-existent endpoint', async () => {
            try {
                await endpointsApi.getEndpoint(BW_ACCOUNT_ID, 'does-not-exist');
                fail('Expected error to be thrown');
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
        });
    });
});

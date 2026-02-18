//@ts-nocheck
import { EndpointsApi } from '../../api';
import { Configuration } from '../../configuration';
import { CreateWebRtcConnectionRequest, EndpointStatusEnum, EndpointTypeEnum } from '../../models';

describe('EndpointsApi', () => {
    const config = new Configuration({
        clientId: BW_CLIENT_ID,
        clientSecret: BW_CLIENT_SECRET
    });
    const endpointsApi = new EndpointsApi(config);

    let endpointId: string;
    let createdEndpoints: string[] = [];

    afterAll(async () => {
        // Cleanup: Delete all created endpoints
        for (const id of createdEndpoints) {
            try {
                await endpointsApi.deleteEndpoint(BW_ACCOUNT_ID, id);
            } catch (e) {
                // Endpoint may have already been deleted
            }
        }
    });

    describe('createEndpoint', () => {
        test('should create a new endpoint', async () => {
            const endpointBody: CreateWebRtcConnectionRequest = {
                name: 'Test Endpoint',
                displayName: 'Test WebRTC Endpoint'
            };

            const { status, data } = await endpointsApi.createEndpoint(BW_ACCOUNT_ID, endpointBody);

            expect(status).toEqual(201);
            expect(data.endpointId).toBeDefined();
            expect(data.type).toEqual(EndpointTypeEnum.Webrtc);
            expect(data.status).toEqual(EndpointStatusEnum.Connected);
            expect(data.creationTimestamp).toBeDefined();

            endpointId = data.endpointId;
            createdEndpoints.push(endpointId);
        });

        test('should create multiple endpoints', async () => {
            const endpointBody1: CreateWebRtcConnectionRequest = {
                name: 'Test Endpoint 1',
                displayName: 'Test WebRTC Endpoint 1'
            };

            const endpointBody2: CreateWebRtcConnectionRequest = {
                name: 'Test Endpoint 2',
                displayName: 'Test WebRTC Endpoint 2'
            };

            const { status: status1, data: data1 } = await endpointsApi.createEndpoint(BW_ACCOUNT_ID, endpointBody1);
            const { status: status2, data: data2 } = await endpointsApi.createEndpoint(BW_ACCOUNT_ID, endpointBody2);

            expect(status1).toEqual(201);
            expect(status2).toEqual(201);
            expect(data1.endpointId).toBeDefined();
            expect(data2.endpointId).toBeDefined();
            expect(data1.endpointId).not.toEqual(data2.endpointId);

            createdEndpoints.push(data1.endpointId);
            createdEndpoints.push(data2.endpointId);
        });
    });

    describe('listEndpoints', () => {
        test('should list endpoints for the account', async () => {
            const { status, data } = await endpointsApi.listEndpoints(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data.data).toBeDefined();
            expect(data.data).toBeInstanceOf(Array);
            expect(data.page).toBeDefined();
            expect(data.page.totalElements).toBeDefined();
        });

        test('should list endpoints with type filter', async () => {
            const { status, data } = await endpointsApi.listEndpoints(
                BW_ACCOUNT_ID,
                EndpointTypeEnum.Webrtc
            );

            expect(status).toEqual(200);
            expect(data.data).toBeInstanceOf(Array);
            if (data.data.length > 0) {
                expect(data.data[0].type).toEqual(EndpointTypeEnum.Webrtc);
            }
        });

        test('should list endpoints with status filter', async () => {
            const { status, data } = await endpointsApi.listEndpoints(
                BW_ACCOUNT_ID,
                undefined,
                EndpointStatusEnum.Connected
            );

            expect(status).toEqual(200);
            expect(data.data).toBeInstanceOf(Array);
            if (data.data.length > 0) {
                expect(data.data[0].status).toEqual(EndpointStatusEnum.Connected);
            }
        });

        test('should list endpoints with limit', async () => {
            const { status, data } = await endpointsApi.listEndpoints(
                BW_ACCOUNT_ID,
                undefined,
                undefined,
                undefined,
                5
            );

            expect(status).toEqual(200);
            expect(data.data).toBeInstanceOf(Array);
            expect(data.data.length).toBeLessThanOrEqual(5);
        });
    });

    describe('getEndpoint', () => {
        test('should retrieve details of a specific endpoint', async () => {
            const { status, data } = await endpointsApi.getEndpoint(BW_ACCOUNT_ID, endpointId);

            expect(status).toEqual(200);
            expect(data.endpointId).toEqual(endpointId);
            expect(data.type).toEqual(EndpointTypeEnum.Webrtc);
            expect(data.status).toBeDefined();
            expect(data.creationTimestamp).toBeDefined();
        });
    });

    describe('updateEndpointBxml', () => {
        test('should update endpoint BXML', async () => {
            const bxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><SpeakSentence>Test endpoint BXML</SpeakSentence></Bxml>';

            const { status } = await endpointsApi.updateEndpointBxml(BW_ACCOUNT_ID, endpointId, bxml);

            expect(status).toEqual(204);
        });

        test('should update endpoint BXML with different content', async () => {
            const bxml = '<?xml version="1.0" encoding="UTF-8"?><Bxml><Pause duration="2"/></Bxml>';

            const { status } = await endpointsApi.updateEndpointBxml(BW_ACCOUNT_ID, endpointId, bxml);

            expect(status).toEqual(204);
        });
    });

    describe('deleteEndpoint', () => {
        test('should delete an endpoint', async () => {
            // Create an endpoint to delete
            const endpointBody: CreateWebRtcConnectionRequest = {
                name: 'Endpoint to Delete',
                displayName: 'Test WebRTC Endpoint to Delete'
            };

            const { data: createdData } = await endpointsApi.createEndpoint(BW_ACCOUNT_ID, endpointBody);
            const idToDelete = createdData.endpointId;

            // Delete the endpoint
            const { status } = await endpointsApi.deleteEndpoint(BW_ACCOUNT_ID, idToDelete);

            expect(status).toEqual(204);
        });

        test('should fail to delete non-existent endpoint', async () => {
            try {
                await endpointsApi.deleteEndpoint(BW_ACCOUNT_ID, 'non-existent-endpoint-id');
                fail('Expected error to be thrown');
            } catch (e) {
                expect(e.response.status).toEqual(404);
            }
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

        test('403 - Forbidden with unauthorized account', async () => {
            const configBad = new Configuration({
                clientId: BW_CLIENT_ID,
                clientSecret: BW_CLIENT_SECRET
            });
            const endpointsApiBad = new EndpointsApi(configBad);

            try {
                await endpointsApiBad.listEndpoints('invalid-account-id');
                fail('Expected error to be thrown');
            } catch (e) {
                expect(e.response.status).toEqual(403);
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

import { BrtcErrorResponse } from '../../../models/brtc-error-response';
import { BrtcLink } from '../../../models/brtc-link';
import { BrtcError } from '../../../models/brtc-error';
import { BrtcErrorSource } from '../../../models/brtc-error-source';

describe('BrtcErrorResponse', () => {
    test('should support full error response shape', () => {
        const source: BrtcErrorSource = {
            parameter: 'endpointId',
            field: 'id',
            header: 'Authorization',
            reference: '/endpoints/ep-123'
        };

        const link: BrtcLink = {
            href: 'http://api.example.com/endpoints',
            rel: 'self',
            method: 'GET'
        };

        const error: BrtcError = {
            id: 'err-001',
            type: 'not-found',
            description: 'Endpoint not found',
            code: '404',
            source
        };

        const response: BrtcErrorResponse = {
            links: [link],
            data: null,
            errors: [error]
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].href).toBe('http://api.example.com/endpoints');
        expect(response.links[0].rel).toBe('self');
        expect(response.links[0].method).toBe('GET');
        expect(response.data).toBeNull();
        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].id).toBe('err-001');
        expect(response.errors[0].type).toBe('not-found');
        expect(response.errors[0].description).toBe('Endpoint not found');
        expect(response.errors[0].code).toBe('404');
        expect(response.errors[0].source?.parameter).toBe('endpointId');
        expect(response.errors[0].source?.field).toBe('id');
        expect(response.errors[0].source?.header).toBe('Authorization');
        expect(response.errors[0].source?.reference).toBe('/endpoints/ep-123');
    });
});

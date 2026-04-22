import { BrtcError } from '../../../models/brtc-error';
import { BrtcErrorSource } from '../../../models/brtc-error-source';

describe('BrtcError', () => {
    test('should support full BrtcError shape', () => {
        const source: BrtcErrorSource = {
            parameter: 'endpointId',
            field: 'id',
            header: 'Authorization',
            reference: '/endpoints/ep-123'
        };

        const error: BrtcError = {
            id: 'err-001',
            type: 'not-found',
            description: 'Endpoint not found',
            code: '404',
            source
        };

        expect(error.id).toBe('err-001');
        expect(error.type).toBe('not-found');
        expect(error.description).toBe('Endpoint not found');
        expect(error.code).toBe('404');
        expect(error.source?.parameter).toBe('endpointId');
        expect(error.source?.field).toBe('id');
        expect(error.source?.header).toBe('Authorization');
        expect(error.source?.reference).toBe('/endpoints/ep-123');
    });
});

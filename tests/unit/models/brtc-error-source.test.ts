import { BrtcErrorSource } from '../../../models/brtc-error-source';

describe('BrtcErrorSource', () => {
    test('should support full BrtcErrorSource shape', () => {
        const source: BrtcErrorSource = {
            parameter: 'endpointId',
            field: 'id',
            header: 'Authorization',
            reference: '/endpoints/ep-123'
        };

        expect(source.parameter).toBe('endpointId');
        expect(source.field).toBe('id');
        expect(source.header).toBe('Authorization');
        expect(source.reference).toBe('/endpoints/ep-123');
    });
});

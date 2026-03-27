import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('EndpointTypeEnum', () => {
    test('should define all expected enum values', () => {
        expect(EndpointTypeEnum.Webrtc).toBe('WEBRTC');
        expect(Object.values(EndpointTypeEnum)).toEqual([
            'WEBRTC'
        ]);
    });
});

import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('EndpointTypeEnum', () => {
    test('should define the expected values', () => {
        expect(EndpointTypeEnum.Webrtc).toBe('WEBRTC');
    });
});

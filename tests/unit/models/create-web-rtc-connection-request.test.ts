import { CreateWebRtcConnectionRequest } from '../../../models/create-web-rtc-connection-request';
import { EndpointDirectionEnum } from '../../../models/endpoint-direction-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('CreateWebRtcConnectionRequest', () => {
    test('should support full request shape', () => {
        const request: CreateWebRtcConnectionRequest = {
            type: EndpointTypeEnum.Webrtc,
            direction: EndpointDirectionEnum.Bidirectional,
            eventCallbackUrl: 'https://example.com/callback',
            eventFallbackUrl: 'https://example.com/fallback',
            tag: 'webrtc-test'
        };

        expect(request.type).toBe(EndpointTypeEnum.Webrtc);
        expect(request.direction).toBe(EndpointDirectionEnum.Bidirectional);
        expect(request.eventCallbackUrl).toBe('https://example.com/callback');
        expect(request.eventFallbackUrl).toBe('https://example.com/fallback');
        expect(request.tag).toBe('webrtc-test');
    });
});

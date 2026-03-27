import { CreateEndpointRequestBase } from '../../../models/create-endpoint-request-base';
import { EndpointDirectionEnum } from '../../../models/endpoint-direction-enum';
import { EndpointTypeEnum } from '../../../models/endpoint-type-enum';

describe('CreateEndpointRequestBase', () => {
    test('should support full request serialization shape', () => {
        const request: CreateEndpointRequestBase = {
            type: EndpointTypeEnum.Webrtc,
            direction: EndpointDirectionEnum.Bidirectional,
            eventCallbackUrl: 'https://example.com/callback',
            eventFallbackUrl: 'https://example.com/fallback',
            tag: 'sdk-test-tag'
        };

        expect(request.type).toBe(EndpointTypeEnum.Webrtc);
        expect(request.direction).toBe(EndpointDirectionEnum.Bidirectional);
        expect(request.eventCallbackUrl).toBe('https://example.com/callback');
        expect(request.eventFallbackUrl).toBe('https://example.com/fallback');
        expect(request.tag).toBe('sdk-test-tag');
    });
});

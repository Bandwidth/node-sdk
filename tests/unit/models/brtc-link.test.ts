import { BrtcLink } from '../../../models/brtc-link';

describe('BrtcLink', () => {
    test('should support full BrtcLink shape', () => {
        const link: BrtcLink = {
            href: 'http://api.example.com/endpoints',
            rel: 'self',
            method: 'GET'
        };

        expect(link.href).toBe('http://api.example.com/endpoints');
        expect(link.rel).toBe('self');
        expect(link.method).toBe('GET');
    });
});

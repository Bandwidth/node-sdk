import { SipConnectionMetadata } from '../../../models/sip-connection-metadata';
import { SipCredentials } from '../../../models/sip-credentials';

describe('SipConnectionMetadata', () => {
    test('should support full SIP connection metadata shape', () => {
        const credentials: SipCredentials = {
            username: 'sip-user',
            password: 'sip-pass'
        };

        const metadata: SipConnectionMetadata = {
            ipAddress: '192.168.1.100',
            port: 5060,
            credentials,
            uuiHeader: 'test-uui-header'
        };

        expect(metadata.ipAddress).toBe('192.168.1.100');
        expect(metadata.port).toBe(5060);
        expect(metadata.credentials).toBeDefined();
        expect(metadata.credentials!.username).toBe('sip-user');
        expect(metadata.credentials!.password).toBe('sip-pass');
        expect(metadata.uuiHeader).toBe('test-uui-header');
    });
});

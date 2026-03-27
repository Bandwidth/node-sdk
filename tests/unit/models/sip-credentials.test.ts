import { SipCredentials } from '../../../models/sip-credentials';

describe('SipCredentials', () => {
    test('should support full SIP credentials shape', () => {
        const credentials: SipCredentials = {
            username: 'sip-user',
            password: 'sip-pass'
        };

        expect(credentials.username).toBe('sip-user');
        expect(credentials.password).toBe('sip-pass');
    });
});

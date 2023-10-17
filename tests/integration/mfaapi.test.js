const { MFAApi } = require('../../api/mfaapi');
const { Configuration } = require('../../configuration');

describe('MFAApi', () => {
    const config = new Configuration({username: BW_USERNAME, password: BW_PASSWORD});
    const mfaApi = new MFAApi(config);

    const message = 'Your temporary {NAME} {SCOPE} code is {CODE}';
    const digits = 6;

    describe('generateMessagingCode', () => {
        test('should generate messaging code', async () => {
            const codeRequest = {
                to: USER_NUMBER,
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                message: message,
                digits: digits
            };

            const { status, data } = await mfaApi.generateMessagingCode(BW_ACCOUNT_ID, codeRequest);

            expect(status).toEqual(200);
            expect(data.messageId).toHaveLength(29);
        });
    });

    describe('generateVoiceCode', () => {
        test('should generate voice code', async () => {
            const codeRequest = {
                to: USER_NUMBER,
                from: BW_NUMBER,
                applicationId: BW_VOICE_APPLICATION_ID,
                message: message,
                digits: digits
            };

            const { status, data } = await mfaApi.generateVoiceCode(BW_ACCOUNT_ID, codeRequest);

            expect(status).toEqual(200);
            expect(data.callId).toHaveLength(47);
        });
    });

    describe('verifyCode', () => {
        test('should verify code', async () => {
            const verifyRequest = {
                to: `+1000${Math.floor(Math.random() * 10000000)}`,
                scope: '2FA',
                expirationTimeInMinutes: 3,
                code: '12345'
            };

            const { status, data } = await mfaApi.verifyCode(BW_ACCOUNT_ID, verifyRequest);

            expect(status).toEqual(200);
            expect(data.valid).toEqual(false);
        });
    });

    describe('HTTP Errors', () => {
        test('400', async () => {
            const codeRequest = {
                to: USER_NUMBER,
                from: BW_NUMBER,
                applicationId: 'not-an-app-id',
                message: message,
                digits: digits
            };

            try {
                await mfaApi.generateMessagingCode(BW_ACCOUNT_ID, codeRequest);
            } catch (e) {
                expect(e.response.status).toEqual(400);
            }
        });

        test('403', async () => {
            const configBad = new Configuration({username: UNAUTHORIZED_USERNAME, password: UNAUTHORIZED_PASSWORD});
            const mfaApiBad = new MFAApi(configBad);

            const codeRequest = {
                to: USER_NUMBER,
                from: BW_NUMBER,
                applicationId: BW_MESSAGING_APPLICATION_ID,
                message: message,
                digits: digits
            };

            try {
                await mfaApiBad.generateMessagingCode(BW_ACCOUNT_ID, codeRequest);
            } catch (e) {
                expect(e.response.status).toEqual(403);
            }
        });
    });
});

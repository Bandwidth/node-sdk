/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["jest-extended/all"],
    globals: {
        'BW_USERNAME': process.env.BW_USERNAME,
        'BW_PASSWORD': process.env.BW_PASSWORD,
        'BW_CLIENT_ID': process.env.BW_CLIENT_ID,
        'BW_CLIENT_SECRET': process.env.BW_CLIENT_SECRET,
        'BW_ACCOUNT_ID': process.env.BW_ACCOUNT_ID,
        'BW_NUMBER': process.env.BW_NUMBER,
        'USER_NUMBER': process.env.USER_NUMBER,
        'BW_VOICE_APPLICATION_ID': process.env.BW_VOICE_APPLICATION_ID,
        'BW_MESSAGING_APPLICATION_ID': process.env.BW_MESSAGING_APPLICATION_ID,
        'BASE_CALLBACK_URL': process.env.BASE_CALLBACK_URL,
        'OPERATING_SYSTEM': process.env.OPERATING_SYSTEM,
        'MANTECA_APPLICATION_ID': process.env.MANTECA_APPLICATION_ID,
        'MANTECA_IDLE_NUMBER': process.env.MANTECA_IDLE_NUMBER,
        'MANTECA_ACTIVE_NUMBER': process.env.MANTECA_ACTIVE_NUMBER,
        'MANTECA_BASE_URL': process.env.MANTECA_BASE_URL,
        'FORBIDDEN_USERNAME': process.env.BW_USERNAME_FORBIDDEN,
        'FORBIDDEN_PASSWORD': process.env.BW_PASSWORD_FORBIDDEN,
        'UNAUTHORIZED_USERNAME': 'bad_username',
        'UNAUTHORIZED_PASSWORD': 'bad_password',
        'MAX_RETRIES': 40,
        'SLEEP_TIME_S': 3
    }
};

/* Helper functions for voice calls 
 * These are reused in multiple tests
*/

const axios = require('axios');

const sleep = (s) => {
    return new Promise(r => setTimeout(r, s * 1000));
};

const setupManteca = async (type) => {
    const mantecaBody = {
        os: OPERATING_SYSTEM,
        language: 'nodejs',
        type: type
    };

    const mantecaTestUrl = `${MANTECA_BASE_URL}/tests`;
    const mantecaHeader = { 'Content-Type': 'application/json' };

    try {
        const { data } = await axios.post(mantecaTestUrl, JSON.stringify(mantecaBody), mantecaHeader);
        return data;
    } catch (e) {
        console.log(e);
    }
};

const createMantecaCall = async (callsApi, tag = 'nodejs', answerPath = '/bxml/pause') => {
    const mantecaCallBody = {
        applicationId: MANTECA_APPLICATION_ID,
        to: MANTECA_IDLE_NUMBER,
        from: MANTECA_ACTIVE_NUMBER,
        answerUrl: `${MANTECA_BASE_URL}${answerPath}`,
        tag: tag
    };
    
    const { data } = await callsApi.createCall(BW_ACCOUNT_ID, mantecaCallBody);
    return data.callId;
};

const getMantecaTestStatus = async (testId) => {
    mantecaStatusUrl = `${MANTECA_BASE_URL}/tests/${testId}`;
    const { data } = await axios.get(mantecaStatusUrl);
    return data;
};

const cleanupCalls = async (calls, callsApi) => {
    let attempts = 0;

    while (calls.length > 0 && attempts < 10) {
        for (let i = calls.length - 1; i >= 0; i--) {
            if (await callEnded(calls[i], callsApi)) { calls.splice(i, 1); }
        }
        sleep(SLEEP_TIME_S);
        attempts += 1;
    }

    if (calls.length > 0) {
        errorMessage = `Failed to terminate all calls: ${calls.toString()}`;
        throw new Error(errorMessage);
    }
};

const callEnded = async (callId, callsApi) => {
    try {
        const { data } = await callsApi.getCallState(BW_ACCOUNT_ID, callId);
        if (data.state != 'disconnected') {
            try {
                callsApi.updateCall(BW_ACCOUNT_ID, callId, { state: 'completed' });
                return true;
            } catch { return false; }
        } else { return true; }
    } catch { return false; }
}

module.exports = {
    sleep,
    setupManteca,
    createMantecaCall,
    getMantecaTestStatus,
    cleanupCalls
};

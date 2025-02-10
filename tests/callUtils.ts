/* Helper functions for voice calls 
 * These are reused in multiple tests
*/
// @ts-nocheck
import axios, { AxiosRequestConfig } from 'axios';
import { CallsApi } from '../api';

export const sleep = (s) => {
    return new Promise(r => setTimeout(r, s * 1000));
};

export const setupManteca = async (type: string) => {
    const mantecaBody = {
        os: OPERATING_SYSTEM,
        language: 'nodejs',
        type: type
    };

    const mantecaTestUrl = `${MANTECA_BASE_URL}/tests`;
    const mantecaHeader: AxiosRequestConfig = { headers: {'Content-Type': 'application/json' } };

    try {
        const { data } = await axios.post(mantecaTestUrl, JSON.stringify(mantecaBody), mantecaHeader);
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const createMantecaCall = async (callsApi: CallsApi, tag = 'nodejs', answerPath = '/bxml/pause') => {
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

export const getMantecaTestStatus = async (testId: string) => {
    const mantecaStatusUrl = `${MANTECA_BASE_URL}/tests/${testId}`;
    const { data } = await axios.get(mantecaStatusUrl);
    return data;
};

export const cleanupCalls = async (calls: string[], callsApi: CallsApi) => {
    let attempts = 0;

    while (calls.length > 0 && attempts < 10) {
        for (let i = calls.length - 1; i >= 0; i--) {
            if (await callEnded(calls[i], callsApi)) { calls.splice(i, 1); }
        }
        await sleep(SLEEP_TIME_S);
        attempts += 1;
    }

    if (calls.length > 0) {
        const errorMessage = `Failed to terminate all calls: ${calls.toString()}`;
        throw new Error(errorMessage);
    }
};

const callEnded = async (callId: string, callsApi: CallsApi) => {
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

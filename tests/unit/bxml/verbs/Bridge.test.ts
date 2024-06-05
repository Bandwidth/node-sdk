import { Verb } from '../../../../models/bxml/Verb';
const { Bridge } = require('../../../../models/bxml/verbs/Bridge');

describe('Bridge', () => {
    const attributes = {
        bridgeCompleteUrl: 'https://initial.com',
        bridgeCompleteMethod: 'POST',
        bridgeCompleteFallbackUrl: 'https://initial.com',
        bridgeCompleteFallbackMethod: 'POST',
        bridgeTargetCompleteUrl: 'https://initial.com',
        bridgeTargetCompleteMethod: 'POST',
        bridgeTargetCompleteFallbackUrl: 'https://initial.com',
        bridgeTargetCompleteFallbackMethod: 'POST',
        username: 'initialUsername',
        password: 'initialPassword',
        fallbackUsername: 'initialFallbackUsername',
        fallbackPassword: 'initialFallbackPassword',
        tag: 'initialTag'
    };

    const expected = '<Bridge bridgeCompleteUrl="https://initial.com" bridgeCompleteMethod="POST" bridgeCompleteFallbackUrl="https://initial.com" bridgeCompleteFallbackMethod="POST" bridgeTargetCompleteUrl="https://initial.com" bridgeTargetCompleteMethod="POST" bridgeTargetCompleteFallbackUrl="https://initial.com" bridgeTargetCompleteFallbackMethod="POST" username="initialUsername" password="initialPassword" fallbackUsername="initialFallbackUsername" fallbackPassword="initialFallbackPassword" tag="initialTag">c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d</Bridge>';

    test('should create a Bridge Verb', () => {
        const bridge = new Bridge('c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d', attributes);

        expect(bridge).toBeInstanceOf(Bridge);
        expect(bridge).toBeInstanceOf(Verb);
        expect(bridge.toBxml()).toBe(expected);
    });
});

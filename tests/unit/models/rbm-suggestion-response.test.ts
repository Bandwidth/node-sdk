import { RbmSuggestionResponse } from '../../../models/rbm-suggestion-response';

describe('RbmSuggestionResponse', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmSuggestionResponse = {
            text: 'test-text',
            postbackData: 'test-postbackData',
        };

        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
    });
});

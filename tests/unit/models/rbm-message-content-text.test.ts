import { RbmMessageContentText } from '../../../models/rbm-message-content-text';

describe('RbmMessageContentText', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmMessageContentText = {
            text: 'test-text',
            suggestions: [],
        };

        expect(fixture.text).toBe('test-text');
        expect(fixture.suggestions).toEqual([]);
    });
});

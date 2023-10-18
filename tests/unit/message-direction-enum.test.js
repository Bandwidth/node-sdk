const { MessageDirectionEnum } = require('../../models/message-direction-enum');

describe('MessageDirectionEnum', () => {
    test('should define the expected values', () => {
        expect(MessageDirectionEnum.In).toBe('in');
        expect(MessageDirectionEnum.Out).toBe('out');
    });
});

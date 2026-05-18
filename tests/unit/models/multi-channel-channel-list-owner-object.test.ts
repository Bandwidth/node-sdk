import { MultiChannelChannelListOwnerObject } from '../../../models/multi-channel-channel-list-owner-object';

describe('MultiChannelChannelListOwnerObject', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelChannelListOwnerObject = {
            owner: 'test-owner',
        };

        expect(fixture.owner).toBe('test-owner');
    });
});

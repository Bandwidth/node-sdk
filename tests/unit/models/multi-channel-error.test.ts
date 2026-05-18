import { MultiChannelError } from '../../../models/multi-channel-error';

describe('MultiChannelError', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelError = {
            links: [],
            errors: [],
        };

        expect(fixture.links).toEqual([]);
        expect(fixture.errors).toEqual([]);
    });
});

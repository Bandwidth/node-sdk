import { StirShaken } from '../../../models/stir-shaken';

describe('StirShaken', () => {
    test('should accept the expected shape', () => {
        const fixture: StirShaken = {
            verstat: 'test-verstat',
            attestationIndicator: 'test-attestationIndicator',
            originatingId: 'test-originatingId',
        };

        expect(fixture.verstat).toBe('test-verstat');
        expect(fixture.attestationIndicator).toBe('test-attestationIndicator');
        expect(fixture.originatingId).toBe('test-originatingId');
    });
});

import { Diversion } from '../../../models/diversion';

describe('Diversion', () => {
    test('should accept the expected shape', () => {
        const fixture: Diversion = {
            reason: 'test-reason',
            privacy: 'test-privacy',
            screen: 'test-screen',
            counter: 'test-counter',
            limit: 'test-limit',
            unknown: 'test-unknown',
            origTo: 'test-origTo',
        };

        expect(fixture.reason).toBe('test-reason');
        expect(fixture.privacy).toBe('test-privacy');
        expect(fixture.screen).toBe('test-screen');
        expect(fixture.counter).toBe('test-counter');
        expect(fixture.limit).toBe('test-limit');
        expect(fixture.unknown).toBe('test-unknown');
        expect(fixture.origTo).toBe('test-origTo');
    });
});

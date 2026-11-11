import { RbmSession } from '../../../models/rbm-session';

describe('RbmSession', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmSession = {
            canInitiate: true,
            id: 'test-id',
            type: 'test-type',
            startTime: 'test-startTime',
            endTime: 'test-endTime',
        };

        expect(fixture.canInitiate).toBe(true);
        expect(fixture.id).toBe('test-id');
        expect(fixture.type).toBe('test-type');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
    });
});

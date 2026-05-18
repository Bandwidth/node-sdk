import { RbmMessageContentFile } from '../../../models/rbm-message-content-file';

describe('RbmMessageContentFile', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmMessageContentFile = {
            fileUrl: 'test-fileUrl',
            thumbnailUrl: 'test-thumbnailUrl',
        };

        expect(fixture.fileUrl).toBe('test-fileUrl');
        expect(fixture.thumbnailUrl).toBe('test-thumbnailUrl');
    });
});

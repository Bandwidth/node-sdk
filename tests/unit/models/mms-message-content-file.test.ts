import { MmsMessageContentFile } from '../../../models/mms-message-content-file';

describe('MmsMessageContentFile', () => {
    test('should accept the expected shape', () => {
        const fixture: MmsMessageContentFile = {
            fileUrl: 'test-fileUrl',
        };

        expect(fixture.fileUrl).toBe('test-fileUrl');
    });
});

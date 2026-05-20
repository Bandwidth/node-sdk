import { RbmCardContentMedia } from '../../../models/rbm-card-content-media';
import { RbmMediaHeightEnum } from '../../../models/rbm-media-height-enum';

describe('RbmCardContentMedia', () => {
    test('should accept the expected shape', () => {
        const fixture: RbmCardContentMedia = {
            fileUrl: 'test-fileUrl',
            thumbnailUrl: 'test-thumbnailUrl',
            height: RbmMediaHeightEnum.Short,
        };

        expect(fixture.fileUrl).toBe('test-fileUrl');
        expect(fixture.thumbnailUrl).toBe('test-thumbnailUrl');
        expect(fixture.height).toBe(RbmMediaHeightEnum.Short);
    });
});

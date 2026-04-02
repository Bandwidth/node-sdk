import { StandaloneCardOrientationEnum } from '../../../models/standalone-card-orientation-enum';

describe('StandaloneCardOrientationEnum', () => {
    test('should define the expected values', () => {
        expect(StandaloneCardOrientationEnum.Horizontal).toBe('HORIZONTAL');
        expect(StandaloneCardOrientationEnum.Vertical).toBe('VERTICAL');
        expect(Object.values(StandaloneCardOrientationEnum)).toEqual(['HORIZONTAL', 'VERTICAL']);
    });
});

import { MachineDetectionResult } from '../../../models/machine-detection-result';

describe('MachineDetectionResult', () => {
    test('should accept the expected shape', () => {
        const fixture: MachineDetectionResult = {
            value: 'test-value',
            duration: 'test-duration',
        };

        expect(fixture.value).toBe('test-value');
        expect(fixture.duration).toBe('test-duration');
    });
});

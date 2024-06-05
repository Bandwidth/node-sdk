const { MachineDetectionModeEnum } = require('../../models/machine-detection-mode-enum');

describe('MachineDetectionModeEnum', () => {
    test('should define the expected values', () => {
        expect(MachineDetectionModeEnum.Sync).toBe('sync');
        expect(MachineDetectionModeEnum.Async).toBe('async');
    });
});

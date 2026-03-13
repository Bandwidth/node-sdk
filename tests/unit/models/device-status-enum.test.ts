import { DeviceStatusEnum } from '../../../models/device-status-enum';

describe('DeviceStatusEnum', () => {
    test('should define all expected enum values', () => {
        expect(DeviceStatusEnum.Connected).toBe('CONNECTED');
        expect(DeviceStatusEnum.Disconnected).toBe('DISCONNECTED');
        expect(Object.values(DeviceStatusEnum)).toEqual([
            'CONNECTED',
            'DISCONNECTED'
        ]);
    });
});

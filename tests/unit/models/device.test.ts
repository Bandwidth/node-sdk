import { Device } from '../../../models/device';
import { DeviceStatusEnum } from '../../../models/device-status-enum';

describe('Device', () => {
    test('should support full device shape', () => {
        const device: Device = {
            deviceId: 'dev-1234',
            deviceName: 'Mobile App',
            status: DeviceStatusEnum.Connected,
            creationTimestamp: '2024-02-18T10:30:00Z'
        };

        expect(device.deviceId).toBe('dev-1234');
        expect(device.deviceName).toBe('Mobile App');
        expect(device.status).toBe(DeviceStatusEnum.Connected);
        expect(new Date(device.creationTimestamp).toString()).not.toBe('Invalid Date');
    });
});

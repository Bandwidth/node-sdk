import { LookupResult } from '../../../models/lookup-result';
import { LineTypeEnum } from '../../../models/line-type-enum';
import { DeactivationEventEnum } from '../../../models/deactivation-event-enum';
import { LatestMessageDeliveryStatusEnum } from '../../../models/latest-message-delivery-status-enum';

describe('LookupResult', () => {
    test('should accept the expected shape', () => {
        const fixture: LookupResult = {
            phoneNumber: 'test-phoneNumber',
            lineType: LineTypeEnum.Fixed,
            messagingProvider: 'test-messagingProvider',
            voiceProvider: 'test-voiceProvider',
            countryCodeA3: 'test-countryCodeA3',
            deactivationReporter: 'test-deactivationReporter',
            deactivationDate: 'test-deactivationDate',
            deactivationEvent: DeactivationEventEnum.Deactivated,
            latestMessageDeliveryStatus: LatestMessageDeliveryStatusEnum.Active,
            initialMessageDeliveryStatusDate: 'test-initialMessageDeliveryStatusDate',
            latestMessageDeliveryStatusDate: 'test-latestMessageDeliveryStatusDate',
            rcsEnabled: true,
        };

        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.lineType).toBe(LineTypeEnum.Fixed);
        expect(fixture.messagingProvider).toBe('test-messagingProvider');
        expect(fixture.voiceProvider).toBe('test-voiceProvider');
        expect(fixture.countryCodeA3).toBe('test-countryCodeA3');
        expect(fixture.deactivationReporter).toBe('test-deactivationReporter');
        expect(fixture.deactivationDate).toBe('test-deactivationDate');
        expect(fixture.deactivationEvent).toBe(DeactivationEventEnum.Deactivated);
        expect(fixture.latestMessageDeliveryStatus).toBe(LatestMessageDeliveryStatusEnum.Active);
        expect(fixture.initialMessageDeliveryStatusDate).toBe('test-initialMessageDeliveryStatusDate');
        expect(fixture.latestMessageDeliveryStatusDate).toBe('test-latestMessageDeliveryStatusDate');
        expect(fixture.rcsEnabled).toBe(true);
    });
});

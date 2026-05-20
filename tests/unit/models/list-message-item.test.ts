import { ListMessageItem } from '../../../models/list-message-item';
import { MessageStatusEnum } from '../../../models/message-status-enum';
import { ListMessageDirectionEnum } from '../../../models/list-message-direction-enum';
import { MessageTypeEnum } from '../../../models/message-type-enum';

describe('ListMessageItem', () => {
    test('should accept the expected shape', () => {
        const fixture: ListMessageItem = {
            messageId: 'test-messageId',
            accountId: 'test-accountId',
            sourceTn: 'test-sourceTn',
            destinationTn: 'test-destinationTn',
            messageStatus: MessageStatusEnum.Received,
            messageDirection: ListMessageDirectionEnum.Inbound,
            messageType: MessageTypeEnum.Sms,
            segmentCount: 1.5,
            errorCode: 1.5,
            receiveTime: 'test-receiveTime',
            carrierName: 'test-carrierName',
            messageSize: 1.5,
            messageLength: 1.5,
            attachmentCount: 1.5,
            recipientCount: 1.5,
            campaignClass: 'test-campaignClass',
            campaignId: 'test-campaignId',
            bwLatency: 1.5,
            carrierLatency: 1.5,
            callingNumberCountryA3: 'test-callingNumberCountryA3',
            calledNumberCountryA3: 'test-calledNumberCountryA3',
            product: 'test-product',
            location: 'test-location',
        };

        expect(fixture.messageId).toBe('test-messageId');
        expect(fixture.accountId).toBe('test-accountId');
        expect(fixture.sourceTn).toBe('test-sourceTn');
        expect(fixture.destinationTn).toBe('test-destinationTn');
        expect(fixture.messageStatus).toBe(MessageStatusEnum.Received);
        expect(fixture.messageDirection).toBe(ListMessageDirectionEnum.Inbound);
        expect(fixture.messageType).toBe(MessageTypeEnum.Sms);
        expect(fixture.segmentCount).toBe(1.5);
        expect(fixture.errorCode).toBe(1.5);
        expect(fixture.receiveTime).toBe('test-receiveTime');
        expect(fixture.carrierName).toBe('test-carrierName');
        expect(fixture.messageSize).toBe(1.5);
        expect(fixture.messageLength).toBe(1.5);
        expect(fixture.attachmentCount).toBe(1.5);
        expect(fixture.recipientCount).toBe(1.5);
        expect(fixture.campaignClass).toBe('test-campaignClass');
        expect(fixture.campaignId).toBe('test-campaignId');
        expect(fixture.bwLatency).toBe(1.5);
        expect(fixture.carrierLatency).toBe(1.5);
        expect(fixture.callingNumberCountryA3).toBe('test-callingNumberCountryA3');
        expect(fixture.calledNumberCountryA3).toBe('test-calledNumberCountryA3');
        expect(fixture.product).toBe('test-product');
        expect(fixture.location).toBe('test-location');
    });
});

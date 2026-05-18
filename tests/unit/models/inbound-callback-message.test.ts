import { InboundCallbackMessage } from '../../../models/inbound-callback-message';
import { MessageDirectionEnum } from '../../../models/message-direction-enum';
import { PriorityEnum } from '../../../models/priority-enum';
import { MultiChannelMessageChannelEnum } from '../../../models/multi-channel-message-channel-enum';
import { MultiChannelMessageContent } from '../../../models/multi-channel-message-content';
import { RbmSuggestionResponse } from '../../../models/rbm-suggestion-response';
import { RbmLocationResponse } from '../../../models/rbm-location-response';

describe('InboundCallbackMessage', () => {
    test('should accept the expected shape', () => {
        const fixture: InboundCallbackMessage = {
            id: 'test-id',
            owner: 'test-owner',
            applicationId: 'test-applicationId',
            time: 'test-time',
            segmentCount: 1.5,
            direction: MessageDirectionEnum.In,
            // @ts-expect-error
            to: [],
            from: 'test-from',
            text: 'test-text',
            tag: 'test-tag',
            media: [],
            priority: PriorityEnum.Default,
            channel: MultiChannelMessageChannelEnum.Rbm,
            content: {} as unknown as MultiChannelMessageContent,
            suggestionResponse: {} as unknown as RbmSuggestionResponse,
            locationResponse: {} as unknown as RbmLocationResponse,
        };

        expect(fixture.id).toBe('test-id');
        expect(fixture.owner).toBe('test-owner');
        expect(fixture.applicationId).toBe('test-applicationId');
        expect(fixture.time).toBe('test-time');
        expect(fixture.segmentCount).toBe(1.5);
        expect(fixture.direction).toBe(MessageDirectionEnum.In);
        expect(fixture.to).toEqual([]);
        expect(fixture.from).toBe('test-from');
        expect(fixture.text).toBe('test-text');
        expect(fixture.tag).toBe('test-tag');
        expect(fixture.media).toEqual([]);
        expect(fixture.priority).toBe(PriorityEnum.Default);
        expect(fixture.channel).toBe(MultiChannelMessageChannelEnum.Rbm);
        expect(fixture.content).toBeDefined();
        expect(fixture.suggestionResponse).toBeDefined();
        expect(fixture.locationResponse).toBeDefined();
    });
});

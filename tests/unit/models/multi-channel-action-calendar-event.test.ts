import { MultiChannelActionCalendarEvent } from '../../../models/multi-channel-action-calendar-event';
import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';

describe('MultiChannelActionCalendarEvent', () => {
    test('should accept the expected shape', () => {
        const fixture: MultiChannelActionCalendarEvent = {
            type: RbmActionTypeEnum.Reply,
            text: 'test-text',
            postbackData: 'test-postbackData',
            title: 'test-title',
            startTime: 'test-startTime',
            endTime: 'test-endTime',
            description: 'test-description',
        };

        expect(fixture.type).toBe(RbmActionTypeEnum.Reply);
        expect(fixture.text).toBe('test-text');
        expect(fixture.postbackData).toBe('test-postbackData');
        expect(fixture.title).toBe('test-title');
        expect(fixture.startTime).toBe('test-startTime');
        expect(fixture.endTime).toBe('test-endTime');
        expect(fixture.description).toBe('test-description');
    });
});

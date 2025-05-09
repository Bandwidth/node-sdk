import { RbmActionTypeEnum } from '../../../models/rbm-action-type-enum';

describe('RbmActionTypeEnum', () => {
    test('should define the expected values', () => {
        expect(RbmActionTypeEnum.Reply).toBe('REPLY');
        expect(RbmActionTypeEnum.DialPhone).toBe('DIAL_PHONE');
        expect(RbmActionTypeEnum.ShowLocation).toBe('SHOW_LOCATION');
        expect(RbmActionTypeEnum.CreateCalendarEvent).toBe('CREATE_CALENDAR_EVENT');
        expect(RbmActionTypeEnum.OpenUrl).toBe('OPEN_URL');
        expect(RbmActionTypeEnum.RequestLocation).toBe('REQUEST_LOCATION');
    });
});

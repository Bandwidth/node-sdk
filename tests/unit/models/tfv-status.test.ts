import { TfvStatus } from '../../../models/tfv-status';
import { TfvStatusEnum } from '../../../models/tfv-status-enum';
import { TfvSubmissionInfo } from '../../../models/tfv-submission-info';
import { AdditionalDenialReason } from '../../../models/additional-denial-reason';

describe('TfvStatus', () => {
    test('should accept the expected shape', () => {
        const denialReason: AdditionalDenialReason = {
                    statusCode: 1.5,
                    reason: 'test-reason',
                    resubmitAllowed: true,
                };
        const fixture: TfvStatus = {
            phoneNumber: 'test-phoneNumber',
            status: TfvStatusEnum.Verified,
            internalTicketNumber: 'test-internalTicketNumber',
            declineReasonDescription: 'test-declineReasonDescription',
            denialStatusCode: 123,
            additionalDenialReasons: [denialReason],
            resubmitAllowed: true,
            createdDateTime: 'test-createdDateTime',
            modifiedDateTime: 'test-modifiedDateTime',
            submission: {} as unknown as TfvSubmissionInfo,
            blocked: true,
            blockedReason: 'test-blockedReason',
            cvToken: 'test-cvToken',
        };

        expect(fixture.phoneNumber).toBe('test-phoneNumber');
        expect(fixture.status).toBe(TfvStatusEnum.Verified);
        expect(fixture.internalTicketNumber).toBe('test-internalTicketNumber');
        expect(fixture.declineReasonDescription).toBe('test-declineReasonDescription');
        expect(fixture.resubmitAllowed).toBe(true);
        expect(fixture.createdDateTime).toBe('test-createdDateTime');
        expect(fixture.modifiedDateTime).toBe('test-modifiedDateTime');
        expect(fixture.submission).toBeDefined();
        expect(fixture.blocked).toBe(true);
        expect(fixture.blockedReason).toBe('test-blockedReason');
        expect(fixture.cvToken).toBe('test-cvToken');
    });
});

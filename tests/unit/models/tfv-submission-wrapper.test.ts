import { TfvSubmissionWrapper } from '../../../models/tfv-submission-wrapper';
import { VerificationUpdateRequest } from '../../../models/verification-update-request';

describe('TfvSubmissionWrapper', () => {
    test('should accept the expected shape', () => {
        const fixture: TfvSubmissionWrapper = {
            submission: {} as unknown as VerificationUpdateRequest,
        };

        expect(fixture.submission).toBeDefined();
    });
});

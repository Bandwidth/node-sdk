import { OptInWorkflow } from '../../../models/opt-in-workflow';

describe('OptInWorkflow', () => {
    test('should accept the expected shape', () => {
        const fixture: OptInWorkflow = {
            description: 'test-description',
            imageUrls: [],
            confirmationResponse: 'test-confirmationResponse',
        };

        expect(fixture.description).toBe('test-description');
        expect(fixture.imageUrls).toEqual([]);
        expect(fixture.confirmationResponse).toBe('test-confirmationResponse');
    });
});

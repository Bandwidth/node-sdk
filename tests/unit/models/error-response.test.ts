import { ErrorResponse } from '../../../models/error-response';
import { Link } from '../../../models/link';
import { ModelError } from '../../../models/model-error';

describe('ErrorResponse', () => {
    test('should support full error response shape', () => {
        const link: Link = {
            rel: 'self',
            href: 'http://api.example.com/endpoints'
        };

        const error: ModelError = {
            code: 404,
            description: 'Endpoint not found'
        };

        const response: ErrorResponse = {
            links: [link],
            data: null,
            errors: [error]
        };

        expect(response.links).toHaveLength(1);
        expect(response.links[0].rel).toBe('self');
        expect(response.links[0].href).toBe('http://api.example.com/endpoints');
        expect(response.data).toBeNull();
        expect(response.errors).toHaveLength(1);
        expect(response.errors[0].code).toBe(404);
        expect(response.errors[0].description).toBe('Endpoint not found');
    });
});

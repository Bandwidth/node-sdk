import { Verb } from '../../../../models/bxml/Verb';
import { Forward, ForwardAttributes} from '../../../../models/bxml/verbs/Forward';

describe('Forward', () => {
    const attributes: ForwardAttributes = {
        to: '+19195551234',
        from: '+19195554321',
        callTimeout: 5,
        diversionTreatment: 'propagate',
        diversionReason: 'user-busy',
        uui: '93d6f3c0be5845960b744fa28015d8ede84bd1a4;encoding=base64,asdf;encoding=jwt'
    };

    const expected = '<Forward to="+19195551234" from="+19195554321" callTimeout="5" diversionTreatment="propagate" diversionReason="user-busy" uui="93d6f3c0be5845960b744fa28015d8ede84bd1a4;encoding=base64,asdf;encoding=jwt"/>';

    test('should create a Forward Verb', () => {
        const forward = new Forward(attributes);

        expect(forward).toBeInstanceOf(Forward);
        expect(forward).toBeInstanceOf(Verb);
        expect(forward.toBxml()).toBe(expected);
    });
});

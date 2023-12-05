const { Verb } = require('../../../../models/bxml/Verb');
const { Tag } = require('../../../../models/bxml/verbs/Tag');

describe('Tag', () => {
    const expected = '<Tag>testTag</Tag>';

    test('should create a Tag Verb', () => {
        const tag = new Tag('testTag');

        expect(tag).toBeInstanceOf(Tag);
        expect(tag).toBeInstanceOf(Verb);
        expect(tag.toBxml()).toBe(expected);
    });
});

const { FileFormatEnum } = require('../../models/file-format-enum');

describe('FileFormatEnum', () => {
    test('should define the expected values', () => {
        expect(FileFormatEnum.Mp3).toBe('mp3');
        expect(FileFormatEnum.Wav).toBe('wav');
    });
});

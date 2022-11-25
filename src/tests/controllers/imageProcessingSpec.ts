import fs from 'fs';
import resizeImage from '../../controllers/imageProcessing';

describe('Test Resizing Function', () => {
    it('Resized image should be generated in processedImages folder', async () => {
        const generatedImageName = await resizeImage('fjord.jpg', 400, 500);
        expect(fs.existsSync(`./processedImages/${generatedImageName}`)).toBe(
            true
        );
    });
});

import sharp from 'sharp';
import fs from 'fs';

const resizeImage = async (
    imageName: string,
    width: number | undefined,
    height: number
): Promise<string> => {
    if (!imageName.includes('.jpg')) imageName = imageName + '.jpg';

    const generatedImageName = `${imageName}_${width}_${height}.jpg`;

    if (!fs.existsSync(`./processedImages/${generatedImageName}`)) {
        try {
            await sharp('./images/' + imageName)
                .resize({
                    width: width,
                    height: height,
                })
                .toFile(
                    `./processedImages/${imageName}_${width}_${height}.jpg`
                );
        } catch (e) {
            console.log((e as Error).message);
        }
    }
    return generatedImageName;
};

export default resizeImage;

const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MIN_RESOLUTION = {
    width: 960,
    height: 1440,
};

function checkImageResolution(filePath) {
    try {
        const dimensions = sizeOf(filePath);

        if (dimensions.width < MIN_RESOLUTION.width || dimensions.height < MIN_RESOLUTION.height) {
            console.log(`Resizing image: ${path.basename(filePath)}`);
            resizeImage(filePath, dimensions);
        } else {
            console.log(`Image resolution is fine for: ${path.basename(filePath)}`);
        }
    } catch (error) {
        console.error(`Error for ${path.basename(filePath)}: ${error.message}`);
    }
}

function resizeImage(filePath, dimensions) {
    const outputFolder = path.join(__dirname, 'Unreel_resized'); // Specify the output folder
    const outputPath = path.join(outputFolder, path.basename(filePath));

    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    sharp(filePath)
        .resize({
            width: MIN_RESOLUTION.width,
            height: MIN_RESOLUTION.height,
            fit: 'inside',
        })
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(`Error resizing image: ${err.message}`);
            } else {
                console.log(`Image resized successfully and saved to: ${outputPath}`);
            }
        });
}

function processImages(folderPath) {
    try {
        const files = fs.readdirSync(folderPath);

        files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            checkImageResolution(filePath);
        });
    } catch (error) {
        console.error('Error reading folder:', error.message);
    }
}

// Example usage
const folderPath = '/Users/user/Documents/js-basics/Unreel_Feed_series_image';
processImages(folderPath);

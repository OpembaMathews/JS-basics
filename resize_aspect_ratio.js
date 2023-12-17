const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function resizeImage(inputFilePath, outputFolderPath, outputFileName, outputWidth, outputHeight) {
    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath);
    }

    const outputFilePath = path.join(outputFolderPath, outputFileName);

    sharp(inputFilePath)
        .resize(outputWidth, outputHeight)
        .toFile(outputFilePath, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Resized image saved to', outputFilePath);
            }
        });
}

// Example usage
const inputFilePath = '/Users/user/Documents/js-basics/Unreel_resized/port_1454801 (1).jpeg'; // Replace with your input image path
const outputFolderPath = 'resized_imgs'; // Output folder name
const outputFileName = 'resized_image.jpg'; // Replace with your desired output image name
const outputWidth = 16;
const outputHeight = 9;

resizeImage(inputFilePath, outputFolderPath, outputFileName, outputWidth, outputHeight);

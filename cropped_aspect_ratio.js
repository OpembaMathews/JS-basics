const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function resizeAndCropImage(inputFilePath, outputFolderPath, outputFileName, outputAspectRatio) {
    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath);
    }

    const outputFilePath = path.join(outputFolderPath, outputFileName);

    sharp(inputFilePath)
        .resize({
            width: Math.ceil(1000 * Math.sqrt(outputAspectRatio)), // Set a temporary large width
            height: 1000 / Math.sqrt(outputAspectRatio), // Use a large height to avoid cropping
            fit: 'cover',
            position: 'center',
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .toBuffer()
        .then(data => {
            sharp(data)
                .extract({ left: 0, top: 0, width: Math.ceil(1000 * Math.sqrt(outputAspectRatio)), height: 1000 / Math.sqrt(outputAspectRatio) })
                .resize({ width: Math.ceil(1000 * Math.sqrt(outputAspectRatio)), height: 1000 / Math.sqrt(outputAspectRatio) })
                .toFile(outputFilePath, (err, info) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('Resized and cropped image saved to', outputFilePath);
                    }
                });
        })
        .catch(err => {
            console.error(err);
        });
}

// Example usage
const inputFilePath = '/Users/user/Documents/js-basics/Unreel_resized/port_1454801 (1).jpeg'; // Replace with your input image path
const outputFolderPath = 'resized_imgs'; // Output folder name
const outputFileName = 'resized_cropped_image.jpg'; // Replace with your desired output image name
const outputAspectRatio = 16 / 9; // Desired aspect ratio (width:height)

resizeAndCropImage(inputFilePath, outputFolderPath, outputFileName, outputAspectRatio);

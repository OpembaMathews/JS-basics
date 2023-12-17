const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to compress an image to a target size
function compressImage(inputFilePath, outputFolder, targetSizeInKB) {
    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    const outputFileName = path.basename(inputFilePath);
    const outputFilePath = path.join(outputFolder, outputFileName);

    sharp(inputFilePath)
        .jpeg({ quality: 80, force: false }) // Adjust quality as needed
        .toFile(outputFilePath, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Compressed image saved to', outputFilePath);
            }
        });
}

// Function to compress all images in a folder
function compressImagesInFolder(inputFolder, targetSizeInKB) {
    // Create the output folder
    const outputFolder = path.join(inputFolder, path.basename(inputFolder) + '_compressed');

    // Process each file
    const files = fs.readdirSync(inputFolder);
    files.forEach(file => {
        const inputFilePath = path.join(inputFolder, file);
        compressImage(inputFilePath, outputFolder, targetSizeInKB);
    });
}

// Example usage
const inputFolder = '/Users/user/Documents/js-basics/Unreel_Feed'; // Replace with your input folder path
const targetSizeInKB = 200; // Target size in kilobytes

compressImagesInFolder(inputFolder, targetSizeInKB);

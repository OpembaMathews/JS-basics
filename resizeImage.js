const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const sharp = require('sharp');

// Function to create a folder if it doesn't exist
function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

// Function to resize an image to a target aspect ratio without stretching or squeezing
// Function to resize an image to a target aspect ratio without stretching or squeezing
async function resizeImage(imagePath, targetAspectRatio, outputFolderPath) {
    try {
      // Get the dimensions of the original image
      const dimensions = sizeOf(imagePath);
  
      // Calculate the target dimensions to maintain the specified aspect ratio
      let targetWidth, targetHeight;
      const currentAspectRatio = dimensions.width / dimensions.height;
  
      if (currentAspectRatio > targetAspectRatio) {
        targetHeight = dimensions.height;
        targetWidth = Math.round(targetHeight * targetAspectRatio);
      } else {
        targetWidth = dimensions.width;
        targetHeight = Math.round(targetWidth / targetAspectRatio);
      }
  
      // Resize the image
      const resizedImageBuffer = await sharp(imagePath)
        .resize(targetWidth, targetHeight, { fit: 'contain' }) // Use 'contain' to maintain aspect ratio without cropping
        .toBuffer();
  
      // Construct the output path and filename
      const outputFileName = path.basename(imagePath);
      const outputFilePath = path.join(outputFolderPath, outputFileName);
  
      // Save the resized image to the output folder
      fs.writeFileSync(outputFilePath, resizedImageBuffer);
  
      // Display a message indicating successful resizing
      console.log(`Resized: ${outputFileName}`);
    } catch (error) {
      console.error(`Error resizing image ${imagePath}:`, error.message);
    }
  }
  

// Function to resize all images in the "Sections" folder
async function resizeAllImages() {
  const inputFolderPath = 'Sections';
  const outputFolderPath = 'Sections_resized';
  const targetAspectRatio = 16 / 9;

  try {
    // Ensure the output folder exists
    createFolderIfNotExists(outputFolderPath);

    // Read all files in the input folder
    const files = fs.readdirSync(inputFolderPath);

    // Iterate over each file
    for (const file of files) {
      const inputImagePath = path.join(inputFolderPath, file);

      // Resize the image and save it to the output folder
      await resizeImage(inputImagePath, targetAspectRatio, outputFolderPath);
    }

    console.log('All images resized successfully!');
  } catch (error) {
    console.error('Error resizing images:', error.message);
  }
}

// Run the function to resize all images
resizeAllImages();

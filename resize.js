const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// Function to read the aspect ratio of an image and display it on the console
function displayImageAspectRatio(imagePath) {
  try {
    // Get the dimensions of the image
    const dimensions = sizeOf(imagePath);

    // Calculate the aspect ratio
    const aspectRatio = dimensions.width / dimensions.height;

    // Display the aspect ratio on the console
    console.log(`Image: ${path.basename(imagePath)} - Aspect Ratio: ${dimensions.width}:${dimensions.height} (${aspectRatio.toFixed(2)})`);
  } catch (error) {
    console.error(`Error reading aspect ratio for ${imagePath}:`, error.message);
  }
}

// Function to read aspect ratios of all images in the "Sections" folder
function displayAllImageAspectRatios() {
  const folderPath = 'Sections';

  try {
    // Read all files in the "Sections" folder
    const files = fs.readdirSync(folderPath);

    // Iterate over each file
    files.forEach(file => {
      const imagePath = path.join(folderPath, file);

      // Display the aspect ratio of each image
      displayImageAspectRatio(imagePath);
    });
  } catch (error) {
    console.error('Error reading images:', error.message);
  }
}

// Run the function to display aspect ratios of all images
displayAllImageAspectRatios();

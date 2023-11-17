const fs = require('fs');
const path = require('path');
const axios = require('axios');

const imgbbAPI = 'e76b4c6973f3a87a97317f98720eba21'; // Replace with your imgbb API key
const inputFolder = 'Sections_resized'; // Replace with your input folder path

// Initialize an empty array to store image data
const imageData = [];

// Get the list of files in the input folder
const files = fs.readdirSync(inputFolder);

// Function to upload an image to imgbb
async function uploadImageToImgbb(filePath) {
  try {
    const uploadUrl = 'https://api.imgbb.com/1/upload';

    // Create a FormData object to send the key and image file
    const formData = new FormData();
    formData.append('key', imgbbAPI);
    formData.append('image', fs.createReadStream(filePath));

    // Generate the boundary manually
    const boundary = `------------------------${Math.random().toString(36).substring(7)}`;

    // Set the Content-Type header with the generated boundary
    const headers = {
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
    };

    // Set the boundary for the FormData object
    formData.boundary = boundary;

    // Send a POST request to upload the image to the imgbb API
    const response = await axios.post(uploadUrl, formData, { headers });

    // Log the entire response for troubleshooting
    console.log(response);

    // Check if the upload was successful (HTTP status code 200)
    if (response.status === 200) {
      // Extract the uploaded image URL from the API response
      const imageUrl = response.data.data.image.url;

      // Extract the image title from the filename (excluding the file extension)
      const imageTitle = path.basename(filePath, path.extname(filePath));

      // Append the image data (title and URL) to the imageData array
      imageData.push({
        title: imageTitle,
        image: imageUrl
      });

      console.log(`Uploaded image: ${imageTitle}`);
    } else {
      console.error(`Error uploading image: ${path.basename(filePath)} - Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error uploading image: ${path.basename(filePath)} - ${error.message}`);
  }
}



// Upload images and populate imageData array
async function uploadImages() {
  for (const file of files) {
    const filePath = path.join(inputFolder, file);

    if (fs.statSync(filePath).isFile()) {
      await uploadImageToImgbb(filePath);
    }
  }
}

// Run the function to upload images
uploadImages().then(() => {
  // Convert the imageData array to a JSON-formatted string
  const jsonData = JSON.stringify(imageData, null, 4);

  // Define the folder where the JSON file should be saved
  const jsonFolder = 'portrait';

  // Ensure the folder exists; create it if it doesn't
  if (!fs.existsSync(jsonFolder)) {
    fs.mkdirSync(jsonFolder);
  }

  // Write the JSON data to a file in the "portrait" folder with a specific filename
  const jsonFilePath = path.join(jsonFolder, 'Sections_image_portrait.json');
  fs.writeFileSync(jsonFilePath, jsonData);

  console.log(`JSON data written to: ${jsonFilePath}`);
});

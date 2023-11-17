const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Replace with your Airtable API key, base ID, and table name
const apiKey = 'keyQ4PBbmwfeYSMa8';
const baseId = 'appXILw7vP3Pzlb5W';
const tableName = 'Sections';

// Airtable API endpoint
const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

// Airtable request headers
const headers = {
  Authorization: `Bearer ${apiKey}`,
};

// Function to create a folder if it doesn't exist
function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

// Function to download an image
async function downloadImage(url, fileName) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(fileName, Buffer.from(response.data, 'binary'));
    console.log(`Downloaded: ${fileName}`);
  } catch (error) {
    console.error(`Error downloading image from ${url}:`, error.message);
  }
}

// Function to fetch data from Airtable and download images
async function downloadImages() {
  try {
    console.log('Fetching data from Airtable...');
    const response = await axios.get(apiUrl, { headers });
    const records = response.data.records;

    console.log(`Found ${records.length} records. Downloading images...`);

    // Ensure the "Sections" folder exists
    createFolderIfNotExists('Sections');

    for (const record of records) {
      const imageUrl = record.fields.section_image[0].url;
      const sectionName = record.fields.section_name;
      const fileName = path.join('Sections', `${sectionName}.jpg`); 

      await downloadImage(imageUrl, fileName);
    }

    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error fetching or downloading images:', error.message);
  }
}

// Run the function
downloadImages();

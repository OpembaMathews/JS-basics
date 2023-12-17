const axios = require('axios');
const fs = require('fs');
const path = require('path');

const AIRTABLE_API_KEY = 'keyQ4PBbmwfeYSMa8';
const AIRTABLE_BASE_ID = 'appXILw7vP3Pzlb5W';
const AIRTABLE_TABLE_NAME = 'Sections';
const OUTPUT_FOLDER = 'HighOctane_Feed';

const DEFAULT_EXTENSION = '.jpg'; // Change this to your desired extension

async function downloadImages() {
    try {
        // Fetch data from Airtable
        const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
        const response = await axios.get(airtableUrl, {
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
        });

        if (response.status !== 200) {
            throw new Error(`Failed to fetch data from Airtable: ${response.statusText}`);
        }

        const data = response.data;

        // Create output folder if it doesn't exist
        const outputFolderPath = path.join(__dirname, OUTPUT_FOLDER);
        if (!fs.existsSync(outputFolderPath)) {
            fs.mkdirSync(outputFolderPath);
        }

        // Download images
        for (const record of data.records) {
            const seriesImage = record.fields.section_image;
            const sectionName = record.fields.section_name;

            // Check if series_image and section_name are defined and have at least one element
            if (seriesImage && seriesImage.length > 0 && sectionName) {
                const imageUrl = seriesImage[0].url;
                const imageName = `${sectionName}${DEFAULT_EXTENSION}`;
                const outputPath = path.join(outputFolderPath, imageName);

                try {
                    const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });

                    if (imageResponse.status !== 200) {
                        throw new Error(`Failed to download image: ${imageResponse.statusText}`);
                    }

                    const fileStream = fs.createWriteStream(outputPath);
                    imageResponse.data.pipe(fileStream);

                    console.log(`Image downloaded and renamed: ${imageName}`);
                } catch (error) {
                    console.error(`Error downloading image ${imageName}: ${error.message}`);
                }
            } else {
                console.warn('Skipping record without series_image or section_name:', record.id);
            }
        }
    } catch (error) {
        console.error(`Script execution failed: ${error.message}`);
    }
}

// Run the script
downloadImages();

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const IMGBB_API_KEY = '3185d98bb3c7a9cadc07c2d564316484';

async function uploadToImgBB(imagePath, imageTitle) {
    try {
        const formData = new FormData();
        formData.append('image', fs.createReadStream(imagePath));

        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
                Authorization: `Bearer ${IMGBB_API_KEY}`,
                ...formData.getHeaders(),
            },
        });

        if (response.status === 200 && response.data.data) {
            const imageUrl = response.data.data.url;

            const imageDetails = {
                title: imageTitle,
                link: imageUrl,
            };

            console.log(`Image uploaded successfully: ${imageTitle}`);
            return imageDetails;
        } else {
            console.error(`Failed to upload image: ${imageTitle}`);
            console.error('ImgBB API Response:', response.data);
            return null;
        }
    } catch (error) {
        console.error(`Error uploading image ${imageTitle}: ${error.message}`);
        return null;
    }
}

function generateJson(images) {
    const jsonFilePath = path.join(__dirname, 'Auto Allstars Search Feed_series_image.json');

    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(images, null, 2));
        console.log(`JSON file generated successfully: ${jsonFilePath}`);
    } catch (error) {
        console.error(`Error generating JSON file: ${error.message}`);
    }
}

async function processImages(folderPath) {
    const images = [];

    try {
        const files = fs.readdirSync(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const imageTitle = path.parse(filePath).name;

            const uploadedImage = await uploadToImgBB(filePath, imageTitle);

            if (uploadedImage) {
                images.push(uploadedImage);
            }
        }
    } catch (error) {
        console.error('Error reading folder:', error.message);
    }

    generateJson(images);
}

// Example usage
const folderPath = '/Users/user/Documents/js-basics/Auto Allstars Search Feed_series_image';
processImages(folderPath);

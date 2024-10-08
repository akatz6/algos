const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape image URLs from Getty Images
const scrapeGettyImages = async(url) => {
    try {
        // Fetch the HTML content from the URL
        const { data } = await axios.get(url);

        // Load HTML into cheerio
        const $ = cheerio.load(data);


        const allImages = $('img');
        
        // Array to hold the image URLs
        let imageUrls = [];


        for(let element in allImages){
            const temp = allImages[element].attribs?.src
            if(temp?.includes("http")){
                imageUrls.push(temp)
            }
        }

        // Return the array of image URLs
        return imageUrls;
        
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

// Example usage
const url = 'https://www.gettyimages.com/photos/nature';
const images = scrapeGettyImages(url)


console.log(images)
// Write a simple scraper which will get image urls from
// https://www.gettyimages.com/ for a given search phrase and number of pages.
//  Scraper should be run in parallel and take as an argument the number of
//  workers (total number of pages should be divided between workers). Results
//   should be printed to console.
// Run the scraper with parameters: phrase="hotel" page_count=11

const axios = require("axios");
const cheerio = require("cheerio");

const scrape = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const images = $("img");
    const returnArr = [];

    for (let element of images) {
      const image = element.attribs?.src;
      if(image){
        console.log(image)
        returnArr.push(image)
      }
    }

    return returnArr;
  } catch (e) {
    return e;
  }
};
const url =
  "https://www.gettyimages.com/search/2/image-film?family=creative&phrase=hotel?page=11";

const result = scrape(url).then((results) => console.log(results));
console.log(result);

const Axios = require('axios');
const cheerio = require("cheerio");

const jumia = async(query,depth,offset) =>{
  let results = [];
  let crawlS,filterS,metricS,crawlE,filterE,metricE;
  // Page Crawler
  crawlS = new Date();
  for(let pageCount = offset; pageCount <= depth;pageCount++){
    const JUMIA_URL = `https://deals.jumia.co.ke/apartment-for-rent?search-keyword=${query}&page=${pageCount}`;
    let dom;
    try {
      dom = await Axios.get(JUMIA_URL);
    } catch (err) {
      console.log(err);
      return [];
    }
    let $ = cheerio.load(dom.data);
    $('div#search-results>article').map(async (i,el)=>{
      let data = $(el).attr('data-event');
      let location = $(el).find('span.address').text();
      let url = $(el).find('a.post-link').attr('href');
      let coords = {
          lat:0,
          lng:0
      }
      url = `https://deals.jumia.co.ke${url}`;

      // Second Depth
      let thumb = await secondDepth(url);
      
      data = JSON.parse(data);
      location = location.replace(/ /g, '').split(',')[1].trim();
      data = {
        ...data,
        thumb,
        coords,
        location,
        url
      }
      results.push(data);
    });
  }
  crawlE = new Date() - crawlS

  // Word Filter
  let wordSearch = (s,word) =>{
    return new RegExp('\\b'+word+'\\b','i').test(s);
  }
  let words = query.split(' ');

  filterS = new Date();
  words.forEach(word=>{
    results = results.filter(listing=>{
      return wordSearch(listing.title,word);
    })
  })
  filterE = new Date() - filterS;


  console.log(`crawler:${crawlE}ms\nfilter:${filterE}ms\nmetrics:${metricE}ms`);
  // Return listrings
  return results;
}

const secondDepth = async(url)=>{
    let gallery = [];
    let dom;
    try{
        dom = await Axios.get(url);
    }catch(err){
        console.log(err)
        return []
    }
    let $ = cheerio.load(dom.data);
    $('ul.pagination>li').map((i,el)=>{
        let img = $(el).find('img').attr('src')
        img = img.replace("desktop-small","desktop-gallery-large")
        gallery.push(img)
    })
    return gallery;
}
module.exports = jumia;

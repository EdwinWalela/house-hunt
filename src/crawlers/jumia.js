const Axios = require('axios');
const cheerio = require("cheerio");
const getMetrics = require("./helpers/metrics");

const jumia = async(query,clientLocation,depth,offset) =>{
  let results = [];
  let crawlS,filterS,metricS,crawlE,filterE,metricE;
  // Page Crawler
  crawlS = new Date();
  for(let pageCount = offset; pageCount <= depth;pageCount++){
    const JUMIA_URL = `https://deals.jumia.co.ke/real-estate?search-keyword=${query}&page=${pageCount}`;
    let dom;
    try {
      dom = await Axios.get(JUMIA_URL);
    } catch (err) {
      console.log(err);
      return [];
    }
    let $ = cheerio.load(dom.data);

    $('div#search-results>article').map((i,el)=>{
      let data = $(el).attr('data-event');
      let location = $(el).find('span.address').text();
      let url = $(el).find('a.post-link').attr('href');
      url = `https://deals.jumia.co.ke${url}`;
      data = JSON.parse(data);
      location = location.replace(/ /g, '').split(',')[1].trim();
      data = {
        ...data,
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


  // Get Metrics
  metricS = new Date();
  for(let i = 0; i < results.length; i ++){
    let metrics = await getMetrics(results[i],clientLocation);
    results[i].metrics = metrics;
  }
  metricE = new Date() - metricS;


  console.log(`crawler:${crawlE}ms\nfilter:${filterE}ms\nmetrics:${metricE}ms`);
  // Return listrings
  return results;
}

module.exports = jumia;

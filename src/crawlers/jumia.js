const Axios = require('axios');
const cheerio = require("cheerio");

const jumia = async(query,town,pages) =>{
  let results = [];
  for(let pageCount = 0; pageCount < pages;pageCount++){
    const JUMIA_URL = `https://deals.jumia.co.ke/${town}/real-estate?search-keyword=${query}&page=${pageCount}`;
    let dom;
    

    try {
      dom = await Axios.get(JUMIA_URL);
    } catch (err) {
      console.log(err);
      return;
    }
    let $ = cheerio.load(dom.data);

    $('div#tab1').map((i,el)=>{
      let data = $(el).find('div#search-results').attr('data-catalog-event');
      data = JSON.parse(data);
      results.push(...data.impressions);
    });
  }

  // Word Filter
  let wordSearch = (s,word) =>{
    return new RegExp('\\b'+word+'\\b','i').test(s);
  }

  let words = query.split(' ');

  words.forEach(word=>{
    results = results.filter(listing=>{
      return wordSearch(listing.name,word);
    })
  })

  // Add URL
  results = results.map(listing=>{
    let name = listing.name.trim().replace(/ /g, '-');
    listing.url = `https://deals.jumia.co.ke/${name}-pid${listing.id}`;
    return listing
  });

  // 

  // Return listrings
  return results;
}

module.exports = jumia;

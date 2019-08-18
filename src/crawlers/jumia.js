const Axios = require('axios');
const cheerio = require("cheerio");

const jumia = async(query,town,clientLocation,pages) =>{
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

  // Word Filter
  let wordSearch = (s,word) =>{
    return new RegExp('\\b'+word+'\\b','i').test(s);
  }

  let words = query.split(' ');

  words.forEach(word=>{
    results = results.filter(listing=>{
      return wordSearch(listing.title,word);
    })
  })

const getMetrics = async(listing)=>{
    const API_KEY = 'AIzaSyAx5bVVPhoquI4sJHpJUb4NTpTuVout3EA';
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${clientLocation}&destinations=${listing.location},kenya&key=${API_KEY}`;

    let res = await Axios.get(url);

    let metrics = {
      distance:res.data.rows[0].elements[0].distance.text,
      duration:res.data.rows[0].elements[0].duration.text,
    }
    return metrics;
}

for(let i = 0; i < results.length; i ++){
  let metrics = await getMetrics(results[i]);
  results[i].metrics = metrics;
}

  // Return listrings
  return results;
}

module.exports = jumia;

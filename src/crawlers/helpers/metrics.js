const Axios = require("axios");

const getMetrics = async(listing,clientLocation)=>{
    const API_KEY = process.env.API_KEY;
    
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${clientLocation}&destinations=${listing.location},kenya&key=${API_KEY}`;

    let res = await Axios.get(url);

    let metrics = {
      distance:res.data.rows[0].elements[0].distance.text,
      duration:res.data.rows[0].elements[0].duration.text,
    }
    return metrics;
}

module.exports = getMetrics;
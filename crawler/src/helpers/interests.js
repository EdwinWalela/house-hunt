const Axios = require("axios");
const GG_API_KEY = process.env.GG_API_KEY;
const BASE_URI = 'https://maps.googleapis.com/maps/api/place/textsearch/json?';

const getAreasOfInterests = async (interests,listingLocation) =>{

    Object.keys(interests).map((k,v)=>{
        console.log(k)
    })
    // let URI = `${BASE_URI}query=${interest}+in+${listingLocation}`;
}

module.exports = getAreasOfInterests
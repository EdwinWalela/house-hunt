const Axios = require("axios");
const GG_API_KEY = process.env.GG_API_KEY;
const BASE_URI = 'https://maps.googleapis.com/maps/api/place/textsearch/json?rankBy=distance&sensor=true&';

const getAreasOfInterests = async (interests,listingLocation) =>{
    let results = [];
    for(let i = 0; i < interests.length; i++){
        if(interests[i].shoppingMalls){
            let shops = [];
            let place = "shopping malls"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            for(let i = 0; i < places.length; i++){
                let obj = {
                    name:places[i].name,
                    rating:places[i].rating,
                    opened:places[i].opening_hours ? places[i].opening_hours.open_now  : 'n/a' ,
                    coords:{
                        lat:places[i].geometry.location.lat,
                        lng:places[i].geometry.location.lng
                    }   
                }
                shops.push(obj);
           }
           results.push({shops});
        }
        if(interests[i].hospitals){
            let medics = [];
            let place = "hospitals"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            for(let i = 0; i < places.length; i++){
                let obj = {
                    name:places[i].name,
                    rating:places[i].rating,
                    opened:places[i].opening_hours ? places[i].opening_hours.open_now  : 'n/a' ,
                    coords:{
                        lat:places[i].geometry.location.lat,
                        lng:places[i].geometry.location.lng
                    }   
                }
                medics.push(obj);
           }
           results.push({medics});
        }
        if(interests[i].restaurants){
            let restaurants = [];
            let place = "restaurants"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            for(let i = 0; i < places.length; i++){
                let obj = {
                    name:places[i].name,
                    rating:places[i].rating,
                    opened:places[i].opening_hours ? places[i].opening_hours.open_now  : 'n/a' ,
                    coords:{
                        lat:places[i].geometry.location.lat,
                        lng:places[i].geometry.location.lng
                    }   
                }
                restaurants.push(obj);
           }
           results.push({restaurants});
        }
        if(interests[i].gyms){
            let gyms = [];
            let place = "gyms"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            for(let i = 0; i < places.length; i++){
                let obj = {
                    name:places[i].name,
                    rating:places[i].rating,
                    opened:places[i].opening_hours ? places[i].opening_hours.open_now  : 'n/a' ,
                    coords:{
                        lat:places[i].geometry.location.lat,
                        lng:places[i].geometry.location.lng
                    }   
                }
                gyms.push(obj);
           }
           results.push({gyms});
        }
    }
    return results;
}

module.exports = getAreasOfInterests
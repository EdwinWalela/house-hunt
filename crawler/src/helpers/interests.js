const Axios = require("axios");
const GG_API_KEY = process.env.GG_API_KEY;
const BASE_URI = 'https://maps.googleapis.com/maps/api/place/textsearch/json?rankBy=prominence&sensor=true&';

const getAreasOfInterests = async (interests,listingLocation) =>{
    let results = { 
        shops:[],
        medics:[],
        restaurants:[],
        gyms:[]
    };
        if(interests["shoppingMalls"]){
            let shops = [];
            let place = "shopping malls"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
   
            places = places.splice(0,5)
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
            results["shops"] = shops
        }else{
            results["shops"] = []
        }
        if(interests["medics"]){
            let medics = [];
            let place = "hospitals"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            places = places.splice(0,5)
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
           results["medics"] = medics;
        }else{
            results["medics"] = []
        }
        if(interests["restaurants"]){
            let restaurants = [];
            let place = "restaurants"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            places = places.splice(0,5)
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
           results["restaurants"] = restaurants;
        }else{
            results["restaurants"] = [] 
        }
        if(interests["gyms"]){
            let gyms = [];
            let place = "gyms"
            let query = `${place} in ${listingLocation}`;
            let URI = `${BASE_URI}query=${query}&key=${GG_API_KEY}`;
            let res = await Axios.get(URI);
            let places = res.data.results;
            places = places.splice(0,5)
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
           results[gyms] = gyms;
        }else{
            results["gyms"] = []
        }

    return results;
}

module.exports = getAreasOfInterests
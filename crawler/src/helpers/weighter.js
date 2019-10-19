
const weighter = (places) =>{
        let shopRating = 0;
        let restRating = 0;
        let medicalRating = 0;
        let gymRating = 0;
        let weights = [];


        if(places["shops"].length != 0){
            let shops = places["shops"]
            shops.map(shop=>{
                shopRating+=shop.rating;
            })
            shopRating = Math.floor(shopRating/shops.length)
        }
        if(places["restaurants"].length != 0){
            let restaurants = places["restaurants"];
            restaurants.map(rest=>{
                restRating+=rest.rating;
            })
            restRating = Math.floor(restRating/restaurants.length)
        }
        if(places["medics"].length != 0){
            let medicals = places["medics"];
            medicals.map(medical=>{
                medicalRating+=medical.rating;
            })
            medicalRating = Math.floor(medicalRating/medicals.length)
        }
        if(places["gyms"].length != 0){
            let gyms = places["gyms"];
            gyms.map(gym=>{
                gymRating+=gym.ratings
            })
            gymRating = Math.floor(gymRating/gyms.length)
        }

    weights = {
        shopRating,
        restRating,
        medicalRating,
        gymRating
    }

    return weights;
}

module.exports = weighter
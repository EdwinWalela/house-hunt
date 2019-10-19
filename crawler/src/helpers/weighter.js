
const weighter = (places) =>{
        let shopRating = 0;
        let restRating = 0;
        let medicalRating = 0;
        let gymRating = 0;
        let weights = [];
        let shops = places["shops"];
        let restaurants = places[1].restaurants;
        console.log(shops)
        places.map(place=>{
            let shops = place.shops || [];
            let restaurants = place.restaurants || [];
            let medicals = place.medical || [];
            let gyms = place.gyms || [];
            
            try{
                shops.map(shop=>{
                    shopRating+=shop.rating;
                })
                restaurants.map(rest=>{
                    restRating+=rest.rating;
                })
                medicals.map(medical=>{
                    medicalRating+=medical.rating;
                })
                gyms.map(gym=>{
                    gymRating+=gym.ratings
                })
            }catch(err){

            }
            
            shopRating = Math.floor(shopRating/shops.length)
            restRating = Math.floor(restRating/restaurants.length)
            medicalRating = Math.floor(medicalRating/medicals.length)
            gymRating = Math.floor(gymRating/gyms.length)

            weights.push({
                shopRating,
                restRating,
                medicalRating,
                gymRating
            })
        })
    return weights;
}

module.exports = weighter
const router = require("express").Router();
const Tweet = require("../../models/Tweet");
const Area = require("../../models/Area");

router.get('/',async(req,res)=>{
    let results;
    try {
        results = await Tweet.find({});
    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        })
        return;
    }
    res.send({
        msg:"OK",
        results
    })
});

router.get('/analytics',async(req,res)=>{
    // Get all Tweets
    let tweets = await Tweet.find({});
    // Get one area
    let areas = await Area.find({});
    // loop through all tweets
    tweets.map(tweet=>{
        // split each into array
        words = tweet.body.split(' ');
        // compare each word with all areas
        words.map(word=>{
            areas.map(area=>{
                word = word.toLowerCase();
                area.location = area.location.toLowerCase();
                if(area.location === word){
                    // echo match
                    console.log(area.location+" matched");
                }
            })
        })
    })
    
})

module.exports = router;
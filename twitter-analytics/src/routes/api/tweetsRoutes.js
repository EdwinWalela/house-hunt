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
        count:results.length,
        results
    })
});

router.get('/analytics',async(req,res)=>{
    let hits = [];
    // Get all Tweets
    let tweets = await Tweet.find({});
    // Get one areas
    let areas = await Area.find({});

    // Round 1: Identify muli-word areas
    // loop through all tweets
    for(let i = 0; i < tweets.length;i++){
        // remove punctuation marks
        let tweet = tweets[i].body.replace(/[.,\/#@!?$%\^&\*;:{}=\-_`~()]/g,"");
        // remove space left
        tweet = tweet.replace(/\s{2,}/g," ");
        // split tweet to words
        let words = tweet.split(' ');
        for(let j = 0; j < words.length-1; j++){
            let wordPhrase = words[j].toLowerCase() +'-'+words[j+1].toLowerCase();
            areas.map(area=>{
                if(area.location == wordPhrase){
                    hits.push(area.location);
                }
            })
        }
    }
    // Round 2: Identify one-word areas
    tweets.map(tweet=>{
        // split each into array
        words = tweet.body.split(' ');
        words.map(word=>{
            areas.map(area=>{
                word = word.toLowerCase();
                area.location = area.location.toLowerCase();
                if(area.location === word){
                    hits.push(area.location);
                }
            })
        })
    })
    
    res.send({
        msg:"OK",
        hits
    })
})

module.exports = router;
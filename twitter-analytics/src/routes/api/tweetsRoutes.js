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
    var counts = {};
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
                area.location = area.location.replace(/[.,\/#@!?$%\^&\*;:{}=\_`~()]/g,"");
                area.location = area.location.replace(/\s{2,}/g," ");
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
    });
    for (var i = 0; i < hits.length; i++) {
        counts[hits[i]] = 1 + (counts[hits[i]] || 0);
    }

    //Convert results to an object array
    let arr = [];
    Object.keys(counts).map(key=>{
        let obj = {}
        obj[key] = counts[key]
        arr.push(obj)
    })

    res.send({
        msg:"OK",
        hits:hits.length,
        areas:arr,
    })
})

router.get('/analytics/:area',async(req,res)=>{
    let hits = [];
    var counts = {};
    let location = req.params.area.toLowerCase()
    // Get all Tweets
    let tweets = await Tweet.find({});
    // Get one areas
    let areas = await Area.find({
        location
    });
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
                area.location = area.location.replace(/[.,\/#@!?$%\^&\*;:{}=\_`~()]/g,"");
                area.location = area.location.replace(/\s{2,}/g," ");
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
    });
    for (var i = 0; i < hits.length; i++) {
        counts[hits[i]] = 1 + (counts[hits[i]] || 0);
    }

    //Convert results to an object array
    let arr = [];
    Object.keys(counts).map(key=>{
        let obj = {}
        obj[key] = counts[key]
        arr.push(obj)
    })

    
    if(arr.length == 0){
        let obj = {}
        obj[location] = 0
        arr.push(obj);
    }

    res.send({
        msg:"OK",
        hits:hits.length,
        areas:arr,
    })
})


module.exports = router;
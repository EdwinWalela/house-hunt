const router = require("express").Router();
const cheerio = require("cheerio");
const Tweet = require("../../models/Tweet");
const fs = require("fs");

const wordChecker = (word) =>{
    word = word.toLowerCase();
    if( word.includes('tokens') || word.includes('m-pesa') || word.includes('meter')){
            return false;
    }
    if(
        word.includes('outage') ||
        word.includes('loss') ||
        word.includes('potea') ||
        word.includes("power") ||
        word.includes('no') ||
        word.includes('black') ||
        word.includes('blackout') ||
        word.includes('darkness') ||
        word.includes('outage') 
        ){
            return true;
    }else{
        return false;
    }
}

router.get('/crawl',async(req,res)=>{
    let dom;
    // read html from file
    try{
        dom = fs.readFileSync('./tweets.html','utf8');
    }catch(err){
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        })
    }
    // load html
    let $ = cheerio.load(dom);

    let results = [];
    $('li').map((i,el)=>{
        let body = $(el).find('p.TweetTextSize.js-tweet-text.tweet-text').text().trim();
        if(body.length>4){
            // remove dirty tweets
            // if(true){
            if(wordChecker(body)){
                results.push(body);
            }
        }
    })
    
    // Save crawled tweets to db
    results.map(async tweet=>{
        await new Tweet({
            body:tweet
        }).save();
    })

    res.send({
        msg:`${results.length} tweets saved to db`,
        // results
    })
})


module.exports = router;
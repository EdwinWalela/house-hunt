const router = require("express").Router();
const cheerio = require("cheerio")
const fs = require("fs");

const wordChecker = (word) =>{
    word = word.toLowerCase();
    if(word.includes('tokens') || word.includes('meter')){
        return false;
    }
    if(
        word.includes('outage') ||
        word.includes('loss') ||
        word.includes('potea') ||
        word.includes('no power') ||
        word.includes('hakuna') ||
        word.includes('outage')
        ){
            return true;
    }else{
        return false;
    }
}

router.get('/crawl',async(req,res)=>{
    let dom;
    try{
        dom = fs.readFileSync(__dirname+'/tweets.html','utf8');
    }catch(err){
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        })
    }
    let $ = cheerio.load(dom);
    let results = [];
    $('li').map((i,el)=>{
        let body = $(el).find('p.TweetTextSize.js-tweet-text.tweet-text').text().trim();
        body = JSON.stringify(body);
        if(body.length>4){
            if(wordChecker(body)){
                results.push(body);
            }
        }
    })
    
    res.send({
        msg:"OK",
    })
})


module.exports = router;
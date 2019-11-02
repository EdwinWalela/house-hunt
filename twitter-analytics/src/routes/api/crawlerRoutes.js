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
        word.includes('no power') ||
        word.includes('black out') ||
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
    $('div').map((i,el)=>{
        let body = $(el).find('span.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0').text().trim();
        body = JSON.stringify(body);
      
        if(body.length>4){
            // remove dirty tweets
            if(true){
                results.push(body);
            }
        }
    })
    
    // Save crawled tweets to db
    results.map(async tweet=>{
        // await new Tweet({
        //     body:tweet
        // }).save();
    })

    res.send({
        msg:`${results.length} tweets saved to db`,
    })
})


module.exports = router;
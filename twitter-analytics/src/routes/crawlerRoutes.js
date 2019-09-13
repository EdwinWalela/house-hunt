const router = require("express").Router();
const cheerio = require("cheerio")
const fs = require("fs");

router.get('/',async(req,res)=>{
    let dom;
    try{
        dom = fs.readFileSync('./routes/tweets.html','utf8');
    }catch(err){
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        })
    }
    let $ = cheerio.load(dom);
    let results = [];
    $('div.css-1dbjc4n.r-my5ep6.r-qklmqi.r-1adg3ll').map((i,el)=>{
        let body = $(el).find('span.css-901oao').text().trim();
        body = JSON.stringify(body);
        results.push(body);
    })
    res.send({
        msg:"OK",
        count:results.length,
        results
    })
})

module.exports = router;
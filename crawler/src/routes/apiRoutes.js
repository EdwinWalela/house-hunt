const router = require("express").Router();
const jumiaCrawler = require("../crawlers/jumia");
const jijiCrawler = require("../crawlers/jiji");

router.get('/',async(req,res)=>{
  let query = req.query.q || '';
  let clientLocation = req.query.client || 'nairobi';
  let depth = Number(req.query.depth) || 2;
  let offset = Number(req.query.offset) || 0;
  let results = await jumiaCrawler(query,clientLocation,depth,offset);
  // let results = await jijiCrawler(query,clientLocation,depth,offset);
  res.send({
    count:results.length,
    query,
    clientLocation,
    results,
  });
})

module.exports = router;

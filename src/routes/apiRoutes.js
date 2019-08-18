const router = require("express").Router();
const jumiaCrawler = require("../crawlers/jumia");

router.get('/',async(req,res)=>{
  let query = req.query.q || '';
  let area = req.query.area || '';
  let clientLocation = req.query.client || 'nairobi';
  let results = await jumiaCrawler(query,area,clientLocation,1);
  res.send({
    count:results.length,
    query,
    clientLocation,
    results,
  });
})

module.exports = router;

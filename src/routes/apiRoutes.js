const router = require("express").Router();
const jumiaCrawler = require("../crawlers/jumia");

router.get('/',async(req,res)=>{
  let query = req.query.q || '';
  let area = req.query.area || '';
  let results = await jumiaCrawler(query,area,10);
  res.send({
    count:results.length,
    query,
    results
  });
})

module.exports = router;

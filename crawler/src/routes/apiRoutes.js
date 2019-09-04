const router = require("express").Router();
const jumiaCrawler = require("../crawlers/jumia");
const jijiCrawler = require("../crawlers/jiji");

const Listing = require("../models/Listing");

router.get('/crawl-jumia',async(req,res)=>{
  let query = req.query.q || '';
  let depth = Number(req.query.depth) || 2;
  let offset = Number(req.query.offset) || 0;
  let results = await jumiaCrawler(query,depth,offset);

  results = results.map(listing=>{
    delete listing.id
    delete listing.category
    listing.location = listing.location.toLowerCase();
    listing.origin = 'jumia'
    listing.beds = 3;
    return listing;
  })

  results.map(async listing=>{
    await new Listing({
      ...listing,
      baths:0
    }).save();
  })


  res.send({
    msg:`${results.length} records saved to db`
    // results
  });
})

router.get('/listings',async(req,res)=>{
  
  let beds = Number(req.query.beds) || '';
  let location = req.query.location || '';
  let limit = Number(req.query.limit) || 20
  let results = [];

  try {
    if(beds !== '' && location !== ''){
      results = await Listing.find({
        $and:[
          {beds},
          {location},
        ]
      }).limit(limit);
    }else{
      results = await Listing.find({}).limit(limit);
    }
  } catch (err) {
    console.log(err)
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

router.post('/listings/:id',async(req,res)=>{
  let id = req.params.id;
  let listing = req.body;
  console.log(req.body);

  try{
    await Listing.findByIdAndUpdate(id,{
      title:listing.title,
      price:listing.price,
      location:listing.location,
      url:listing.url,
      beds:Number(listing.beds),
      baths:Number(listing.baths),
    })
  }catch(err){
    console.log(err)
    res.status(500).send({
      msg:"err",
      err
    })
    return;
  }
  res.send({
    msg:"Updated recorded"
  })
});



module.exports = router;

const router = require("express").Router();
const jumiaCrawler = require("../crawlers/jumia");
const metricsHelper = require("../helpers/metrics");
const Listing = require("../models/Listing");
const Location = require("../models/Locations");

router.get('/refresh-location',async(req,res)=>{
    let locations = [];
    // Delete old locations
    await Location.deleteMany({});

    // Retrieve listings
    let listings = await Listing.find({});

    // Save locations locations
    listings.map(async listing=>{
        let location = listing.location;
        locations.push(location);
    })

    // Remove duplicates
    let uniqueSet = new Set(locations);
    locations = [...uniqueSet]

    // Delete old locations
    await Location.deleteMany({});

    // Save new Locations
    locations.map(async loc=>{
        await new Location({
            area:loc,
        }).save();
    })

    res.send({
        msg:"OK",
        count:locations.length,
        locations
    })
})

router.get('/locations',async(req,res)=>{
    let locations = await Location.find({}).sort({area:1});

    res.send({
        msg:"OK",
        count:locations.length,
        locations
    })
})

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
  let beds = req.query.beds !=="undefined" ? Number(req.query.beds) : '';
  let location = req.query.location || '';
  let refferencePoint = req.query.reff;
  let limit = Number(req.query.limit) || 400;
  let results = [];

  try {
    if(beds !== '' && location !== ''){
      results = await Listing.find({
        $and:[
          {beds},
          {location},
        ]
      }).limit(limit);
    if(results.length < 2){
        results = await Listing.find({
            $or:[
              {beds},
              {location},
            ]
          }).limit(limit);
     }

    }else if(beds!==''){
        results = await Listing.find({
            beds
        }).limit(limit);
    }else if(location!==''){
        results = await Listing.find({}).limit(limit);
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

  results = results.map(listing=>{
    delete listing.id
    delete listing.category
    listing.location = listing.location.toLowerCase();
    listing.origin = 'jumia'
    listing.beds = 3;
    return listing;
  })

  if(typeof refferencePoint !== undefined){
    for(let i = 0; i < results.length; i++){
        let metric = await metricsHelper(results[i].location,refferencePoint);
        results[i] = {
            ...results[i]._doc,
            metric
        }
    }
  }

  res.send({
    msg:"OK",
    count:results.length,
    results
  })
});

router.get('/listings/:id',async(req,res)=>{
    let id = req.params.id;

    let listing;
    try{ 
        listing = await Listing.findById(id);
    }catch(err){
        console.log(err);
        res.status(500).send({
            msg:"error",
            err
        });
        return;
    }
    res.send({
        msg:"OK",
        listing
    })
})

router.put('/listings/:id',async(req,res)=>{
  let id = req.params.id;
  let listing = req.body;
  try{
    await Listing.findByIdAndUpdate(id,{
      title:listing.title,
      price:listing.price,
      location:listing.location,
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

router.delete('/listings/:id',async(req,res)=>{
    let id = req.params.id;
    
    try{
        await Listing.findByIdAndDelete(id);
    }catch(err){
        res.status(500).send({
            msg:"error",
            err
        })
        return;
    }

    res.send({
        msg:"OK"
    })
})



module.exports = router;

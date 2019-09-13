const router = require("express").Router();
const Area = require("../../models/Area");


router.get('/',async(req,res)=>{
  let areas;

  try{
    areas = await Area.find({});
  }catch(err){
    res.status(500).send({
      msg:"error",
      err
    });
    return;
  }

  res.send({
    msg:"OK",
    count:areas.length,
    areas,
  });
});

router.get('/:id',async(req,res)=>{
  let area;
  try {
    
    area = await Area.findById(req.params.id);
    
  } catch (err) {
    res.status(500).send({
      msg:"error",
      err
    })  
    return;
  }

  res.send({
    msg:"OK",
    area
  });
});


router.put('/:id',(req,res)=>{
  res.send({

  });
})

module.exports = router;

const router = require("express").Router();
const Area = require("../../models/Area");


// router.get('/new',async(req,res)=>{
//     await new Area({
//         location:"south-b",
//         elecHits:0
//     }).save();

//     res.send({
//         msg:"OK"
//     });
// })

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

// router.get('/fix',async(req,res)=>{
//     let areas = [ { "_id": "5d6900c70cc1882ce42653d5", "location": "Roysambu", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653da", "location": "Kasarani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653df", "location": "Utalii", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e4", "location": "Imara Daima", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e9", "location": "Embakasi North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ee", "location": "Dandora Area IV", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d1", "location": "Roysambu", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d6", "location": "Kahawa", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653db", "location": "Njiru", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e0", "location": "Mathare North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e5", "location": "Kwa Njenga", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ea", "location": "Kariobangi North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ef", "location": "Embakasi Central", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d3", "location": "Kahawa West", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d8", "location": "Clay City", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653dd", "location": "Ruaraka", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e2", "location": "Korogocho", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e7", "location": "Pipeline", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ec", "location": "Dandora Area II", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f4", "location": "Matopeni", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f9", "location": "Embakasi", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f1", "location": "Kayole Central", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f6", "location": "Embakasi East", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f3", "location": "Komarock", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f8", "location": "Lower Savannah", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f0", "location": "Kayole North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f5", "location": "Spring Valley", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653fa", "location": "Utawala", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ed", "location": "Dandora Area III", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f2", "location": "Kayole South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653f7", "location": "Upper Savannah", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653fe", "location": "Umoja II", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265403", "location": "Viwandani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653fb", "location": "Mihango", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265400", "location": "Kariobangi South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265405", "location": "Makongeni", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653fc", "location": "Embakasi West", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265401", "location": "Maringo/Hamza", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653fd", "location": "Umoja I", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265402", "location": "Makadara", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ff", "location": "Mowlem", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265404", "location": "Harambee", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265408", "location": "Kamukunji", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540d", "location": "Nairobi Central", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265407", "location": "Eastleigh North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540c", "location": "Ngara", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265406", "location": "Pumwani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265409", "location": "Eastleigh South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540b", "location": "California", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540e", "location": "Starehe Pangani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265413", "location": "Hospital", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265412", "location": "Nairobi South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540a", "location": "Airbase", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce426540f", "location": "Ziwani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265414", "location": "Mathare", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265411", "location": "Landimawe", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265419", "location": "Kiamaiko", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265418", "location": "Mlango Kubwa", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265417", "location": "Ngei", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265416", "location": "Huruma", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265410", "location": "Kariokor", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce4265415", "location": "Mabatini", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b4", "location": "Kitisuru", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b5", "location": "Parklands/Highridge", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b6", "location": "Karura", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b9", "location": "Dagoretti North", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b8", "location": "Mountain View", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653b7", "location": "Kangemi", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653bc", "location": "Gatina", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653bb", "location": "Kawangware", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653bd", "location": "Kileleshwa", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ba", "location": "Kilimani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653be", "location": "Kabiro", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c0", "location": "Mutu-imituni", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653bf", "location": "Dagoretti South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c1", "location": "Ngando", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c5", "location": "Langata", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c6", "location": "Karen", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ca", "location": "Nyayo Highrise", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c7", "location": "Nairobi West", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c3", "location": "Uthiru/Ruthi", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c8", "location": "Mugumu-Ini", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c2", "location": "Riruta", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c4", "location": "Waithaka", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653cc", "location": "Laini saba", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653cb", "location": "Kibra", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653cf", "location": "Golf Course", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653c9", "location": "South C", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d4", "location": "Zimmerman", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653ce", "location": "Woodley /Kenyatta", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d9", "location": "Mwiki", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653de", "location": "Baba Dogo", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e3", "location": "Embakasi South", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e8", "location": "Kware", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653cd", "location": "Lindi Makina", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d2", "location": "Githurai", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d7", "location": "Kasarani", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653dc", "location": "Ruai", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e1", "location": "Lucky Summer", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653e6", "location": "Kwa Ruben", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653eb", "location": "Dandora Area I", "elecHits": 0 }, { "_id": "5d6900c70cc1882ce42653d0", "location": "Sarangombe", "elecHits": 0 }, { "_id": "5d7cae75540ceb264c130518", "location": "Juja", "elecHits": 0 } ]
    // areas.map(async area=>{
    //   let location = area.location.toLowerCase();
    //   location = location.replace(/ /g, '-').trim();
    //     await new Area({
    //         location,
    //         elecHits:0
    //     }).save();
    // })
// })

module.exports = router;

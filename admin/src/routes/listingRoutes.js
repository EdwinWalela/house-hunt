const router = require("express").Router();
const Axios = require("axios");
const CRAWLER_URI = process.env.CRAWLER_URI;

router.get('/',async(req,res)=>{ 
    let data;
    let beds = req.query.beds;
    try{
        if(typeof beds === undefined){
            data = await Axios.get(`${CRAWLER_URI}/listings`);
        }else{
            data = await Axios.get(`${CRAWLER_URI}/listings?beds=${beds}`);
        }
    }catch(err){
        console.log(err);
        res.redirect('/?status=error');
        return;
    }
    let listings = data.data.results;
    res.render('tableView',{
        listings
    });
})

router.get('/edit/:id',async(req,res)=>{
    let data = await Axios.get(`${CRAWLER_URI}/listings/${req.params.id}`);
    let listing = data.data.listing;
    res.render('edit',{
        listing
    })
})

router.post('/:id',async(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    await Axios.put(`${CRAWLER_URI}/listings/${id}`,{
        ...body
    });

    res.redirect('/listings');

})

router.get('/delete/:id',async(req,res)=>{
    let id = req.params.id;
    
    try{
        await Axios.delete(`${CRAWLER_URI}/listings/${id}`);
    }catch(err){
        console.log(err);
        res.redirect('/listings?status=error')
        return;
    }
    res.redirect('/listings?status=success')
})

module.exports = router;

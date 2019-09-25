require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;


app.set('view engine','ejs');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use('/public',express.static('public'));

// Routes

app.get('/',async(req,res)=>{
    res.render('index');
});

app.get('/listings',async(req,res)=>{ 
    let data = await Axios.get('http://localhost:8000/api/listings');
    let listings = data.data.results;
    res.render('tableView',{
        listings
    });
})

app.get('/listings/edit/:id',async(req,res)=>{
    let data = await Axios.get('http://localhost:8000/api/listings/'+req.params.id);
    let listing = data.data.listing;
    res.render('edit',{
        listing
    })
})

app.post('/listings/:id',async(req,res)=>{
    let id = req.params.id;
    let body = req.body;
    await Axios.put('http://localhost:8000/api/listings/'+id,{
        ...body
    });

    res.redirect('/listings');

})

app.get('/listings/delete/:id',async(req,res)=>{
    let id = req.params.id;
    
    try{
        await Axios.delete('http://localhost:8000/api/listings/'+id);
    }catch(err){
        console.log(err);
        res.redirect('/listings?status=error')
        return;
    }
    res.redirect('/listings?status=success')
})

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

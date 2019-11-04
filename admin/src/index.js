require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const Axios = require("axios");
const CRAWLER_URI = process.env.CRAWLER_URI

const listingRoutes = require("./routes/listingRoutes");

app.set('view engine','ejs');
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/public',express.static('public'));

// Routes
app.use("/listings",listingRoutes);

app.post("/login",(req,res)=>{
    res.redirect('/listings')
})

app.get('/',async(req,res)=>{
    let result = await Axios.get(`${CRAWLER_URI}/listings?beds=undefined`);
    let count = result.data.count;
    res.render('index',{count});
});

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

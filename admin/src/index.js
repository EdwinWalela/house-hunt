require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const listingRoutes = require("./routes/listingRoutes");

app.set('view engine','ejs');
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/public',express.static('public'));

// Routes
app.use("/listings",listingRoutes);

app.get('/',async(req,res)=>{
    res.render('index');
});

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

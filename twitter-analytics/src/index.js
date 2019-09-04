require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const apiRoutes = require("./routes/api");

// DB connection
(async()=>{
  try{
    await mongoose.connect(DB_URI,{useNewUrlParser:true});
    console.log(`DB connection established`);
  }catch(err){
    console.log(`DB connection failed\n${err}`);
  }
})()


app.use(cors());
app.use('/api',apiRoutes);

app.get('/',(req,res)=>{
  res.send({
    msg:"Hello World!"
  });
});

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

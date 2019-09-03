require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const apiRoutes = require('./routes/apiRoutes');

(async ()=>{
  try {
    await mongoose.connect(DB_URI,{useNewUrlParser:true});
    console.log(`DB connection success`);
  } catch (err) {
    console.log(`DB connection failure\n${err}`)
  }
})()

app.use(cors());
app.use('/public',express.static('public'));
app.use('/api',apiRoutes)

app.get('/',(req,res)=>{
  res.send({
    msg:"Hello World!"
  });
});

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

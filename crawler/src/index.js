require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/apiRoutes');

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

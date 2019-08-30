require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

const userRoutes = require("./routes/users.js");

app.use(cors);
app.use('/public',express.static('public'));

// Routes
app.use('/users',userRoutes);

app.get('/',(req,res)=>{
  res.send({
    msg:"Hello World!"
  });
});

app.listen(PORT,()=>{
  console.log(`listening for requests on port ${PORT}`);
})

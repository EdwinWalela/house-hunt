const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    location:String,
    elecHits:Number
},{versionKey:false});

const Area = mongoose.model('areas',AreaSchema);

module.exports = Area;
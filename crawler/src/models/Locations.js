const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    area:String,
    count:Number
},{versionKey:false});


const Location = mongoose.model("locations",LocationSchema);

module.exports = Location;
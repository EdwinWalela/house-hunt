const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title:String,
    price:Number,
    thumb:String,
    location:String,
    url:String,
    beds:String,
    baths:String,
    origin:String
},{versionKey:false});


const Listing = mongoose.model("listings",ListingSchema);

module.exports = Listing;
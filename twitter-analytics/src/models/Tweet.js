const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    body:String,
},{versionKey:false});

const Tweet = mongoose.model('tweets',TweetSchema);

module.exports = Tweet;